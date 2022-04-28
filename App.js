import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Layout from "./components/Layout/Layout";
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from "./components/TodoList/TodoList";
import React,{useState} from "react"

export default function App() {
  const [list,setList]=useState([{title:"hi",id:"s"},{title:"bye",id:"test"}])
  return (
        <Layout>
          <TodoList list={list} setList={setList}/>
          <AddTodo setList={setList}/>
        </Layout>

  );
}

const styles = StyleSheet.create({
 
});
