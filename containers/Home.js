import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../colors/Colors";

const TodoButton = ({ title, color, onPress, onDelete }) => {
  return (
    <TouchableOpacity
      style={[styles.todoContainer, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.todoTitle}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const renderAddIcon = (addBucket) => {
  return (
    <TouchableOpacity
      onPress={() => addBucket({ title: "Title", color: Colors.orange })}
    >
      <Text style={styles.icon}>+ </Text>
    </TouchableOpacity>
  );
};

export default ({ navigation }) => {
  const [todoBuckets, setTodoBuckets] = useState([
    { title: "School", color: Colors.red },
    { title: "Work", color: Colors.green },
    { title: "Fun", color: Colors.blue },
  ]);

  const addBucket = (bucket) => {
    todoBuckets.push(bucket);
    setTodoBuckets([...todoBuckets]);
  };

  const removeBucket = (index) => {
    todoBuckets.splice(index, 1);
    setTodoBuckets([...todoBuckets]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddIcon(addBucket),
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={todoBuckets}
        renderItem={({ item: { title, color }, index }) => {
          return (
            <TodoButton
              title={title}
              color={color}
              navigation={navigation}
              onPress={() => navigation.navigate("ToDoList", { title, color })}
              onDelete={() => removeBucket(index)}
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
  },
  todoTitle: {
    fontSize: 24,
    padding: 5,
    color: "white",
  },
  icon: {
    padding: 5,
    fontSize: 24,
    color: "white",
  },
});
