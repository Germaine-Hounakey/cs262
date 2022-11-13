import { globalStyles } from "../styles/global";
import { Button, View, Text, TouchableOpacity, FlatList } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { itemID, otherParam } = route.params;
  return (
    <View style={globalStyles.container}>
      {/* Display the fields of the received movie object. */}
      <Text style={globalStyles.title}>{route.params.emailaddress}</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.params.name}</Text>
    </View>
  );
}