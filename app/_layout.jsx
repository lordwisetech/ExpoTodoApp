//import liraries
import { Stack } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name={'(tabss)'} options={{ headerShown: false }} />
        </Stack>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Layout;
