import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native';
import { getLVNews } from './src/news';
import Article from './src/components/Article';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  componentDidMount() {
    this.fetchNews();
  }
  fetchNews() {
    getLVNews()
      .then((articles) => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }
  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: '100%', width: '100%', position: 'absolute' }}
          source={{
            uri:
              'https://images.pexels.com/photos/3155583/pexels-photo-3155583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
<FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </View>
    );

    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
