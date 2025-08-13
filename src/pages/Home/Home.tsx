import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import Form from "../../components/Form";
import { styles } from "./HomeStyles";
import { useState } from "react";

export function Home() {
  const [showForm, setShowForm] = useState(false);

  function handleButton() {
    setShowForm(!showForm);
  }

  return (
    <>
      <View style={[styles.container, { display: showForm ? "none" : "flex" }]}>
        <Text style={styles.welcomeText}>Bem-vindo ao formulário!</Text>

        <Pressable onPress={handleButton} style={styles.homeButton}>
          <Text style={styles.buttonText}>Clique aqui</Text>
        </Pressable>
      </View>

      <View
        style={[styles.formContainer, { display: showForm ? "flex" : "none" }]}
      >
        <Form />
        <View style={styles.buttonsView}>
          <Pressable onPress={handleButton} style={styles.backButton}>
            <Text style={styles.buttonText}>Voltar</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Enviado!");
            }}
            style={styles.backButton}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
