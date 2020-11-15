/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import HomeStackScreen from './src/stacks/HomeStackScreen';
import ProductListStackScreen from './src/stacks/ProductListStackScreen';
import {updateCart} from './src/store/cart/cart.action';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const dispatch = useDispatch();

  const cart_items = useSelector((state) => state.cartState.cart_items);

  const productQuantity = useSelector(
    (state) => state.cartState.productQuantity,
  );
  React.useEffect(() => {
    dispatch(updateCart(cart_items));
  }, [cart_items, updateCart]);

  const tabBarOptions = {
    activeTintColor: '#000',
    inactiveTintColor: 'gray',
    inactiveBackgroundColor: '#fff',
    labelStyle: {fontSize: 12, paddingBottom: 5},
    style: {
      color: '#fff',
    },
    scrollEnabled: true,
    showLabel: false,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Category') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'ProductList') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="ProductList" component={ProductListStackScreen} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{tabBarBadge: productQuantity}}
        />
        <Tab.Screen name="Category" component={CategoryScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
