import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ServiceRequestScreen = () => {
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [severity, setSeverity] = useState('');
    const [description, setDescription] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const handleSubmit = () => {
        // Handle form submission
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>Service Request</Text>
            <TextInput
                style={styles.input}
                placeholder="Type"
                value={type}
                onChangeText={setType}
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
            />
            <TextInput
                style={styles.input}
                placeholder="Severity"
                value={severity}
                onChangeText={setSeverity}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Info"
                value={contactInfo}
                onChangeText={setContactInfo}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default ServiceRequestScreen;