# Seed MockAPI.io from local mock/db.json
# Usage: Open PowerShell in project root and run:
#   ./scripts/seed-mockapi.ps1 -BaseUrl 'https://69036829d0f10a340b241a3b.mockapi.io/api/v1'

param(
    [Parameter(Mandatory=$false)]
    [string]$BaseUrl = 'https://69036829d0f10a340b241a3b.mockapi.io/api/v1',

    [Parameter(Mandatory=$false)]
    [string]$DbPath = 'mock/db.json'
)

if (-not (Test-Path $DbPath)) {
    Write-Error "Database file not found: $DbPath"
    exit 1
}

Write-Host "Seeding MockAPI at: $BaseUrl" -ForegroundColor Cyan

$json = Get-Content $DbPath -Raw | ConvertFrom-Json

if (-not $json.destinations) {
    Write-Error "No 'destinations' array found in $DbPath"
    exit 1
}

foreach ($item in $json.destinations) {
    # Prepare payload: convert nested coordinates object to JSON
    $payload = [PSCustomObject]@{
        id = $item.id
        title = $item.title
        country = $item.country
        imageUrl = $item.imageUrl
        rating = $item.rating
        price = $item.price
        description = $item.description
        coordinates = $item.coordinates
    } | ConvertTo-Json -Depth 5

    $putUrl = "$BaseUrl/destinations/$($item.id)"
    $postUrl = "$BaseUrl/destinations"

    Write-Host "Upserting destination id=$($item.id) title='$($item.title)'..." -NoNewline
    try {
        # Try PUT (update) first; if it fails (404) we'll POST (create)
        Invoke-RestMethod -Method Put -Uri $putUrl -ContentType 'application/json' -Body $payload -ErrorAction Stop | Out-Null
        Write-Host " updated (PUT)" -ForegroundColor Green
    }
    catch {
        # If PUT failed, try POST
        try {
            Invoke-RestMethod -Method Post -Uri $postUrl -ContentType 'application/json' -Body $payload -ErrorAction Stop | Out-Null
            Write-Host " created (POST)" -ForegroundColor Yellow
        }
        catch {
            Write-Host " failed: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

Write-Host "Seeding finished." -ForegroundColor Cyan
