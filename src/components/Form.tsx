import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./FormStyles";

export default function Form() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>Formulário de cadastro</Text>
      <View>
        <Text style={styles.inputTextStyles}>Nome:</Text>
        <TextInput style={styles.inputStyles} />

        <Text style={styles.inputTextStyles}>Telefone:</Text>
        <TextInput style={styles.inputStyles} />

        <Text style={styles.inputTextStyles}>Endereço:</Text>
        <TextInput style={styles.inputStyles} />

        <Text style={styles.inputTextStyles}>Observações:</Text>
        <TextInput
          style={styles.textareaStyles}
          multiline={true}
          numberOfLines={6}
        />
      </View>
    </View>
  );
}
