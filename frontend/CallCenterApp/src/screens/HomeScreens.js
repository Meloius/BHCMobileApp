import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to the Call Center App</Text>
            <Button
                title="Go to Service Request"
                onPress={() => navigation.navigate('ServiceRequest')}
            />
        </View>
    );
};

export default HomeScreen;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Call Center App" />
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.welcomeText}>Welcome to the Call Center App</Text>
            <Button
                title="Service Requests"
                onPress={() => navigation.navigate('ServiceRequest')}
                style={styles.button}
                textStyle={styles.buttonText}
            />
            <Button
                title="General Enquiries"
                onPress={() => navigation.navigate('GeneralEnquiries')}
                style={styles.button}
                textStyle={styles.buttonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    logo: {
        width: 150,
        height: 150,
        marginVertical: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: '#333333',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18,
    },
});

export default HomeScreen;