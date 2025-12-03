import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";

type TaskInputProps = {
  taskText: string;
  setTaskText: (text: string) => void;
  handleSaveTask: () => void;
  isEditing: string | null;
};

const TaskInput = ({
  taskText,
  setTaskText,
  handleSaveTask,
  isEditing,
}: TaskInputProps) => {
  return (
    <>
      <TextInput
        placeholder="ここに入力"
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity onPress={handleSaveTask}>
        <ThemedText style={styles.button}>
          {isEditing ? "編集" : "追加"}
        </ThemedText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    color: "blue",
    backgroundColor: "#DDDDDD",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
});

export default TaskInput;
