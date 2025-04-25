import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";

import { Button,Badge } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const API_URL = "https://mobilonifra.onrender.com/api/pub";

const PostCard: React.FC = () => {
  const [data, setData] = useState<
    { id: number; message: string; date: string; image: string | null }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  setTimeout(() => {
    fetchData();
  }, 1000);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleSaveImage = () => {
    Alert.alert("Téléchargement", "Image téléchargée avec succès !");
 
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />
    );
  }

  if (error || data.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Vérifiez votre connexion Internet et réessayez.
        </Text>
        <AntDesign name="disconnect" size={50} color={"#808080"} />
        <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
          <AntDesign name="reload1" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.header}>
            <Image source={require("./OnifraLogo.png")} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>ONIVESITY FJKM RAVELOJAONA Antsirabe

              </Text>
              <Text style={styles.date}>
                {new Date(item.date).toLocaleDateString("fr-FR")}
              </Text>
            </View>
          </View>

          <Text style={styles.description}>{item.message}</Text>

          {item.image && (
            <TouchableOpacity onPress={() => item.image && handleImageClick(item.image)}>
              <Image
                source={{ uri: `data:image/jpeg;base64,${item.image}` }}
                style={styles.postImage}
              />
              {/* Btn download */}
              
            </TouchableOpacity>
          )}

          {/* <View style={styles.footer}>
            <Button type="ghost" style={styles.button}>
              <AntDesign name="like2" size={20} color="blue" />
            </Button>
            <Button type="ghost" style={styles.button}>
              <AntDesign name="sharealt" size={20} color="green" />
            </Button>
          </View> */}
        </View>
      ))}

      {/* Modal for enlarged image */}
      <Modal
        visible={selectedImage !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedImage(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button
              type="ghost"
              onPress={() => setSelectedImage(null)}
              style={styles.closeButton}
            >
              <AntDesign name="close" size={20} color="black" />
            </Button>
            {selectedImage && (
              <Image
                source={{ uri: `data:image/jpeg;base64,${selectedImage}` }}
                style={styles.enlargedImage}
              />
            )}

            <Button
                type="ghost"
                onPress={handleSaveImage}
                style={styles.saveButton}
              >
                <AntDesign name="download" size={20} color="blue" />
                <Text style={styles.saveText}></Text>
              </Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#808080",
  },
  card: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#96999b69",
    padding: 10,
    borderRadius: 10,
    width: 320,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0000ff",
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    fontWeight: "bold",
  },
  date: {
    color: "gray",
  },
  description: {
    textAlign: "center",
  },
  postImage: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderColor: "red",
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  refreshButton: {
    backgroundColor: "#96999b69",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    // width:100
  },
  enlargedImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  saveButton: {
    marginBottom: 10,
  },
  saveText: {
    marginLeft: 5,
    color: "blue",
  },
  closeButton: {
    backgroundColor: "transparent",
    borderColor: "white",
    paddingLeft: 280,
  },
});

export default PostCard;