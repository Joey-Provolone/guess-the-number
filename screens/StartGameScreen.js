import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.titleText}>Start a New Game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Reset" onPress={() => {}} color={Colors.primary} />
					</View>
					<View style={styles.button}>
						<Button
							title="Confirm"
							onPress={() => {}}
							color={Colors.secondary}
						/>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	titleText: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	buttonContainer: {
		width: "100%",
		paddingHorizontal: "5%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		flex: 1,
		minWidth: "30%",
		maxWidth: "40%",
	},
});

export default StartGameScreen;
