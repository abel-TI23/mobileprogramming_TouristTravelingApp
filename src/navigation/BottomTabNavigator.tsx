import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/main/HomeScreen';
import TicketsScreen from '../screens/main/TicketsScreen';
import ExploreScreen from '../screens/main/ExploreScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6B4A',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <View style={styles.icon}>
                <View style={[styles.iconDot, { backgroundColor: color }]} />
                <View style={[styles.iconRoof, { borderBottomColor: color }]} />
                <View style={[styles.iconBase, { backgroundColor: color }]} />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <View style={styles.icon}>
                <View style={[styles.ticketRect, { borderColor: color }]}>
                  <View style={[styles.ticketLine, { backgroundColor: color }]} />
                  <View style={[styles.ticketLine2, { backgroundColor: color }]} />
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <View style={styles.icon}>
                <View style={[styles.compassCircle, { borderColor: color }]}>
                  <View style={[styles.compassNeedle, { backgroundColor: color }]} />
                </View>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <View style={styles.icon}>
                <View style={[styles.profileHead, { backgroundColor: color }]} />
                <View style={[styles.profileBody, { backgroundColor: color }]} />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerActive: {
    backgroundColor: '#FFF5F3',
    borderRadius: 12,
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Home icon
  iconDot: {
    position: 'absolute',
    top: 2,
    width: 3,
    height: 3,
    borderRadius: 1.5,
  },
  iconRoof: {
    position: 'absolute',
    top: 5,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  iconBase: {
    position: 'absolute',
    bottom: 2,
    width: 14,
    height: 10,
    borderRadius: 2,
  },
  // Tickets icon
  ticketRect: {
    width: 20,
    height: 16,
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 2,
  },
  ticketLine: {
    width: 12,
    height: 2,
    borderRadius: 1,
  },
  ticketLine2: {
    width: 8,
    height: 2,
    borderRadius: 1,
  },
  // Explore icon
  compassCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  compassNeedle: {
    width: 2,
    height: 10,
    borderRadius: 1,
  },
  // Profile icon
  profileHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    top: 2,
  },
  profileBody: {
    width: 16,
    height: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    bottom: 2,
  },
});

export default BottomTabNavigator;
