import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

export default function App() {
  return (
    // {[style.container, ..., ...]} anything on the right will override whatever matching content from its previous style.
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "yes", onPress: () => console.log("yes clicked") },
            { text: "no", onPress: () => console.log("no clicked") },
          ])
        }
      />
      <Button
        title="Click me Too!"
        onPress={() =>
          Alert.prompt("My Tittle", "My Message", (text) => console.log(text))
        }
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// styles creates a StyleSheet object that has propreties like container
// recommended practice
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
