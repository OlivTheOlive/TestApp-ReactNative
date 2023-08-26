import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text clicked")


  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Testing React Native fundamentals</Text>
      <Image 
      blurRadius={10}
      source={{
        width:200,
        height:300,
        uri: "https://picsum.photos/200/300",}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center" 
  },
});
