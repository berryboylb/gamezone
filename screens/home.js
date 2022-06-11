import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "The short stubborn girl",
      rating: 5,
      body: "lorem ipsum dsit amet la dolor com tua ti latipia mentr amor si la vi",
      key: 1,
    },
    {
      title: "Geoang was nicer",
      rating: 2,
      body: "lorem ipsum dsit amet la dolor com tua ti latipia mentr amor si la vi",
      key: 2,
    },
    {
      title: "Everybody wants you can they do the time?",
      rating: 4,
      body: "lorem ipsum dsit amet la dolor com tua ti latipia mentr amor si la vi",
      key: 3,
    },
  ]);

  const AddReview = (review) => {
    review.key = Math.random().toString();
    setReviews((curr) => {
      return [review, ...curr];
    });
    setModal(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModal(!modal)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm AddReview={AddReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModal(!modal)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button title="Go to review" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
