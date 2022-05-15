import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import { values } from "../../../utils/constants";
import React from "react";

const { width, height } = Dimensions.get("screen");
const Cardousel = ({ details }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageDiv}>
        <Image
          source={{ uri: details.image }}
          style={{
            width: width / 2,
            height: height / 2,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={[values.pStyle, styles.description]}>
          {details.description}
        </Text>
      </View>
    </View>
  );
};

export default Cardousel;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
  },
  imageDiv: {
    flex: 0.7,
    justifyContent: "center",
  },
  contentDiv: {
    flex: 0.3,
    paddingHorizontal: 50,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 15,
  },
  description: {
    fontWeight: "400",
  },
});
