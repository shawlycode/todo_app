import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TodoList from "./src/TodoList";
import { Alert } from "react-native-web";

export const COLORS = {
  primary: "#b7e4c7",
  secondary: "#1b4332",
  background: "#e9f5db",
  completed: "#ff006e",
  done: "#38b000",
};

export default function App() {
  const [userInput, setUserInput] = useState("");
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: COLORS.background,
          width: "100%",
          height: 80,
          alignItems: "center",
          elevation: 10,
          marginRight: 20,
          paddingRight: 20,
          elevation: -20,
          shadowOpacity: 0.04,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: COLORS.secondary,
            paddingLeft: 20,
          }}
        >
          TODO'S
        </Text>
        <TouchableOpacity>
          <AntDesign name="delete" size={30} color="red" />
        </TouchableOpacity>
      </View>
      {/* render flatlist */}
      <FlatList
        data={todos}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => <TodoList todo={item} />}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <View style={styles.footer_container}>
          <TextInput
            placeholder="enter your Todo text here"
            style={{
              fontSize: 20,
              fontStyle: "italic",
              color: COLORS.secondary,
            }}
            onChangeText={(text) => setUserInput(text)}
            value={userInput}
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 18,
            marginRight: 10,
            shadowOpacity: 6,
            elevation: 4,
          }}
          onPress={addTodos}
        >
          <Ionicons name="ios-add-circle" size={60} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer_container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
