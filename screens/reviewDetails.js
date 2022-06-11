import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";


const ReviewDetails = ({ route, navigation }) => {
  const [currentImg, setCurrentImg] = React.useState(null);
  const { title, rating, body } = route.params;
  const pressHandler = () => {
    //navigation.goBack();
    console.log(typeof rating.toString())
  };

  const images = {
    one: require("../assets/rating-1.png"),
    two: require("../assets/rating-2.png"),
    three: require("../assets/rating-3.png"),
    four: require("../assets/rating-4.png"),
    five: require("../assets/rating-5.png"),
  };
  React.useEffect(() => { 
    if (rating === 1) {
      setCurrentImg(images.one);
    } else if (rating === 2) {
      setCurrentImg(images.two);
    } else if (rating === 3) {
      setCurrentImg(images.three);
    } else if (rating === 4) {
      setCurrentImg(images.four);
    } else if (rating === 5) {
      setCurrentImg(images.five);
    } else {
      setCurrentImg(null);
    }
   }, [])
  
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Gamezone Rating</Text>
          <Image source={currentImg} />
        </View>
        <Button title="Go Back" onPress={pressHandler} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
})

export default ReviewDetails;
