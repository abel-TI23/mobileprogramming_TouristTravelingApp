// Local data for destinations
export interface Destination {
  id: string;
  title: string;
  country: string;
  imageUrl: any; // Local image or URI
  rating: number;
  price: number;
  description?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const destinationsData: Destination[] = [
  {
    id: '1',
    title: 'Labuan Bajo',
    country: 'Indonesia',
    imageUrl: require('../../assets/images/danautoba1.jpg'),
    rating: 5.0,
    price: 4000,
    description: 'Labuan Bajo is a fishing town located at the western end of the large island of Flores in the East Nusa Tenggara province of Indonesia. Home to the famous Komodo Dragons and stunning beaches.',
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
    description: 'Lake Toba is a large natural lake in North Sumatra, Indonesia occupying the caldera of a supervolcano. Experience the magnificent volcanic lake and traditional Batak culture.',
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
    description: 'Samosir Island is a large volcanic island in Lake Toba. Discover traditional Batak villages, ancient stone graves, and stunning highland scenery.',
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
    rating: 99999.98,
    price: 5500,
    description: 'Ngawi is a regency in East Java, Indonesia, known for its beautiful landscapes and rich cultural heritage. Experience the charm of this hidden gem.',
    coordinates: {
      lat: 45.4408,
      lng: 12.3155,
    },
  },
];
