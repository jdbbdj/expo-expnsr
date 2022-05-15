import { View, Text } from "react-native";
import React from "react";

const Spacer = ({ width = 0, height = 0 }) => {
  return <View style={{ height: height, width: width }}></View>;
};

export default Spacer;
