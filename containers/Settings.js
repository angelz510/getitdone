import React from "react";
import { View } from "react-native-web";
import Button from "../components/Button";
import { getAuth } from "firebase/auth";

export default () => {
  return (
    <View style={{ flex: 1, background: "#040208" }}>
      <Button
        text="Log Out"
        onPress={() => {
          getAuth().signOut();
        }}
      />
    </View>
  );
};
