import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LoginAdminPage from "../Admin/LoginAdminPage";

const AboutPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [AdminModal, setAdminModal] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>À propos </Text>
      <Text style={styles.text}>
        Application pour suivre les actualités, programmes cultes et emploi du
        temps de notre école.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actualités</Text>
        <Text style={styles.sectionText}>
          Restez informé des dernières nouvelles et événements.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Programme Culte</Text>
        <Text style={styles.sectionText}>
          Découvrez les programmes cultuels.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Emploi du Temps</Text>
        <Text style={styles.sectionText}>
          Consultez l'organisation de la semaine.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Version de l'Application</Text>
        <Text style={styles.sectionText}>Version 1.0.0</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Créé par : Tendry et Ruffin</Text>
        <Text style={styles.footerText}>
          Tsiory.aina69@gmail.com  
        </Text>
        <Text style={styles.footerText}>ruffinihasina@gmail.com</Text>
        <Text style={styles.footerText}>+261 38 39 221 49, +261 34 33 069 41</Text>
      </View>

      {/* Btn feedback */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="chatbubble-ellipses" size={24} color="white" />
      </TouchableOpacity>

      {/* Btn Admin */}
      <TouchableOpacity
        style={styles.floatingButtonAdmin}
        onPress={() => setAdminModal(true)}
      >
        <Ionicons name="at" size={24} color="white" />
      </TouchableOpacity>

      {/* FeedbackModal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Donnez votre avis</Text>
            <TextInput placeholder="Nom" style={styles.input} />
            <TextInput
              placeholder="Votre message"
              multiline
              numberOfLines={4}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Envoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Admin Login Modal */}
      <Modal visible={AdminModal} animationType="slide" transparent>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", margin: 20 }}
          onPress={() => setAdminModal(false)}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <LoginAdminPage />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  section: {
    width: "100%",
    padding: 15,
    backgroundColor: "#e9ecef",
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    padding: 5,
  },
  footerText2: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  floatingButtonAdmin: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#007bff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AboutPage;
