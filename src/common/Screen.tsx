import React from "react";
import { Platform, StatusBar, View } from "react-native";

export const Screen = props => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
      }}
    >
      {props.children}
    </View>
  );
};
