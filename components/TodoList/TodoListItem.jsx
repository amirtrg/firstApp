import React, { useState } from "react";
import { View, StyleSheet, ActionSheetIOS } from "react-native";
import { Text } from "react-native";
import { Pressable,TextInput} from "react-native";

function TodoListItem({ title, id, setList }) {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.todoItem}>
      {isEditMode ? (
        <>
        <TextInput
        style={{color:"#fff",flex:1,fontSize:16}}
        value={text}
        autoFocus
        onChange={onChangeText}
        onChangeText={onChangeText}
        returnKeyType="done"
        // onBlur={()=>setIsEditMode(false)}
          keyboardType="default"
          onSubmitEditing={()=>{
            setList(perv=>{
              let newItem=[...perv]
              if(text.trim().length>0){
                newItem.find(item=>item.id===id).title=text
              }
              return newItem
            })
            setIsEditMode(false)
          }}
        onKeyPress={(event)=>{
          if(event.nativeEvent.key==="Enter"){
            setList(perv=>{
              let newItem=[...perv]
              newItem.find(item=>item.id===id).title=text
              return newItem
            })
            setIsEditMode(false)
          }
        }}
        />
        <Pressable
          onPress={() => {
            setIsEditMode(false)
            setList(perv=>{
              let newItem=[...perv]
              console.log(newItem);
              newItem.find(item=>item.id===id).title=text
              return newItem
            })
          }}
          color="#ccc"
          style={styles.deleteButton}
        >
          <Text style={styles.textBtn}>change</Text>
        </Pressable>
        </>
      ) : (
        <>
        <Text style={styles.todoText}>{title}</Text>
        <Pressable
          onPress={() => {
            onChangeText(title)
            ActionSheetIOS.showActionSheetWithOptions(
              {
                options: ["cancel", "delete", "edit"],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,
              },
              (buttonIndex) => {
                if (buttonIndex === 0) {
                  // cancel action
                } else if (buttonIndex === 1) {
                  setList((perv) => perv.filter((item) => item.id !== id));
                } else if (buttonIndex === 2) {
                  // setResult("🔮");
                  setIsEditMode(true);
                }
              }
            );
          }}
          color="#ccc"
          style={styles.deleteButton}
        >
          <Text style={styles.textBtn}>options</Text>
        </Pressable>
        </>
      )}


       
      
      {/* {isBtnShow && (
        <Pressable
          onPress={() => {
            setList((perv) => perv.filter((item) => item.id !== id));
          }}
          color="#ccc"
          style={styles.deleteButton}
        >
          <Text style={styles.textBtn}>delete</Text>
        </Pressable>
      )} */}
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    marginTop: 16,
    borderLeftWidth: 3,
    backgroundColor: "#fff1",
    borderColor: "#FE938C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
    color: "#fff",
  },
  todoText: {
    color: "#fff",
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
