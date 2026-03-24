import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScrollViewScreen from '../screens/scrolls/ScrollViewScreen';
import FlatListScreen from '../screens/scrolls/FlatListScreen';
import SectionListScreen from '../screens/scrolls/SectionListScreen';

const Tab = createBottomTabNavigator();

export default function ScrollTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScrollView" component={ScrollViewScreen} />
      <Tab.Screen name="FlatList" component={FlatListScreen} />
      <Tab.Screen name="SectionList" component={SectionListScreen} />
    </Tab.Navigator>
  );
}