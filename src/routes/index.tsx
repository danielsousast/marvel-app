import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MoreDetails from '../screens/MoreDetails';
import Search from '../screens/Search';
//import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import SlideDetails from '../screens/SlideDetails';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Slide" component={SlideDetails} />
      <Stack.Screen name="MoreDetails" component={MoreDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
