import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Checkbox from "./Checkbox";
import Colors from "../colors/Colors";

export default ({ text, isChecked, onChecked, onChangeText }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <View style={StyleSheet.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Checkbox isChecked={isChecked} onChecked={onChecked} />
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => !isChecked && setEditMode(true)}
        >
          {editMode ? (
            <TextInput
              underlineColorAndroid={"transparent"}
              selectionColor={"transparent"}
              autoFocus={true}
              value={text}
              onChangeText={onChangeText}
              placeholder={"Add new item here"}
              onSubmitEditing={() => {}}
              maxLength={30}
              style={[styles.input, { outline: "none" }]}
              onBlur={() => setEditMode(false)}
            />
          ) : (
            <Text
              style={[
                styles.text,
                {
                  color: isChecked ? Colors.darkGray : "whitesmoke",
                  textDecoration: isChecked ? "line-through" : "none",
                },
              ]}
            >
              {text}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    padding: 5,
    fontSize: 16,
    color: "red",
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 3,
    height: 25,
    fontSize: 16,
    color: "white",
  },
  text: {
    paddingTop: 6,
    padding: 3,
    fontSize: 16,
  },
});
