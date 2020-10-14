import React from 'react';
import SideMenu from 'react-native-side-menu-updated';
import Menu from './Menu';

export default MenuRoute = () => {
  const menu = <Menu />;

  return (
    <SafeAreaView style={styles.container}>
      <SideMenu menu={menu}></SideMenu>
    </SafeAreaView>
  );
};
