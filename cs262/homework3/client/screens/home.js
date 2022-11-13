import React, { useEffect, useState } from "react";
import { Button, View, Text, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTitle = async () => {
    try {
      const response = await fetch(
        'https://glacial-bayou-49548.herokuapp.com/players'
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTitle();
  }, []);

  return (
    <View style={globalStyles.container}>
      {/* Get rid of that ugly button and, instead, display our list of movies. */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={globalStyles.title}>{item.emailaddress}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}