import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

interface Publication {
  id: number;
  message: string;
  date: string;
  image: string;
}

const ProCulte: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true); // <-- État de chargement
  const navigation = useNavigation();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://mobilonifra.onrender.com/api/Culte");
  //       const data = await response.json();
  //       setPublications(Array.isArray(data) ? data : [data]);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des publications :", error);
  //     } finally {
  //       setLoading(false); 
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const response = await fetch("https://mobilonifra.onrender.com/api/Culte");
        const data = await response.json();
        if (isMounted) {
          setPublications(Array.isArray(data) ? data : [data]);
          setLoading(false); // Mettre à jour l'état de chargement ici
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des publications :", error);
      }
    }
    )();
    return () => {
      isMounted = false; // Nettoyer l'effet pour éviter les fuites de mémoire
    }
  }, []);

  const handlePress = (item: Publication) => {
    console.log("Données sélectionnées :", item);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10, fontSize: 16 }}>Chargement...</Text>
        </View>
      ) : (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Programme Culte</Text>

          {publications.map((item: Publication) => (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity style={styles.button} onPress={() => handlePress(item)}>
                <Text style={styles.textesdates}>
                  {item.message}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

      {selectedItem && (
        <Modal visible={modalVisible} animationType="fade" transparent onRequestClose={closeModal}>
          <View style={styles.fullScreenModal}>
            <TouchableOpacity style={styles.fullScreenImageContainer} onPress={closeModal}>
              <Image
                source={{
                  uri: selectedItem.image.startsWith("data:image")
                    ? selectedItem.image
                    : `data:image/jpeg;base64,${selectedItem.image}`,
                }}
                style={styles.fullScreenImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  contentContainer: { paddingBottom: 20 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  card: {
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#96999b69",
    padding: 10,
    borderRadius: 10,
    width: 350,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textesdates: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  fullScreenModal: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  modalCloseButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
    zIndex: 2,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProCulte;
