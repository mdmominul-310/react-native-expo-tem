import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationProp } from "@react-navigation/native";

interface HeaderProps {
  navigation: NavigationProp<any>;
}

export default function Header({ navigation }: HeaderProps) {
  return (
    <View style={styles.header}>
      {/* <Image
        source={require("./assets/logo.png")} // Replace with your logo path
        style={styles.logo}
      /> */}
      <TouchableOpacity
        onPress={() => (navigation as any).openDrawer()}
        // style={styles.menuIcon}
      >
        {/* <Ionicons name="menu" size={30} color="white" /> */}
        <Text style={{ color: "white" }}>Logo</Text>
      </TouchableOpacity>

      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications" size={30} color="white" />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>3</Text>{" "}
            {/* Example notification count */}
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5e4b8b", // Gradient or solid color can be applied here
    paddingBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  menuIcon: {
    position: "absolute",
    left: 15,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 15,
  },
  notificationIcon: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
