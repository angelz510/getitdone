import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ToDoItem from "../components/ToDoItem";

const renderAddIcon = (addTodo) => {
  return (
    <TouchableOpacity
      onPress={() => addTodo({ text: "", isChecked: false, isNewItem: true })}
    >
      <Text style={styles.icon}>+ </Text>
    </TouchableOpacity>
  );
};

export default ({ navigation }) => {
  const [toDoItems, setToDoItems] = useState([]);

  const addTodo = (todo) => {
    toDoItems.push(todo);
    setToDoItems([...toDoItems]);
  };

  const removeTodo = (index) => {
    toDoItems.splice(index, 1);
    setToDoItems([...toDoItems]);
  };

  const updateTodo = (index, todo) => {
    toDoItems[index] = todo;
    setToDoItems([...toDoItems]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddIcon(addTodo),
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoItems}
        renderItem={({ item: { text, isChecked, isNewItem }, index }) => {
          return (
            <ToDoItem
              text={text}
              isChecked={isChecked}
              isNewItem={isNewItem}
              onChecked={() => {
                const toDoItem = toDoItems[index];
                toDoItem.isChecked = !isChecked;
                updateTodo(index, toDoItem);
              }}
              onChangeText={(newText) => {
                const toDoItem = toDoItems[index];
                toDoItem.text = newText;
                updateTodo(index, toDoItem);
              }}
              onDelete={() => {
                removeTodo(index);
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040208",
  },
  icon: {
    padding: 5,
    fontSize: 32,
    color: "white",
  },
});
