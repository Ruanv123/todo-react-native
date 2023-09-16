import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./styles";
import { theme } from "../../theme";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={theme.colors.brand.blue} />
    </View>
  );
}
