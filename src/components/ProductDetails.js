import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import config from '../config/config.json';
import {Header, Icon, Button, Rating} from 'react-native-elements';
import {currencyFormatter} from '../utils/currencyUtil';
import {addProductAction} from '../store/cart/cart.action';
const {height, width} = Dimensions.get('window');
const HEIGHT = height;
const WIDTH = width;

function ProductDetails({route, navigation}) {
  const dispatch = useDispatch();
  const {product} = route.params;

  return (
    <>
      <Header
        backgroundColor="#fff"
        leftComponent={
          <Icon
            name="arrow-back"
            color="#000"
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={{text: 'Product Details', style: {color: '#000'}}}
      />
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={{uri: `${config.API_URL}/${product.imgUrl}`}}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content}>
          <View style={styles.description}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.previousPrice}>
                {currencyFormatter.format(product.price - 20)}
              </Text>

              <Text style={styles.price}>
                {currencyFormatter.format(product.price)}
              </Text>
              <Text style={styles.saveText}>Save 10%</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Rating
              imageSize={20}
              ratingCount={5}
              startingValue={5}
              readonly
              style={styles.rating}
            />
            <Text>(15)</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            buttonStyle={styles.shareBtn}
            icon={
              <Icon
                name="share-social-outline"
                type="ionicon"
                size={18}
                color="#464646"
              />
            }
            title=" "
          />
          <Button
            buttonStyle={styles.favoriteBtn}
            icon={
              <Icon
                name="heart-outline"
                type="ionicon"
                size={18}
                color="#464646"
              />
            }
            title=" "
          />
          <Button
            buttonStyle={styles.addCartBtn}
            title="ADD TO CART"
            onPress={() => {
              dispatch(addProductAction(product));
            }}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: 'blue',
    width: WIDTH,
    height: HEIGHT * 0.5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 7,
    paddingRight: 7,
  },
  name: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  previousPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: '#464646',
    fontSize: 18,
    marginRight: 5,
  },
  price: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 20,
    marginRight: 5,
  },
  saveText: {
    backgroundColor: 'red',
    color: '#fff',
    alignSelf: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
  description: {
    width: '60%',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
    // alignItems: 'center',
  },
  rating: {},
  addCartBtn: {
    backgroundColor: 'black',
    width: WIDTH * 0.6,
    borderRadius: 0,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    bottom: 0,
    width: WIDTH,
  },
  shareBtn: {
    width: WIDTH * 0.2,
    borderRadius: 0,
    backgroundColor: '#fff',
  },
  favoriteBtn: {
    width: WIDTH * 0.2,
    borderRadius: 0,
    backgroundColor: '#fff',
  },
});
export default ProductDetails;
