import { StyleSheet, Dimensions } from "react-native";

const cardWidth = Dimensions.get('window').width - 50

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    padding: 0,
    paddingHorizontal: 25,
  },
  cardContact: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 3,
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  leftContact: {
    flexDirection: "row",
    alignItems: "center"
  },
  trash: {
    width: 22,
    height: 25,
    marginVertical: 5,
    marginRight: 20
  },
  description: {
    paddingBottom: 30
  },

});
