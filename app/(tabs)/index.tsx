import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import AcceuillPage from './pages/Users/Acceuill';
import AboutPage from "./pages/Users/AboutPage";
import Maintenace from './pages/Users/Maintenace'
import AdminPublishForm from './pages/Admin/AdminPublishFormPage';
import Culte from './pages/Users/CulteProgram'
import Schedule from "./pages/Users/Schedule";
const HomeScreen = () => (
  <View style={styles.container}>
    <AcceuillPage />
  </View>
);

const ProgramScreen = () => (
  <View style={styles.container}>
    <Culte />
  </View>
);

const ScheduleScreen = () => (
  <View style={styles.container}>
    <Schedule />
  </View>
);

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof AntDesign.glyphMap = "home";
          if (route.name === "Programme") iconName = "book";
          else if (route.name === "Emploi du temps") iconName = "calendar";
          else if (route.name === "A propos") iconName = "link";
          

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#f8f9fa", paddingBottom: 5 },
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Programme" component={ProgramScreen} />
      <Tab.Screen name="Emploi du temps" component={ScheduleScreen} />
      <Tab.Screen name="A propos" component={AboutPage} />
      

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default AppTabs;
