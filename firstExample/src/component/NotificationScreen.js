import React from 'react'
import { View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

export default () =>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>