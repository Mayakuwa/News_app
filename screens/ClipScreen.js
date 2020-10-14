import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { useSelector } from 'react-redux';
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

export default ClipScreen = (props) => {
  const user = useSelector((state) => state.user);
  const { clips } = user;

  return (
    <SafeAreaView styles={styles.container}>
      <Header>
        <Left />
        <Body>
          <Title>Clip</Title>
        </Body>
        <Right />
      </Header>
      <FlatList
        data={clips}
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
        keyExtractor={(item, index) => index.toString}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
