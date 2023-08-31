import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Platform,
} from "react-native";

export default function App() {
  return (
    // {[style.container, ..., ...]} anything on the right will override whatever matching content from its previous style.
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        onPress={() => console.log(StatusBar.currentHeight)}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// StatusBar.currentHeight just for android. ignored for ios
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
