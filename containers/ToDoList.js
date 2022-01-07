import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ToDoItem from "../components/ToDoItem";
import Colors from "../colors/Colors";

const renderAddIcon = (addTodo) => {
  return (
    <TouchableOpacity
      onPress={() => addTodo({ text: "hello2", isChecked: false })}
    >
      <Text style={styles.icon}>+ </Text>
    </TouchableOpacity>
  );
};

export default ({ navigation }) => {
  const [toDoItems, setToDoItems] = useState([
    { text: "Hello", isChecked: false },
  ]);

  const addTodo = (todo) => {
    toDoItems.push(todo);
    setToDoItems([...toDoItems]);
  };

  const removeTodo = (index) => {
    toDoItems.splice(index, 1);
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
        renderItem={({ item: { text, isChecked }, index }) => {
          return <ToDoItem text={text} isChecked={isChecked} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  icon: {
    padding: 5,
    fontSize: 32,
    color: "white",
  },
});
