import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import config from '../config/config.json';
import {currencyFormatter} from '../utils/currencyUtil';

const {height, width} = Dimensions.get('window');
const HEIGHT = height;
const WIDTH = width;

function ProductItem({product, navigation}) {
  const {imgUrl, name, price} = product;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {product: product})}>
      <Card containerStyle={styles.card}>
        <View style={styles.image}>
          <Image
            source={{uri: `${config.API_URL}/${imgUrl}`}}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.price}>
            {currencyFormatter.format(price)}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.3,
    padding: 0,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  info: {
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
  },
});
export default ProductItem;
