import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// See if you can move the random number generation into it's own component!
//
// Yay!

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
		generateRandomBetween(1, 100, props.chosenNumber)
	);
};

const styles = StyleSheet.create({});

export default GameScreen;
