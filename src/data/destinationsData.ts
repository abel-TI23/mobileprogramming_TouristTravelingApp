// Data module that can fetch from a hosted mock API (MockAPI.io) or a
// local json-server, and falls back to the built-in local dataset if the
// API is unavailable.
import { API_BASE_URL } from '../config/api';
export interface Destination {
  id: string;
  title: string;
  country: string;
  // imageUrl can be a local require (object) OR a remote URI string
  imageUrl: any;
  rating: number;
  price: number;
  description?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Local fallback dataset (kept similar to original). Components can still
// render local images via `require(...)` if the API is unreachable.
export const localDestinations: Destination[] = [
  {
    id: '1',
    title: 'Labuan Bajo',
    country: 'Indonesia',
    imageUrl: require('../../assets/images/danautoba1.jpg'),
    rating: 5.0,
    price: 4000,
    description:
      'Labuan Bajo is a fishing town located at the western end of the large island of Flores. Home to the famous Komodo Dragons and stunning beaches.',
    coordinates: {
      lat: -8.4963,
      lng: 119.8889,
    },
  },
  {
    id: '2',
    title: 'Danau Toba',
    country: 'Indonesia',
    imageUrl: require('../../assets/images/danautoba.jpg'),
    rating: 4.8,
    price: 3500,
    description:
      'Lake Toba is a large natural lake in North Sumatra, Indonesia occupying the caldera of a supervolcano.',
    coordinates: {
      lat: 2.6845,
      lng: 98.8756,
    },
  },
  {
    id: '3',
    title: 'Samosir Island',
    country: 'Indonesia',
    imageUrl: require('../../assets/images/samosir_island.jpg'),
    rating: 4.7,
    price: 2500,
    description:
      'Samosir Island is a large volcanic island in Lake Toba. Discover traditional Batak villages and stunning highland scenery.',
    coordinates: {
      lat: 2.6575,
      lng: 98.8145,
    },
  },
  {
    id: '4',
    title: 'Ngawi',
    country: 'Wakanda',
    imageUrl: require('../../assets/images/Ngawi.jpg'),
    rating: 4.6,
    price: 5500,
    description:
      'Ngawi is a regency in East Java, Indonesia, known for its beautiful landscapes and cultural heritage.',
    coordinates: {
      lat: 45.4408,
      lng: 12.3155,
    },
  },
];

// Base URL is read from `src/config/api.ts` (so you can easily point the
// app to a hosted MockAPI.io endpoint). Fall back to localhost for dev.

const getApiBaseUrl = () => {
  // If API_BASE_URL is falsy, fall back to localhost. Keep logic simple to
  // avoid strict type comparisons that cause TS complaints.
  return API_BASE_URL || 'http://localhost:3000';
};

// Fetch list of destinations from the mock API. If the network call fails,
// we return the `localDestinations` fallback so the app continues to work.
export const fetchDestinations = async (): Promise<Destination[]> => {
  const base = getApiBaseUrl();
  try {
    const resp = await fetch(`${base}/destinations`);
    if (!resp.ok) throw new Error('Network response was not ok');
    const json = await resp.json();
    // Normalize objects coming from hosted MockAPI (coerce id to string,
    // ensure numeric fields are numbers, and coordinates shape is consistent).
    const normalize = (d: any): Destination => {
      const coords = d.coordinates || d.location || d.coords;
      const normalizedCoords = coords
        ? {
            lat: Number(coords.lat) || 0,
            lng: Number(coords.lng) || 0,
          }
        : undefined;

      return {
        id: String(d.id),
        title: d.title ?? '',
        country: d.country ?? '',
        imageUrl: d.imageUrl ?? d.image ?? undefined,
        rating: Number(d.rating) || 0,
        price: Number(d.price) || 0,
        description: d.description ?? '',
        coordinates: normalizedCoords,
      } as Destination;
    };

    const list = Array.isArray(json) ? json.map(normalize) : [];
    console.info && console.info(`[fetchDestinations] fetched ${list.length} items from ${base}`);
    return list;
  } catch (err) {
    console.error && console.error('Failed to fetch destinations from API, using local data.', err);
    return localDestinations;
  }
};

// Fetch a single destination by id from the mock API, falling back to local.
export const fetchDestinationById = async (id: string): Promise<Destination | undefined> => {
  const base = getApiBaseUrl();
  try {
    const resp = await fetch(`${base}/destinations/${id}`);
    if (!resp.ok) throw new Error('Network response was not ok');
    const d = await resp.json();
    if (!d) return undefined;
    // reuse normalization logic
    const coords = d.coordinates || d.location || d.coords;
    const normalizedCoords = coords
      ? {
          lat: Number(coords.lat) || 0,
          lng: Number(coords.lng) || 0,
        }
      : undefined;

    const result: Destination = {
      id: String(d.id),
      title: d.title ?? '',
      country: d.country ?? '',
      imageUrl: d.imageUrl ?? d.image ?? undefined,
      rating: Number(d.rating) || 0,
      price: Number(d.price) || 0,
      description: d.description ?? '',
      coordinates: normalizedCoords,
    };

    console.info && console.info(`[fetchDestinationById] fetched id=${result.id} from ${base}`);
    return result;
  } catch (err) {
    console.error && console.error(`Failed to fetch destination ${id} from API, using local data.`, err);
    return localDestinations.find((d) => d.id === id);
  }
};

// Also export the local dataset by name for any components that still import it.
export const destinationsData = localDestinations;
