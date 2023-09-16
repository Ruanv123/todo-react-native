import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import LogoImage from "../../assets/logo.png";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type HeaderProps = {
  task: string;
  onChangeText: (task: string) => void;
  onPress: () => void;
  inputRef: React.RefObject<TextInput>;
};

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Image source={LogoImage} height={25} />
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            inputRef.current?.isFocused() && task ? styles.inputBorder : null,
          ]}
          placeholder="Adcione uma nova tarefa"
          placeholderTextColor={theme.colors.base.gray300}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done" // funcao que faz poder adcionar dando enter
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={22}
            color={theme.colors.base.gray100}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
