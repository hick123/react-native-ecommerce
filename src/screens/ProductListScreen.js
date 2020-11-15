import React from 'react';
import {Header, Icon} from 'react-native-elements';
import Products from '../components/Products';

function ProductListScreen({navigation}) {
  return (
    <>
      <Header
        backgroundColor="#fff"
        leftComponent={<Icon name="menu" color="#000" onPress={() => {}} />}
        centerComponent={{text: 'Product List', style: {color: '#000'}}}
        rightComponent={{
          icon: 'settings-outline',
          type: 'ionicon',
          color: '#000',
        }}
      />
      <Products navigation={navigation} />
    </>
  );
}
export default ProductListScreen;
