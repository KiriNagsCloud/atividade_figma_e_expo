import { Header } from '@/components/headerEmoji';
import { Link, router } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    const onPress = () => {
        router.push("/(tabs)")
    }

    return (
        <>
        <Header image={require("../assets/images/emoji.png")}/>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Projeto Expo & API - Professor André</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.btnText}>Saiba mais aqui</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',

    },

    title: {
        textAlign: 'center',
        margin: 10,
    },

    text: {
        textAlign: 'center',
        margin: 10,
    },

    btnText: {
        color: "black",
        backgroundColor: 'gray',
        textAlign: 'center',
        borderRadius: 999,
        width: 100,
        margin: 10,
        padding: 10,
    },

    btn: {
        backgroundColor: 'black',
        color: 'red',
        textAlign: 'center',
        borderRadius: 999,
        width: 100,
        margin: 300,
        padding: 10,    }
})