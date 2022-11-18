import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  const usuario = {
    id: "123",
    nombre: "dana",
    apellido: "carrillo",
    edad: 17,
  };

  return (
    // <SafeAreaView>

    <View style={{ top: top + 10 }}>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a detalles"
        on
        onPress={() => navigation.navigate("DetailScreen", usuario)}
      />
    </View>
    /* </SafeAreaView> */
  );
}

const styles = StyleSheet.create({});
