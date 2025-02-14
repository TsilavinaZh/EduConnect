import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "@ant-design/react-native";

const Data = [
  {
    id: 1,
    mention: "Agronomie",
  },

  {
    id: 2,
    mention: "Communication",
  },

  {
    id: 3,
    mention: "Droit",
  },

  {
    id: 4,
    mention: "Gestion",
  },

  {
    id: 5,
    mention: "Informatique",
  },
];


const Indisponible = () => {
  alert("Disponible en version V1.2");
};

const Schedule: React.FC = () => {
  return (
    <View>
      <ScrollView style={{ margin: -20 }}>
        <Text style={styles.title}>Mentions</Text>

        {Data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Button type="ghost" style={styles.button}  onPress={() => Indisponible()}>
              <Text style={styles.textesMentions}>{item.mention}</Text>
            </Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 10,
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

  textesMentions: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Schedule;
