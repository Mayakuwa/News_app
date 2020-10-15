import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen.js';
import HomeEnglishScreen from '../screens/HomeEnglishScreen';
import ArticleScreen from '../screens/ArticleScreen.js';
import ClipScreen from '../screens/ClipScreen.js';
import { FontAwesome } from '@expo/vector-icons';
import Menu from '../screens/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Clip') {
      iconName = 'bookmark';
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeEnglishStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeEnglishScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Clipstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNabigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Clip" component={Clipstack} />
    </Tab.Navigator>
  );
};

const TabEnglishNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen name="Home" component={HomeEnglishStack} />
      <Tab.Screen name="Clip" component={Clipstack} />
    </Tab.Navigator>
  );
};

const DropNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="日本語" component={TabNabigator} />
      <Drawer.Screen name="English" component={TabEnglishNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="draw"
          component={DropNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
