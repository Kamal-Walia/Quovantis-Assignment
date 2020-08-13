import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
import Sidebar from '../Sidebar';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={AppNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
