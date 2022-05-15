import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { values, colors } from "../../../utils/constants";

const { width } = Dimensions.get("screen");
const Categories = ({ categories, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(categories.heading)}>
      <View
        style={[
          styles.container,
          { backgroundColor: categories.backgroundColor },
        ]}
      >
        <Image style={styles.image} source={categories.img} />
        <Text style={[values.h2Style, { marginTop: 10 }]}>
          {categories.heading}
        </Text>
        <Text
          style={[
            values.pWhiteStyle,
            { textAlign: "center", fontWeight: "bold", marginTop: 5 },
          ]}
        >
          {categories.paragraph}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: width * 0.33,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginRight: 10,
    /* test */
    /* borderColor: "black",
    borderWidth: 1, */
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});
