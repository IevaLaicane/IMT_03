import * as React from 'react';
import {
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

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
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
          }}
        />

        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.bigGreen}>VIA-bility</Text>
        <Text style={styles.bigGreen}> </Text>

        <Text style={styles.black}>
          Check your knowledge about your university!
        </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>
        <Text style={styles.black}> </Text>

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => navigation.navigate('First')}>
          <Text style={styles.customBtnText}>Start</Text>
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
  bigGreen: {
    fontFamily: 'Arial Narrow',
    color: '#97BB1B',
    fontWeight: 'bold',
    fontSize: 60,
    justifyContent: 'center',
    textAlign: 'center',
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
