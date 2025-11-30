import React, { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "./themed-text";

const TaskInput = ({taskText, setTaskText, handleSaveTask, isEditing}) => {
  return (
    <>
      <TextInput
        placeholder="ここに入力"
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity>
        <ThemedText style={styles.button} onPress={handleSaveTask}>
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
