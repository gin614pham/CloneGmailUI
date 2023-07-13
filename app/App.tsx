/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from '../screens/Home';
import Meet from '../screens/Meet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomHeader from '../components/Header';
import { StyleSheet } from 'react-native';



function App(): JSX.Element {

  

  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
     <Tab.Navigator
     >
        
        <Tab.Screen name="メール"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            color = focused ? 'red' : '#7b7f85',
            size = 20,
            <Icon name="mail" size={size} color={color} style={styles.iconTabBar} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5
          },
          tabBarActiveTintColor: 'red',
          header: () => <CustomHeader title="メールを検索" />,
        }}
        component={Home} />
        <Tab.Screen name="Meet"
        options={{
          tabBarIcon: ({ focused ,color, size }) => (
            color = focused ? 'red' : '#7b7f85',
            size = 20,
            <Icon name="videocamera" size={size} color={color} style={styles.iconTabBar} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5
          },
          tabBarActiveTintColor: 'red',
        }}
        component={Meet} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  iconTabBar: {
    marginTop: 5
  }
})


export default App;


