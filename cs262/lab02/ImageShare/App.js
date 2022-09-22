
import React from 'react';
import { StatusBar } from "expo-status-bar";
import * as Sharing from "expo-sharing";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Image,  StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from "expo-image-picker";

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to acess camera roll is required!")
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
    
  };
  return (
    <View style={styles.container}>
        <Image
         source={{ uri: "https://i.imgur.com/TkIrScD.png" }} 
         style={ styles.logo}
          />

       
      <Text style={style.instructions}>
        To share a photo from your phone with a friend, just press the button below!
        </Text>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  });
