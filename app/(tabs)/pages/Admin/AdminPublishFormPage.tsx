import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  Alert, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { TextareaItem, Button } from "@ant-design/react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const API_URL = "https://mobilonifra.onrender.com/api/pub";

const Publier: React.FC = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  // 📌 Fonction pour sélectionner une image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.5, // Compression de l'image pour éviter une erreur 413
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].base64 || null);
    }
  };

  // 📌 Fonction pour retirer l'image sélectionnée
  const removeImage = () => {
    setImage(null);
  };

  // 📌 Fonction pour publier un message avec ou sans image
  const handleSubmit = async () => {
    if (!message.trim()) {
      Alert.alert("Erreur", "Le message ne peut pas être vide.");
      return;
    }

    try {
      await axios.post(API_URL, { message, image });
      setMessage("");
      setImage(null);
      Alert.alert("Succès", "Publication envoyée avec succès !");
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      Alert.alert("Erreur", "Échec de l'envoi du message.");
    }
  };

  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Créer une Publication</Text>

        <TextareaItem
          rows={4}
          placeholder="Écris quelque chose..."
          value={message}
          onChangeText={setMessage}
          count={200}
          style={styles.textArea}
        />

        {/* Affichage de l'image sélectionnée avec un bouton pour la retirer */}
        {image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: `data:image/jpeg;base64,${image}` }}
              style={styles.image}
            />
            <TouchableOpacity onPress={removeImage} style={styles.removeButton}>
              <AntDesign name="closecircle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}

        <Button type="ghost" onPress={pickImage} style={styles.imageButton}>
          <AntDesign name="picture" size={20} color="#4CAF50" /> Ajouter une image
        </Button>

        <Button type="primary" onPress={handleSubmit} style={styles.submitButton}>
          Publier
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  scrollContainer: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3, // Ombre Android
    shadowColor: "#000", // Ombre iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 300,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  imageContainer: {
    position: "relative",
    marginTop: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 5,
  },
  imageButton: {
    marginTop: 10,
    backgroundColor: "#E8F5E9",
    borderColor: "#4CAF50",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
  },
  submitButton: {
    marginTop: 15,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#1E88E5",
  },
});

export default Publier;