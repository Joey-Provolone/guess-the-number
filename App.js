import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import colors from "./constants/colors";

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessCount, setGuessCount] = useState(0);
	const [lieCount, setLieCount] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds, numOfLies) => {
		setGuessCount(numOfRounds);
		setLieCount(numOfLies);
	};

	const newGameHandler = () => {
		setGuessCount("0");
		setLieCount(null);
		setUserNumber(null);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessCount <= 0) {
		content = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessCount > 0) {
		content = (
			<GameOverScreen
				guessCount={guessCount}
				lieCount={lieCount}
				userNumber={userNumber}
				onRestart={newGameHandler}
			/>
		);
	}

	return (
		<View style={styles.screen}>
			<Header title="Guess A Number..." />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		// backgroundColor: colors.screenBG,
	},
});
