import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomModal from './components/CustomModal';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarActiveTintColor: '#000',
          }}
        >

          <Tab.Screen name="SLIDE">
            {() => <CustomModal animation="slide" themeColor="#2196F3" />}
          </Tab.Screen>

          <Tab.Screen name="FADE">
            {() => <CustomModal animation="fade" themeColor="#4CAF50" />}
          </Tab.Screen>

          <Tab.Screen name="NONE">
            {() => <CustomModal animation="none" themeColor="#FF9800" />}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}