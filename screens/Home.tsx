import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Mail from "../components/Mail";
import ItemMail from "../components/ItemMail";
import FloatingButton from "../components/FloatingButton ";

const data: Mail[] = [
    new Mail('1', 'Hello World', 'Hello everyone. I am learning React Native for the first time. ', '10:00 AM', '../images/avatar-default.png'),
    new Mail('2', 'Meet me', 'Hello everyone, meet me at 10:00 am at the cafe. Don\'t forget to bring your ID', '12:00 PM', '../images/avatar-default.png'),
    new Mail('3', 'Hello World',
     'Pod は簡単にいうと iOS 開発用のライブラリあるはパッケージです。ReactNative 開発では、JavaScript のコードを記述しますが最終的には ObJectiveC や AndroidJava のネイティブコードにブリッジします。'
    , '14:00 PM', '../images/avatar-default.png'),
    
];

export default function App() {
    return (
        <View style={styles.container} >
        <SafeAreaView >
            <Text style={styles.header}>受信トレイ</Text>
            <FlatList 
            data={data} 
            renderItem={({ item }) => <ItemMail mail={item} />}
            keyExtractor={(item) => item.getId()}
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