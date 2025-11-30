import { Image } from "expo-image";
import { FlatList, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import TaskInput from "@/components/taskInput";
import TaskItem from "@/components/taskItem";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
// import { View } from "react-native-reanimated/lib/typescript/Animated";

type Task = {
  id: string;
  text: string;
};

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");
  const [isEditing, setIdEditing] = useState<string | null>(null);

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if (isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === isEditing ? { ...task, text: taskText } : task
        )
      );
      setIdEditing(null);
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      setTasks([...tasks, newTask]);
    }

    setTaskText("");
  };

  const handleEdit = (item: Task) => {
    setTaskText(item.text);
    setIdEditing(item.id);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.test}>
        <ThemedText type="title">ToDo</ThemedText>
        <TaskInput
          taskText={taskText}
          setTaskText={setTaskText}
          handleSaveTask={handleSaveTask}
          isEditing={isEditing !== null}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: Task }) => (
            <TaskItem
              item={item}
              handleEdit={handleEdit}
              handleDeleteTask={handleDeleteTask}
            />
          )}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  test: {
    fontSize: 10,
    backgroundColor: "white",
    marginBottom: 20,
  },
});
