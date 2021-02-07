import React from "react";
import { StyleSheet, Image, View } from "react-native";
import BasicTextView from "../../components/atoms/basic-textView";

const logoImage = require('../../assets/images/logo.png');

const styles = StyleSheet.create({
    container : {
        flex            : 1,
        backgroundColor : '#fff',
        alignItems      : 'center',
        justifyContent  : 'center',
    },
});

const LoginScreen = () => (
    <View style={styles.container}>
        <Image source={logoImage} style={{ width: 100, height: 50 }} resizeMode='cover' />
    </View>
);

export default LoginScreen;
