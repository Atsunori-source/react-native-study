import { ThemedText } from "@/components/themed-text";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

type Task = {
  id: string;
  text: string;
};

type TaskItemProps = {
  item: Task;
  handleEdit: (item: Task) => void;
  handleDeleteTask: (id: string) => void;
};
const TaskItem = React.memo(
  ({ item, handleEdit, handleDeleteTask }: TaskItemProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState("");
    const [isEditing, setIdEditing] = useState<string | null>(null);

    return (
      <View style={styles.task}>
        <ThemedText style={styles.taskText}>{item.text}</ThemedText>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEdit(item)}
          >
            <Icon name="edit" color="blue">
              編集
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteTask(item.id)}
          >
            <Icon name="delete" color="red">
              削除
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    color: "blue",
    backgroundColor: "#DDDDDD",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
  },
  taskText: {
    color: "#333333",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    //   color: "white",
    //   backgroundColor: "green",
    //   padding: 5,
    //   marginRight: 10,
    //   borderRadius: 5,
  },
  deleteButton: {
    //   color: "white",
    //   backgroundColor: "red",
    //   padding: 5,
    //   marginLeft: 10,
    //   borderRadius: 5,
  },
});

export default TaskItem;
