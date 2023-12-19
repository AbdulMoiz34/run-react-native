import { StyleSheet, Text, View } from "react-native";

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My First React Native App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  text: {
    fontSize: 25,
    color: "#fff",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  }
});

export default Home;