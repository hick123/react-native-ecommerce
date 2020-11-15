import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../components/ProductDetails';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode={false}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;
