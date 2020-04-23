import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import colors from "./constants/colors";

export default function App() {
	return (
		<View style={styles.screen}>
			<View>
				<Header title="Guess A Number..." />
			</View>
			<StartGameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		// backgroundColor: colors.screenBG,
	},
});
