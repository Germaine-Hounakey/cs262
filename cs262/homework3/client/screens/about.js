import { globalStyles } from "../styles/global";
import { View, Text } from "react-native";

export default function AboutScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>This application access information on monopoly players</Text>
    </View>
  );
}