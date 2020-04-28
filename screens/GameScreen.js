import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNum = Math.floor(Math.random() * (max - min)) + min;
	if (randomNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNum;
	}
};

const GameScreen = (props) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, props.userNumber)
	);
	const [guessCount, setGuessCount] = useState(0);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const { userNumber, onGameOver } = props;

	useEffect(() => {
		if (currentGuess === userNumber) {
			props.onGameOver(guessCount);
		}
	}, [currentGuess, userNumber, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < props.userNumber) ||
			(direction === "higher" && currentGuess > props.userNumber)
		) {
			Alert.alert("Don't lie!", "Cheaters never win", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}
		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextGuess = generateRandomBetween(
			currentLow.current + 1,
			currentHigh.current - 1,
			currentGuess
		);
		setCurrentGuess(nextGuess);
		setGuessCount((curGuessCount) => curGuessCount + 1);
	};

	return (
		<View style={styles.screen}>
			<TitleText style={styles.gameText}>Computer Guesses: </TitleText>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title="Lower" onPress={() => nextGuessHandler("lower")} />
				<Button title="Higher" onPress={() => nextGuessHandler("higher")} />
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
	gameText: {
		fontSize: 18,
		margin: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10,
		marginTop: 20,
		width: 300,
		maxWidth: "80%",
	},
});

export default GameScreen;
