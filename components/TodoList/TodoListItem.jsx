import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";

function TodoListItem({ title, id, setList }) {
  const [isBtnShow, setBtnShow] = React.useState(false);
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{title}</Text>
     {
       !isBtnShow&&
        <Pressable
        onPress={() => {
          setBtnShow(true)
        }}
        color="#ccc"
        style={styles.deleteButton}
      >
        <Text style={styles.textBtn}>options</Text>
      </Pressable>
     }
      {isBtnShow && (
        <Pressable
          onPress={() => {
            setList((perv) => perv.filter((item) => item.id !== id));
          }}
          color="#ccc"
          style={styles.deleteButton}
        >
          <Text style={styles.textBtn}>delete</Text>
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    marginTop: 16,
    borderLeftWidth: 3,
    backgroundColor: "#fff0",
    borderColor: "#FE938C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
    color:"#fff"
  },todoText:{
    color:"#fff"
  },
  deleteButton: {
    fontSize: 14,
    backgroundColor: "#FE938C20",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  textBtn: {
    fontSize: 12,
    color: "#FE938C",
  },
});

export default TodoListItem;
