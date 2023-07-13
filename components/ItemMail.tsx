import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Mail from "../components/Mail";
import Icon from 'react-native-vector-icons/Entypo';


export default function Item({ mail } : {mail: Mail}) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={require('../images/avatar-default.png')} />
            <View style={styles.content}>
                <Text style={styles.title}>{mail.getTitle()}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.body}>{mail.getBody()}</Text>
            </View>

            <View style={styles.timeContainer}>
                <Text style={styles.time}>{mail.getTime()}</Text>
                <Icon name="star-outlined" size={25} style={styles.starIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 10,
        height: 'auto',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        
    },
    title : {
        fontSize: 17,
        color: 'black',
        marginStart: 8,
    },
    body : {
        fontSize: 15,
        color: 'black',
        marginStart: 8,
        marginEnd: 8,

    },
    timeContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    time : {
        fontSize: 11, 
        flex: 1,
    },
    starIcon: {
        marginBottom: 5
    },
})