/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {Button, Header, Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
const {height, width} = Dimensions.get('window');
const HEIGHT = height;
const WIDTH = width;

function CartScreen({navigation}) {
  const cart_items = useSelector((state) => state.cartState.cart_items);

  return (
    <>
      <Header
        backgroundColor="#fff"
        leftComponent={<Icon name="menu" color="#000" onPress={() => {}} />}
        centerComponent={{text: 'My Cart', style: {color: '#000'}}}
      />
      <ScrollView style={{flex: 1}}>
        {cart_items.length === 0 && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Cart is Empty</Text>
            <Button
              title="Shop"
              color="black"
              onPress={() => navigation.navigate('ProductList')}
            />
          </View>
        )}
        {cart_items.length > 0 && (
          <View>
            {cart_items.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
          </View>
        )}
      </ScrollView>
    </>
  );
}
export default CartScreen;
