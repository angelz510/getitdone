import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../colors/Colors";

export default ({ navigation, route }) => {
  const [title, setTitle] = useState(route.params.title || "");
  const [color, setColor] = useState(route.params.color || "blue");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}> List Name </Text>
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={title}
          onChangeText={setTitle}
          placeholder={"New List Name"}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040208",
    padding: 5,
    justifyContent: "space-between",
  },
  input: {
    color: Colors.darkGray,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 3,
    height: 30,
    fontSize: 24,
  },
  saveButton: {
    borderRadius: 25,
    backgroundColor: Colors.darkGray,
    height: 48,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    margin: 8,
  },
});
