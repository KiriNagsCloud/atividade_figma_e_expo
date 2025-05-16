import { Tabs } from 'expo-router';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TabLayout() {

  return (
    <>
      <Text style={styles.title}>Projeto Expo & API - Professor André</Text>
      <Tabs>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>📦</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='register' options={{headerShown: false, tabBarIcon: () => (<Text>🏡</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>⭐</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign:'center',
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    padding: 50
  }
})
