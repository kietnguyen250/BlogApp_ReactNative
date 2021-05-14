import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import BlogList from '../lists/BlogList';
import BlogDetail from '../screens/BlogDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92,90,91,0.7)',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 5,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="BlogList" component={BlogList} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default AppNavigator;
