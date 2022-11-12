import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterScreen from "./screens/CounterScreen";
import MenuScreen from "./screens/MenuScreen";
import DebtScreen from "./screens/DebtSceen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Debt" component={DebtScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Counter" component={CounterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
