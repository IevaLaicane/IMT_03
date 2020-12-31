import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  ImageBackground,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
} from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import BackHandler from 'react-native';

export default function EndScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/b/b0/Vidzeme_University_of_Applied_Sciences_-_logo.jpg',
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50,
            width: 180,
            height: 60,
            opacity: 1,
          }}
        />

        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}>
          You answered correct to {route.params.paramKey} of 3 questions!{' '}
        </Text>

        <Text style={styles.black}> </Text>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.customBtnText}>Try again</Text>
        </TouchableOpacity>

        <Text style={styles.black}> </Text>
        <Text style={styles.black}>
          Click here to find out everything you need to know about Vidzeme University of Applied
          Sciences:
        </Text>
        <Text style={styles.black}> </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://va.lv/en')}>
          <Text>Vidzeme University of Applied Sciences</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: '#FFFFFF',
  },

  black: {
    fontFamily: 'Arial Narrow',
    justifyContent: 'center',
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },

  customBtnText: {
    fontFamily: 'Arial Narrow',
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },

  customBtnBG: {
    backgroundColor: '#97BB1B',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
  },
});
