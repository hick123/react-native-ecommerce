import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import config from '../config/config.json';
import axios from 'axios';
import ProductItem from './ProductItem';
import {Header} from 'react-native-elements';

function Products({navigation}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/db/products`)
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.products}>
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            navigation={navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default Products;
