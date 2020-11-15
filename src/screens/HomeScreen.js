import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Products from '../components/Products';
import Carousel from '../components/Carousel';
import Featured from '../components/Featured';
import {ScrollView} from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return (
    <>
      <Header
        backgroundColor="#fff"
        leftComponent={{icon: 'menu', color: '#000'}}
        centerComponent={{text: 'Home', style: {color: '#000'}}}
        rightComponent={{
          icon: 'settings-outline',
          type: 'ionicon',
          color: '#000',
        }}
      />
      <ScrollView>
        <Carousel />
        <View>
          <Text style={styles.title}>Flash Sale</Text>
          <Featured navigation={navigation} />
          <Text style={styles.title}>Trending Now</Text>
          <Products navigation={navigation} />
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#616161',
    marginLeft: 10,
    marginTop: 5,
  },
});
export default HomeScreen;
