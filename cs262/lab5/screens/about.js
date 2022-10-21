import  React, { useState} from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
        {/* Display the fields of the received movie object. */}
        <Text>This application shows the list of movies and their detailed information.</Text>
    </View>
);
}