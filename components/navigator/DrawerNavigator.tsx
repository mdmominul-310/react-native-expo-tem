import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import CustomDrawer from "./CustomDrawer";
import { Text, View } from "react-native";
import Header from "../header/header";

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
        drawerActiveBackgroundColor: "#FF6B3C",
        drawerInactiveBackgroundColor: "#FFFFFF",
        drawerActiveTintColor: "#FFFFFF",

        drawerItemStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 10,
          marginTop: 15,
          marginLeft: 10,
        },
        drawerLabelStyle: {
          marginLeft: 20,
          fontFamily: "Inter-Bold",
        },
        drawerStyle: {
          flex: 1,
          backgroundColor: "#FFFFFF",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerLabel: () => null,
          title: undefined,
          drawerIcon: () => null,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={() => (
          <View>
            <Text>Settings</Text>
          </View>
        )}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
