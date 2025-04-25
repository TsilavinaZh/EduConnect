import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Modal, TouchableOpacity } from "react-native";

const Data = [
  {
    id: 1,
    mention: "Agronomie",
    Image: "https://via.placeholder.com/100x100.png?text=Agronomie",
  },
  {
    id: 2,
    mention: "Communication",
    Image: "https://via.placeholder.com/100x100.png?text=Comm",
  },
  {
    id: 3,
    mention: "Droit",
    Image: "https://via.placeholder.com/100x100.png?text=Droit",
  },
  {
    id: 4,
    mention: "Gestion",
    Image: "https://via.placeholder.com/100x100.png?text=Gestion",
  },
  {
    id: 5,
    mention: "Informatique",
    Image: "https://via.placeholder.com/100x100.png?text=Info",
  },
];

const Schedule: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={{ flex: 1,width: "100%", backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginVertical: 20 }}>
        Emploi du temps
      </Text>
      {/* page indiposnible */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.text}>Cette page est indisponible</Text>
       
        <Text style={styles.text}>pour le Moment</Text>
      </View>

      {selectedImage && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image source={{ uri: selectedImage }} style={styles.largeImage} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  largeImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default Schedule;
