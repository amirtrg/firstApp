import React from "react";
import { Text, View } from "react-native";
import { StyleSheet, ScrollView, Platform } from "react-native";
import { Button } from "react-native";
import TodoListItem from "./TodoListItem";

function TodoList({ list, setList }) {
  const [isExpand, setIsExpand] = React.useState(false);
  const array = [];
  return (
    <View
      style={styles.TodoListCard}
    >
      <Text style={styles.TodoListTitle}>todoList:</Text>
      <ScrollView style={isExpand ? styles.fullHeight : styles.todoListScroll}>
        {list.length > 0 ? (
          list.map((todo) => (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              setList={setList}
            />
          ))
        ) : (
          <Text style={styles.emptyTodo}>nothing... add some todo</Text>
        )}
      </ScrollView>
     {list.length>0&& <Button title={isExpand?"collapse":"expand"}
       onPress={function(){
        setIsExpand(perv=>!perv)
      }}/>}
    </View>
  );
}
const styles = StyleSheet.create({
  TodoListCard: {
    padding: 16,
    borderRadius: 16,
    margin: 10,
    backgroundColor: "#2d2d34",
    // elevation: 10,
    // shadowColor: Platform.OS === "android" ? "#0007" : "#0002",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
  },
  fullHeight: {
    height: "60%",
    overflow: "scroll",
    marginVertical: 20,
    paddingVertical: 16,
  },
  todoListScroll: {
    height: 150,
    overflow: "scroll",
    marginVertical: 20,
    paddingVertical: 16,
  },
  TodoListTitle: {
    fontSize: 24,
    fontWeight:"700",
    letterSpacing:2,
    textTransform:"capitalize",
    color: "#FE938C",
  },
  emptyTodo: {
    borderWidth:1,
    borderColor:"#FE938C",
    textAlign: "center",
    fontSize: 14,
    color: "#FE938C",
    lineHeight: 125,
    borderRadius: 16,
  },
});

export default TodoList;
