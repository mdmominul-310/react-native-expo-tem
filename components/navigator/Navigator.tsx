import React from "react";
import { StyleSheet, View } from "react-native";
import DrawerNavigator from "./DrawerNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Navigator = () => {
  return (
    <SafeAreaProvider>
      <DrawerNavigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default Navigator;
