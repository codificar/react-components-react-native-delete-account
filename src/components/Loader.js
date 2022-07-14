import React from "react";
import { StyleSheet, View, Modal, Text, ActivityIndicator } from "react-native";

const Loader = props => {
  const { loading, message, loadingColor } = props;

  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={loading}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Text style={styles.titleText} />
          <ActivityIndicator
            animating={loading}
            color={loadingColor}
            size="large"
          />
          <Text style={styles.titleText}> {message} </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 120,
    width: 120,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  titleText: {
    textAlign: "center"
  }
});

export default Loader;