import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import colors from "../constants/colors";
import NumberContianer from "../components/NumberContainer";

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState("");

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
		setConfirmed(false);
		setEnteredValue("");
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Try Again", "Number must be between 1 and 99", [
				{ text: "Okay", style: "destructive", onPress: resetInputHandler },
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		Keyboard.dismiss();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.chosenContainer}>
				<Text style={styles.chosenText}>You Chose:</Text>
				<NumberContianer>{selectedNumber}</NumberContianer>
				<Button
					title="Start Game!"
					onPress={() => props.onStartGame(selectedNumber)}
				/>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.titleText}>Start a New Game!</Text>
				<Card style={styles.inputContainer}>
					<Text style={styles.selectText}>Select a Number</Text>
					<Input
						style={styles.input}
						blurOnSubmit={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
						placeholder="'42'"
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title="Reset"
								onPress={() => {
									resetInputHandler();
								}}
								color={Colors.primary}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title="Confirm"
								onPress={() => {
									confirmInputHandler();
								}}
								color={Colors.secondary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	titleText: {
		fontSize: 24,
		marginVertical: 20,
		fontFamily: "open-sans-bold",
	},
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
		margin: 10,
		paddingBottom: 0,
		borderColor: colors.secondary,
		borderWidth: 4,
		backgroundColor: colors.cardBG,
	},
	selectText: {
		fontSize: 18,
	},
	input: {
		width: 50,
		textAlign: "center",
		fontSize: 24,
		backgroundColor: "white",
	},
	buttonContainer: {
		width: "100%",
		paddingHorizontal: "5%",
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 10,
	},
	button: {
		flex: 1,
		minWidth: "30%",
		maxWidth: "40%",
	},
	chosenContainer: {
		padding: 10,
		paddingHorizontal: 20,
		backgroundColor: colors.cardBG,
		alignItems: "center",
	},
	chosenText: {
		fontSize: 18,
	},
});

export default StartGameScreen;
