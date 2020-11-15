import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetails from '../components/ProductDetails';

const ProductListStack = createStackNavigator();

function ProductListStackScreen() {
  return (
    <ProductListStack.Navigator headerMode={false}>
      <ProductListStack.Screen
        name="Product List"
        component={ProductListScreen}
      />
      <ProductListStack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
    </ProductListStack.Navigator>
  );
}
export default ProductListStackScreen;
