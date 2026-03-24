import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from '../screens/WelcomeScreen';
import ModalTabs from './ModalTabs';
import ScrollTabs from './ScrollTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Início" component={WelcomeScreen} />
      <Drawer.Screen name="Modais" component={ModalTabs} />
      <Drawer.Screen name="Listas" component={ScrollTabs} />
    </Drawer.Navigator>
  );
}