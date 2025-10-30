# MyNewProject - Travel Destination App

A React Native application featuring bottom tab navigation, reusable components, and data passing between screens. This project showcases a travel destination browsing experience with booking capabilities.

## Features

- **Bottom Tab Navigation**: 4 tabs (Home, Tickets, Explore, Profile) with custom icons
- **Reusable Components**: DestinationCard component with complete prop interface
- **Data Passing**: Navigation params to pass destination details between screens
- **TypeScript**: Full TypeScript implementation for type safety
- **Local Assets**: Image management with require() statements

## Tech Stack

- React Native: v0.81.4
- TypeScript
- React Navigation (Stack + Bottom Tabs)
- React Hooks (useState, useEffect)

## Project Structure

```
src/
├── components/
│   └── DestinationCard.tsx      # Reusable destination card component
├── data/
│   └── destinationsData.ts       # Local data source with destination objects
├── navigation/
│   └── BottomTabNavigator.tsx    # Bottom tab configuration (4 tabs)
└── screens/
    └── main/
        ├── WelcomeScreen.tsx         # Initial splash screen
        ├── HomeScreen.tsx            # Main screen with destination cards
        ├── TicketsScreen.tsx         # Flight/hotel booking interface
        ├── ExploreScreen.tsx         # Explore destinations
        ├── ProfileScreen.tsx         # User profile
        └── DestinationDetailScreen.tsx # Detail view with navigation params
```

## Navigation Structure

```
Stack Navigator (Root)
├── Welcome Screen (Initial route)
├── HomeTabs (Bottom Tab Navigator)
│   ├── Home Tab → HomeScreen
│   ├── Tickets Tab → TicketsScreen
│   ├── Explore Tab → ExploreScreen
│   └── Profile Tab → ProfileScreen
└── DestinationDetail Screen (Nested in stack)
```

## DestinationCard Component

### Props Interface

```typescript
interface DestinationCardProps {
  id: number;                    // Required: Unique identifier
  title: string;                 // Required: Destination name
  country: string;               // Required: Country badge
  imageUrl: any;                 // Required: Image source (require())
  rating: number;                // Required: Star rating (0-5)
  price: string;                 // Required: Price display
  description?: string;          // Optional: Detail description
  coordinates?: string;          // Optional: GPS coordinates
  onPress: () => void;          // Required: Card press handler
}
```

### Features
- Favorite button with toggle state
- Country badge overlay
- Star rating display
- Price formatting
- Image background with gradient
- TypeScript type safety

## Navigation Params

When navigating from HomeScreen to DestinationDetail, the following params are passed:

```typescript
{
  id: number,
  title: string,
  country: string,
  imageUrl: any,
  rating: number,
  price: string,
  description?: string,      // Optional
  coordinates?: string       // Optional
}
```

## Data Source

Local data is stored in `src/data/destinationsData.ts`:

```typescript
export const destinationsData = [
  {
    id: 1,
    title: 'Danau Toba',
    country: 'Indonesia',
    imageUrl: require('../../assets/images/danautoba.jpg'),
    rating: 4.8,
    price: 'Rp 1.200.000',
    description: 'Lake Toba is a volcanic lake...',
    coordinates: '2.6845° N, 98.8756° E'
  },
  // ... more destinations
];
```

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)
- JDK 11 or higher

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Install iOS Pods** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Start Metro Bundler**
   ```bash
   npm start
   ```

4. **Run on Android**
   ```bash
   npm run android
   ```

5. **Run on iOS** (macOS only)
   ```bash
   npm run ios
   ```

### Mock API (MockAPI.io)

This project is configured to use a hosted MockAPI.io endpoint. Set the
base URL in `src/config/api.ts` (the file is preconfigured with your
MockAPI.io project) so the app requests go to `${API_BASE_URL}/destinations`.

If you previously used a local json-server, you can now rely on your
hosted MockAPI project instead. The app still falls back to bundled local
data if the network request fails.

## Screens Overview

### WelcomeScreen
- Initial splash screen with tourism imagery
- "Start Exploring" button navigates to HomeTabs

### HomeScreen
- Greeting header with user name
- Search bar for destinations
- Horizontal scrolling banner
- Destination cards (minimum 2) using DestinationCard component
- Each card navigates to DestinationDetail with full params

### TicketsScreen
- Date selection calendar
- Horizontally scrollable tabs (Hotel, Aircraft, Villa, Attraction)
- Flight route display (NL → IDN)
- Booking interface

### DestinationDetailScreen
- Receives all navigation params
- Displays: id, title, country, rating, price, description, coordinates
- Back navigation to Home
- Booking button

### ExploreScreen
- Placeholder for explore functionality
- Compass icon in tab bar

### ProfileScreen
- Placeholder for user profile
- Person icon in tab bar

## Assignment Criteria Compliance

✅ **Bottom Tab Navigation (20pts)**
- 4 tabs implemented: Home, Tickets, Explore, Profile
- Custom icons with active/inactive states
- Rounded tab bar with styling

✅ **Home Screen Elements**
- Greeting text with user name
- Banner component (horizontal scroll)
- Search bar with icon
- Minimum 2 destination cards

✅ **DestinationCard Component (25pts)**
- Reusable with TypeScript interface
- Required props: image, country, title, rating, price, onPress
- Additional features: favorite icon with toggle state
- Proper styling with shadows and rounded corners

✅ **Data Passing (25pts)**
- All required params passed via navigation
- Optional params included (description, coordinates)
- Params properly received in DestinationDetail screen
- TypeScript type safety enforced

✅ **UI Quality (15pts)**
- Consistent styling across screens
- Responsive layouts
- Custom icons and gradients
- Shadow effects and rounded corners

✅ **Code Quality (15pts)**
- TypeScript implementation
- Clean component structure
- Proper imports and exports
- Commented code sections

## Troubleshooting

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

### Android Build Issues
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

### Port 8081 Already in Use
```bash
taskkill /F /IM node.exe
npm start
```

## License

This project is created for educational purposes as part of a Mobile Programming assignment.

---

**React Native Version**: 0.81.4  
**Last Updated**: 2024

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
