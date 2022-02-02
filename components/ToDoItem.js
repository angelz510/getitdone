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

const EditableText = ({ isChecked, onChangeText, text, isNewItem }) => {
  const [editMode, setEditMode] = useState(isNewItem);
  return (
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
  );
};

export default ({
  text,
  isChecked,
  onChecked,
  onChangeText,
  onDelete,
  isNewItem,
}) => {
  return (
    <View style={StyleSheet.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Checkbox isChecked={isChecked} onChecked={onChecked} />
        <EditableText
          text={text}
          onChangeText={onChangeText}
          isChecked={isChecked}
          isNewItem={isNewItem}
        />
        <TouchableOpacity onPress={onDelete}>
          <Text style={[styles.icon, { color: Colors.red }]}>X</Text>
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
    paddingRight: 8,
    fontSize: 23,
    marginTop: 10,
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 1,
    height: 25,
    fontSize: 24,
    color: "white",
    marginTop: 20,
  },
  text: {
    marginTop: 15,
    paddingTop: 5,
    padding: 3,
    fontSize: 20,
  },
});
