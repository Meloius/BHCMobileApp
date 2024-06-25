import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

const ServiceRequestScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Header title="Service Request" />
            <View style={styles.formGroup}>
                <Text style={styles.label}>Plot Number</Text>
                <TextInput style={styles.input} placeholder="Enter plot number" />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Contact Details</Text>
                <TextInput style={styles.input} placeholder="Enter contact details" />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Service Type</Text>
                <TextInput style={styles.input} placeholder="Enter service type" />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter description"
                    multiline
                />
            </View>
            <Button
                title="Submit Request"
                onPress={() => console.log('Request Submitted')}
                style={styles.button}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    formGroup: {
        margin: 20,
    },
    label: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        borderColor: '#CCCCCC',
        borderWidth: 1,
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
});

export default ServiceRequestScreen;