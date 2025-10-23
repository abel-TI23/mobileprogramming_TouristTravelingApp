import React, {useState, useEffect} from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Alert
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  weatherText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  destinationInfo: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  star: {
    color: '#FFD700',
    fontSize: 16,
    marginRight: 5,
  },
  ratingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  destinationTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  destinationSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingTop: 30,
    paddingBottom: 120, // Space for fixed bottom container
  },
  countrySection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  flagContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  flagImage: {
    width: '100%',
    height: '100%',
  },
  countryText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  viewAllButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  viewAllText: {
    color: '#2E86AB',
    fontSize: 14,
    fontWeight: '600',
  },
  testimonySection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  testimonyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  testimonyContent: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  testimonyText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  recommendationCard: {
    backgroundColor: '#141313ff',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 0,
    marginBottom: 15,
    overflow: 'hidden',
  },
  recommendationImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  recommendationContent: {
    padding: 15,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fcf7f7ff',
    marginBottom: 5,
  },
  recommendationSubtitle: {
    fontSize: 12,
    color: '#a8a7a7ff',
    marginBottom: 10,
  },
  fixedBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(196, 196, 196, 0.85)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#2E86AB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#161616ff',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  totalLabel: {
    fontSize: 12,
    color: '#d41d1dff',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#39790eff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const DestinationDetailScreen = ({ navigation, route }: any) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(450000);
  const basePrice = 450000; // Price in Indonesian Rupiah for Danau Toba

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  useEffect(() => {
    setTotalPrice(quantity * basePrice);
  }, [quantity]);

  const handleBookNow = () => {
    Alert.alert(
      'Booking Confirmation',
      `Your booking for ${quantity} person(s) to Danau Toba has been confirmed!\n\nTotal Amount: ${formatPrice(totalPrice)}\n\nThank you for choosing our service!`,
      [
        {
          text: 'OK',
          style: 'default',
        }
      ]
    );
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../../assets/images/danautoba1.jpg')}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.overlay} />
          
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ 
                color: '#fff', 
                fontSize: 24, 
                fontWeight: 'bold', 
                textAlign: 'center',
                textAlignVertical: 'center',
                includeFontPadding: false,
                marginTop: -2
              }}>←</Text>
            </TouchableOpacity>
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherText}>🌤 26° C</Text>
            </View>
          </View>

          <View style={styles.destinationInfo}>
            <View style={styles.rating}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.ratingText}>4.8</Text>
            </View>
            <Text style={styles.destinationTitle}>Danau Toba</Text>
            <Text style={styles.destinationSubtitle}>
              Lake Toba is a large natural lake in North Sumatra, Indonesia occupying the caldera of a supervolcano. The lake is located in the middle of the northern part of the island of Sumatra.
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.countrySection}>
            <View style={styles.flagContainer}>
              <Image
                source={{
                  uri: 'https://flagcdn.com/w40/id.png'
                }}
                style={styles.flagImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.countryText}>Indonesia</Text>
          </View>

          <Text style={styles.sectionTitle}>Discover the Beauty of Danau Toba</Text>
          <Text style={styles.description}>
            Experience the magnificent volcanic lake, traditional Batak culture, and stunning highland scenery. Perfect destination for nature lovers and cultural enthusiasts.
          </Text>
          
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>

          <View style={styles.testimonySection}>
            <View style={styles.testimonyContainer}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/women/32.jpg'
                }}
                style={styles.userAvatar}
              />
              <View style={styles.testimonyContent}>
                <Text style={styles.userName}>Sarah Johnson</Text>
                <Text style={styles.testimonyText}>
                  "Amazing experience at Danau Toba! The lake view is breathtaking and the Batak culture is fascinating. Highly recommended!"
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Recommendations in Danau Toba</Text>
          
          <View style={styles.recommendationCard}>
            <Image
              source={require('../../../assets/images/samosir_island.jpg')}
              style={styles.recommendationImage}
              resizeMode="cover"
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>Samosir Island Adventure</Text>
              <Text style={styles.recommendationSubtitle}>🏝️ Traditional Batak Village • 2024 Oct 25</Text>
            </View>
          </View>

          <View style={styles.recommendationCard}>
            <Image
              source={require('../../../assets/images/sipiso_waterfall.jpg')}
              style={styles.recommendationImage}
              resizeMode="cover"
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>Sipiso-piso Waterfall Tour</Text>
              <Text style={styles.recommendationSubtitle}>💧 120m Waterfall • 2024 Oct 26</Text>
            </View>
          </View>

          <View style={styles.recommendationCard}>
            <Image
              source={require('../../../assets/images/tomok_village.jpg')}
              style={styles.recommendationImage}
              resizeMode="cover"
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>Tomok Village Cultural Experience</Text>
              <Text style={styles.recommendationSubtitle}>🏛️ Stone Graves & Museums • 2024 Oct 27</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.fixedBottomContainer}>
        <View style={styles.pricingContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={decrementQuantity}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            
            <Text style={styles.quantityText}>{quantity}</Text>
            
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={incrementQuantity}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalPrice}>{formatPrice(totalPrice)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationDetailScreen;