import React from 'react';
import { Text, View, Image } from 'react-native';

const HelloWorldApp = () => {
  return (
  
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world, from group 3, this is member Liene Laure!</Text>

      <Image source={{uri: 'https://i.mycdn.me/image?id=859976396492&plc=WEB&tkn=*to1GtRJUTO5DiATJ9mjDg13WIs0&fn=sqr_288'}}
       style={{width: 300, height: 300}} />

    </View>
  )
}
export default HelloWorldApp;
