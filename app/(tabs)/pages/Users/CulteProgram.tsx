import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";

const Data = [
  {
    id: 1,
    date: "Mardi, 07 Janvier 2025",
  },
  {
    id: 2,
    date: "Mardi, 14 Janvier 2025",
  },

  {
    id: 3,
    date: "Mardi, 21 Janvier 2025",
  },

  {
    id: 4,
    date: "Mardi, 28 Janvier 2025",
  },

  {
    id: 5,
    date: "Mardi, 04 Février 2025",
  },
];

const Indisponible = () => {
  alert("Disponible en version V1.2");
};

const ProCulte: React.FC = () => {
  return (
    <View>
      <ScrollView style={{ margin: -20 }}>
        <Text style={styles.title}>Programmes disponibles</Text>

        {Data.map((item) => (
          <View key={item.id} style={styles.card}  >
            <Button type="ghost" style={styles.button} onPress={() => Indisponible()}>
              <Text style={styles.textesdates}>{item.date}</Text>
            </Button>
          </View>
        ))}

        <View style={styles.footer}>
          <Button type="ghost" style={styles.button}>
            <AntDesign name="left" size={20} color="blue" />
          </Button>

          <Button type="ghost" style={styles.button}>
            <AntDesign name="right" size={20} color="green" />
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#96999b69",
    padding: 10,
    borderRadius: 10,
    width: 350,
    alignSelf: "center",
    backgroundColor: "#fff",
  },

  text: {
    fontWeight: "bold",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  textesdates: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default ProCulte;
