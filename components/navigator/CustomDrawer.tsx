import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { DrawerContentComponentProps } from "@react-navigation/drawer";

interface CustomDrawerProps extends DrawerContentComponentProps {}

export default function CustomDrawer(props: CustomDrawerProps) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View></View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
