import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderColor: Colors.primary,
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
		paddingHorizontal: 20,
		marginVertical: 10,
		backgroundColor: Colors.cardBG,
		alignItems: "center",
		justifyContent: "center",
	},
	number: {
		color: Colors.primary,
		fontSize: 22,
	},
});

export default NumberContainer;
