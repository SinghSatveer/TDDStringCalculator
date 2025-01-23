/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.container}>
        <Text style={styles.title}>String Calculator</Text>
       
        <TextInput style={styles.input}></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}> CALCULATE </Text>
        </TouchableOpacity>

        <Text style={styles.sum}>
          {"Sum: "} {"0"}
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
    borderColor: "black",
    borderWidth: 1,
    height: 48,
    width: "96%",
    marginTop: 22,
  },
  button: {
    backgroundColor: "blue",
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
