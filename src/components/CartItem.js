import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import config from '../config/config.json';
import {currencyFormatter} from '../utils/currencyUtil';
import {useDispatch} from 'react-redux';
import {
  increaseProductCount,
  removeProductAction,
} from '../store/cart/cart.action';
import {decreaseProductCount} from '../store/cart/cart.utils';

const {height, width} = Dimensions.get('window');
const HEIGHT = height;
const WIDTH = width;

function CartItem({cartItem}) {
  const dispatch = useDispatch();

  const {name, price, quantity, imgUrl} = cartItem;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{uri: `${config.API_URL}/${imgUrl}`}}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <View style={styles.contentFooter}>
          <View>
            <Text style={styles.price}>
              {currencyFormatter.format(price * quantity)}
            </Text>
          </View>
          <View style={styles.quantityContainer}>
            <Icon
              name="remove-circle-outline"
              style={styles.qIcon}
              type="ionicon"
              onPress={() => dispatch(decreaseProductCount(cartItem))}
            />
            <Text style={styles.quantity}>{quantity}</Text>
            <Icon
              name="add-circle-outline"
              style={styles.qIcon}
              type="ionicon"
              onPress={() => dispatch(increaseProductCount(cartItem))}
            />
          </View>
          <View>
            <Icon
              name="trash-outline"
              type="ionicon"
              color="red"
              onPress={() => dispatch(removeProductAction(cartItem))}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    elevation: 2,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
  },
  image: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  content: {flex: 1},
  name: {fontSize: 16, marginTop: 10, paddingLeft: 10},
  contentFooter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#464646',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qIcon: {
    borderColor: '#464646',
    borderWidth: 1,
    borderRadius: 5,
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
  },
  quantity: {
    fontSize: 20,
  },
});
export default CartItem;
