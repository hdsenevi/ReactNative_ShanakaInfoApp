/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ShanakaInfoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Under construction...
              </Text>
              <Text style={styles.instructions}>
                Shanaka info app
              </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        color: '#ffffff',
    },
});

AppRegistry.registerComponent('ShanakaInfoApp', () => ShanakaInfoApp);
