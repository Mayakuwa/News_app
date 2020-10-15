import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';
import Loading from '../components/Loading';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';

const URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeEnglishScreen = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    //記事を取得する前は、フラグをtrueにする
    setLoading(true);
    try {
      const respones = await axios.get(URL);
      setArticles(respones.data.articles);
    } catch (error) {
      console.log(error);
    }
    //記事が取得し終わった後は、フラグをfalseにする
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Left>
          <Button transparent>
            <TouchableOpacity>
              <Icon
                name="menu"
                onPress={() =>
                  props.navigation.dispatch(DrawerActions.openDrawer())
                }
              />
            </TouchableOpacity>
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              props.navigation.navigate('Article', { article: item })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* ローディングがtrueの時だけ表示 */}
      {loading && <Loading />}
    </SafeAreaView>
  );
};

// flex1で描画エリアをいっぱい使うという意味
// flexDirectionRow:rowで横並び、columnに設定すると縦並び
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});
