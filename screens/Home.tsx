import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import {ItemMail} from "../components/ItemMail";
import {FloatingButton} from "../components/FloatingButton ";

const data = [
    {
        id: '1',
        title: 'Hello World',
        body: 'Hello everyone. I am learning React Native for the first time.',
        time: '10:00 AM',
        image: '../images/avatar-default.png',
    },
    {
        id: '2',
        title: 'Meet me',
        body: 'Hello everyone, meet me at 10:00 am at the cafe. Don\'t forget to bring your ID',
        time: '12:00 PM',
        image: '../images/avatar-default.png',
    },
    {
        id: '3',
        title: 'Hello World',
        body: 'Pod は簡単にいうと iOS 開発用のライブラリあるはパッケージです。ReactNative 開発では、JavaScript のコードを記述しますが最終的には ObJectiveC や AndroidJava のネイティブコードにブリッジします。',
        time: '14:00 PM',
        image: '../images/avatar-default.png',
    }
]

export const Home = () => {
    return (
        <View style={styles.container} >
        <SafeAreaView >
            <Text style={styles.header}>受信トレイ</Text>
            <FlatList 
            data={data} 
            renderItem={({ item }) => <ItemMail id={item.id}
            title={item.title} body={item.body}
            time={item.time} image={item.image} />}
            keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
        <FloatingButton />
        </View>
        
    );
}

const styles = StyleSheet.create({
    header : {
        marginStart: 24,
        marginTop: 12,
        marginBottom: 12,
        fontSize: 15,
        color: 'black',
    },
    container : {
        height: '100%',
    }
})