import { Text, View, Button, Alert } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPainRecordScreen from "./NewPainRecord";

const HomeStack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="New Pain Record"
        onPress={() => navigation.navigate("Details")}
        // onPress={() => this.props.navigation.navigate("Profile")}
      />
    </View>
  );
}

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Main" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={NewPainRecordScreen} />
    </HomeStack.Navigator>
  );
}
