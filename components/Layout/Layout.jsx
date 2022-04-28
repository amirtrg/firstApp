import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Keyboard,
} from "react-native";

import { KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
function Layout({ children }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <StatusBar barStyle="default" backgroundColor="#FE938C" />
          <View style={styles.header}>
            {/* <MenuIcon/> */}
            <Text style={styles.headerText}>Todo app</Text>
          </View>
          <View style={styles.inner}>{children}</View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FE938C",
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 32 : 20,
  },
  headerText: {
    color: "#fff",
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: Platform.OS === "ios" ? "center" : "left",
  },
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#1c1c20",
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
  },
});
export default Layout;
