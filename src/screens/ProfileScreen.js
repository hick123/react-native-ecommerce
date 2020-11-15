/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';

function ProfileScreen() {
  return (
    <>
      <Header
        backgroundColor="#fff"
        leftComponent={{icon: 'menu', color: '#000'}}
        centerComponent={{text: 'Profile', style: {color: '#000'}}}
        rightComponent={{
          icon: 'settings-outline',
          type: 'ionicon',
          color: '#000',
        }}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile!</Text>
      </View>
    </>
  );
}
export default ProfileScreen;
