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
  Linking,
} from 'react-native';
import BackHandler from 'react-native';

const image = {
  uri: 'https://va.lv/sites/default/files/video_image/via_video_image.jpg',
};

export default function SQuestion({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
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
            opacity: 0.5,
          }}
        />

        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}>
          How many study directions are offered by Vidzeme University of Applied
          Sciences?
        </Text>
        <Text style={styles.black}> </Text>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() =>
            navigation.navigate('Third', {
              paramKey: route.params.paramKey + 0,
            })
          }>
          <Text style={styles.customBtnText}>Five</Text>
        </TouchableOpacity>
        <Text style={styles.black}> </Text>
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() =>
            navigation.navigate('Third', {
              paramKey: route.params.paramKey + 0,
            })
          }>
          <Text style={styles.customBtnText}>Eight</Text>
        </TouchableOpacity>
        <Text style={styles.black}> </Text>
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() =>
            navigation.navigate('Third', {
              paramKey: route.params.paramKey + 1,
            })
          }>
          <Text style={styles.customBtnText}>Six</Text>
        </TouchableOpacity>
        <Text style={styles.black}> </Text>
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() =>
            navigation.navigate('Third', {
              paramKey: route.params.paramKey + 0,
            })
          }>
          <Text style={styles.customBtnText}>Four</Text>
        </TouchableOpacity>

        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>


      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
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
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },

  customBtnText: {
    fontFamily: 'Arial Narrow',
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },

  customBtnBG: {
    backgroundColor: '#93816f',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
  },
});
