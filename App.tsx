/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import StringCalculator from "./src/StringCalculator";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  const isDarkMode = useColorScheme() === "dark";

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const calculateButtonClick = () => {
    try {
      const calculator = new StringCalculator(); // Create an instance of the calculator class
      const resultValue = calculator.add(inputValue); // Call the add method on input value
      setResult(resultValue);
    } catch (error) {
      console.log(error.message);
      setResult(0);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.container}>
        <Text style={styles.title}>String Calculator</Text>

        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter numbers"
          multiline={true}
        ></TextInput>

        <TouchableOpacity
          onPress={() => calculateButtonClick()}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}> CALCULATE </Text>
        </TouchableOpacity>

        <Text style={styles.sum}>
          {"Sum: "} {result}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 22,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
  },
  input: {
    borderColor: "#D3D3D3",
    borderWidth: 1,
    // height: 48,
    width: "96%",
    marginTop: 22,
    padding: 12,
  },
  error: {
    marginTop: 20,
    color: "red",
  },
  button: {
    backgroundColor: "#0096FF",
    height: 38,
    width: "96%",
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    color: "white",
  },
  sum: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 22,
  },
});

export default App;
