import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<BodyText>The Game is Over!</BodyText>
			<BodyText>Number of Guesses: {props.guessCount}</BodyText>
			<BodyText>Number of times you tried to lie: {props.lieCount}</BodyText>
			<BodyText>Number was: {props.userNumber}</BodyText>
			<Button title={"New Game"} onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default GameOverScreen;
