import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import config from '../config/config.json';
import axios from 'axios';
import ProductItem from './ProductItem';

function Featured({navigation}) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/db/products`)
      .then((res) => setFeatured(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <FlatList
      data={featured}
      horizontal={true}
      renderItem={(product) => (
        <ProductItem product={product.item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
export default Featured;
