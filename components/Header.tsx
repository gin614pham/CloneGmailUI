import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  title: string;
}
export const CustomHeader = (prop: Props) =>  {
    return (
      <View style={styles.headerContainer}>
        <FontAwesome style={styles.headerMenu} name="bars" size={24} color="white" />
        <Text style={styles.headerTitle}>{prop.title}</Text>
        <Image style={styles.avatar} source={require('../images/avatar-default.png')} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#c7cdd6',
      borderWidth: 1,
      borderRadius: 30,
      borderColor: 'white',
      padding: 5,
      paddingEnd: 10,
      paddingStart: 10,
      marginHorizontal: 12,
      marginVertical: 4,
      height: 'auto',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#7b7f85',
      flex: 8,
      marginStart: 8
    },
    headerMenu: {
      flex : 1,
      textAlign: 'center',
      color: '#7b7f85',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20
    }
  });