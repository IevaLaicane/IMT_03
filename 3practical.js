import 'react-native-gesture-handler';
import { Component } from 'react';
import { useState } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FlatList,
  StyleSheet,
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

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Flat List" component={Flat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    padding: 125,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
  },

  black: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 0,
  },

   fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

});

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={[{ width: '100%', margin: 0, alignItems: 'center' }]}>
        
         <View style={styles.fixToText}>
        <Button
          title="Go to list view!"
          color="#97BB1B"
          onPress={() =>
            navigation.navigate('Flat List', { name: 'Flat List' })
          }
        />
        </View>
        <Text style={styles.black}> </Text>
        <Button
          title="Increase count!"
          color="#97BB1B"
          onPress={() => setCount(count + 1)}
        />
        <Text style={styles.black}> </Text>
        <Button style={styles.fixToText}
          title="Decrease count!"
          color="#97BB1B"
          onPress={() => setCount(count + -1)}
        />
        <Text style={styles.black}> </Text>
        <Text style={styles.black}>Current count: {count}</Text>
      </View>
    </View>
  );
};

const array = [
  {
    title: 'John Doe 1',
  },
  {
    title: 'John Doe 2',
  },
  {
    title: 'John Doe 3',
  },
  {
    title: 'John Doe 4',
  },
  {
    title: 'John Doe 5',
  },
];

const Item = ({ title }) => (
  <View style={styles}>
    <Text style={styles.black}>{title}</Text>
  </View>
);

const Flat = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={array} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default MyStack;
