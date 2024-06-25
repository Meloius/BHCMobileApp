import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import globalStyles from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />
            <Text style={globalStyles.title}>Welcome to the Call Center App</Text>
            <Button
                title="Go to Service Request"
                onPress={() => navigation.navigate('ServiceRequest')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});

export default HomeScreen;