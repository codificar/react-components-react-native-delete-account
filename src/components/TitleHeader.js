import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function TitleHeader({ text, align }) {
    return (
        <View style={[styles.principal, { alignItems: align }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    principal: {
        marginBottom: 20
    },
    text: {
        color: "#222B45",
        fontSize: 30,
        fontWeight: "bold"
    }
})

