import React from 'react';
import { View, Image, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
  render() {
    const { title, description, url } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}>
        <Card>
          <Image
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              opacity: 0.35,
            }}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWt2eZvScryAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=',
            }}
          />
          <Text
            style={{
              fontSize: 15,
              marginBottom: 10,
              color: '#2d3452',
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text style={{ fontSize: 10, marginBottom: 10 }}>{description}</Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}></View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    color: '#2d3452',
    fontSize: 10,
  },
};
