import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';

class Menu extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: StatusBar.currentHeight }}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>プロフィール</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>アプリ設定</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>利用規約</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>ログアウト</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  }
}
export default Menu;
