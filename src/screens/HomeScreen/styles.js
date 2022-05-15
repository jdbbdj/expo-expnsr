import { StyleSheet } from "react-native";
import { values, colors } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: values.verticalPadding + 40,
    backgroundColor: colors.background,
  },
  horizontalPaddingView: {
    paddingHorizontal: values.horizontalPadding,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default styles;
