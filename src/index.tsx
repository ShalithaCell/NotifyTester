// eslint-disable-next-line no-use-before-define
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./scenes/login";
import TaskScreen from "./scenes/tasks";
import { NAVIGATION_LIST } from "./utils/const";

const styles = StyleSheet.create({
    container : {
        flex            : 1,
        backgroundColor : '#fff',
    },
});

const Stack = createStackNavigator();

const AppContainer = () => (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={NAVIGATION_LIST}>
                <Stack.Screen name={NAVIGATION_LIST} component={TaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
);

export default AppContainer;
