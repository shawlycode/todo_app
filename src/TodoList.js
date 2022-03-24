import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../App";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TodoList = ({ todo }) => {
  const [todos, setTodos] = useState([]);
  const addTodos = () => {
    if (userInput == "") {
      prompt("hi");
    } else {
      const newTodos = {
        id: Math.random(),
        task: userInput,
        completed: false,
      };
      setTodos([...todos, newTodos]);
      setUserInput("");
    }
  };
  const markTodoComplete = (todoId) => {
    const newTodos = todos.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: true };
      } else {
        return item;
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        width: "100%",
        height: 70,
        marginBottom: 8,
        borderRadius: 10,
        paddingHorizontal: 15,
        shadowOpacity: 0.8,
        elevation: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            fontStyle: "italic",
            textDecorationLine: todo?.completed ? "line-through" : null,
            color: todo?.completed ? COLORS.completed : null,
          }}
        >
          {todo?.task}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {!todo?.completed && (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Ionicons
                name="md-checkmark-circle"
                size={30}
                color={COLORS.done}
                onPress={() => markTodoComplete(todo?.id)}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <MaterialCommunityIcons name="delete-empty" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
