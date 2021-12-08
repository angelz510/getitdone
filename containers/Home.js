import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoContainer} onPress={() => {}}>
        <View>
          <Text style={styles.todoTitle}> Things to do</Text>
        </View>
      </TouchableOpacity>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    backgroundColor: "salmon",
  },
  todoTitle: {
    fontSize: 24,
    padding: 5,
    color: "white",
  },
});
