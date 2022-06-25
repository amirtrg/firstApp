import React, { useState ,useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Button ,Platform} from "react-native";

function AddTodo({ setList }) {
  const [text, onChangeText] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
function submit(){
  if(text?.trim().length>0){
    onChangeText("")
    setList(perv=>[{title:text.trim(),id: new Date().toString().split(" ").concat()},...perv]);
  }
}
  return (
    <View style={[styles.todoCard]}>
      <TextInput
        style={[styles.todoInput,{borderColor:isFocus?"#2d2d34":"#bbb"}]}
        value={text}
        onFocus={function(){setIsFocus(true)}}
        onBlur={function(){setIsFocus(false)}}
        onChange={onChangeText}
        onChangeText={onChangeText}
        onSubmitEditing={submit}
        placeholder="add text"
        placeholderTextColor="#fff6"
        keyboardAppearance="dark"
      />
      <Button
        title="Add"
        onPress={submit}
        color="#FE938C"
        style={styles.todoButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  todoCard: {
    position:Platform.OS==="android"?"relative":"absolute",
    left:0,
    right:0,
    bottom:0,
    zIndex:10,
    padding: 16,
    borderRadius: 16,
    margin: 10,
    backgroundColor: "#2d2d34",
    elevation: 10,
    shadowColor: Platform.OS==="android"?"#0007":"#0002",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  todoInput: {
    backgroundColor: "#2d2d34",
    color:"#fff",
    flex:  1,
    padding: 8,
    marginRight: Platform.OS==="ios"?0:8,
    borderRadius: 10,
    borderColor: "#bbb",
    borderWidth: 1,
  },
  todoButton: {
    color: "#333",
    backgroundColor: "#333",
    borderRadius: 20,
    margin: 10,
    fontSize: 14,
  },
});
export default AddTodo;
