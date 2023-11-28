import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8
  },
  containerImage: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10
  },
  image: {
    flex: 1,
    borderRadius: 18,
  }
});
