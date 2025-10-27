import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

const { width } = Dimensions.get('window');

const TicketsScreen = ({ navigation }: any) => {
  const [selectedDate, setSelectedDate] = useState(23);
  const [selectedTab, setSelectedTab] = useState('Aircraft');

  const dates = [
    { day: 'S', date: 22 },
    { day: 'M', date: 23 },
    { day: 'T', date: 24 },
    { day: 'W', date: 25 },
    { day: 'T', date: 26 },
    { day: 'F', date: 27 },
    { day: 'S', date: 28 },
  ];

  const tabs = ['Hotel', 'Aircraft', 'Villa', 'Attraction'];

  const flights = [
    {
      id: 1,
      from: 'NL',
      to: 'IDN',
      fromCity: 'Amsterdam',
      toCity: 'Jakarta',
      departTime: '5:30pm',
      arriveTime: '3:30am',
      departDate: 'Mon, 23 Jun',
      arriveDate: 'Tue, 24 Jun',
      price: '$1,700',
    },
    {
      id: 2,
      from: 'NL',
      to: 'IDN',
      fromCity: 'Amsterdam',
      toCity: 'Jakarta',
      departTime: '5:30pm',
      arriveTime: '3:30am',
      departDate: 'Mon, 23 Jun',
      arriveDate: 'Tue, 24 Jun',
      price: '$1,650',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tickets</Text>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Current Source */}
        <View style={styles.sourceContainer}>
          <Text style={styles.sourceLabel}>Current Source</Text>
          <Text style={styles.sourceValue}>Netherlands 🔽</Text>
        </View>

        {/* Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                selectedTab === tab && styles.tabActive,
              ]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Calendar */}
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarMonth}>June, 2025 🔽</Text>
          </View>
          <View style={styles.datesContainer}>
            {dates.map((item) => (
              <TouchableOpacity
                key={item.date}
                style={[
                  styles.dateItem,
                  selectedDate === item.date && styles.dateItemActive,
                ]}
                onPress={() => setSelectedDate(item.date)}
              >
                <Text
                  style={[
                    styles.dateDay,
                    selectedDate === item.date && styles.dateDayActive,
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dateNumber,
                    selectedDate === item.date && styles.dateNumberActive,
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Tickets Found */}
        <Text style={styles.ticketsFound}>4 Tickets Found</Text>

        {/* Flight Cards */}
        {flights.map((flight) => (
          <View key={flight.id} style={styles.flightCard}>
            <View style={styles.flightRoute}>
              {/* From */}
              <View style={styles.flightPoint}>
                <View style={styles.countryCode}>
                  <Text style={styles.countryCodeText}>{flight.from}</Text>
                </View>
                <Text style={styles.cityName}>{flight.fromCity}</Text>
              </View>

              {/* Plane Icon */}
              <View style={styles.planeContainer}>
                <Text style={styles.planeIcon}>✈️</Text>
              </View>

              {/* To */}
              <View style={styles.flightPoint}>
                <View style={styles.countryCode}>
                  <Text style={styles.countryCodeText}>{flight.to}</Text>
                </View>
                <Text style={styles.cityName}>{flight.toCity}</Text>
              </View>
            </View>

            {/* Flight Details */}
            <View style={styles.flightDetails}>
              <View>
                <Text style={styles.flightTime}>{flight.departTime}</Text>
                <Text style={styles.flightDate}>{flight.departDate}</Text>
              </View>
              <View style={styles.flightDuration}>
                <View style={styles.durationLine} />
                <View style={styles.durationDot} />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.flightTime}>{flight.arriveTime}</Text>
                <Text style={styles.flightDate}>{flight.arriveDate}</Text>
              </View>
            </View>

            {/* Price */}
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{flight.price}</Text>
            </View>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backIcon: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  sourceContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sourceLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  sourceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  tabsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  tabActive: {
    backgroundColor: '#FF6B4A',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
  },
  calendarContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  calendarHeader: {
    marginBottom: 15,
  },
  calendarMonth: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    width: 45,
  },
  dateItemActive: {
    backgroundColor: '#FF6B4A',
  },
  dateDay: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  dateDayActive: {
    color: '#fff',
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  dateNumberActive: {
    color: '#fff',
  },
  ticketsFound: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  flightCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  flightRoute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  flightPoint: {
    alignItems: 'center',
    flex: 1,
  },
  countryCode: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  countryCodeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cityName: {
    fontSize: 12,
    color: '#888',
  },
  planeContainer: {
    marginHorizontal: 20,
  },
  planeIcon: {
    fontSize: 24,
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  flightTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  flightDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  flightDuration: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  durationLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  durationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B4A',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TicketsScreen;
