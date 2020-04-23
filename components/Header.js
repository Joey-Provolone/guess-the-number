import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		padding: 36,
		paddingTop: 42,
		backgroundColor: Colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		color: "white",
		fontSize: 28,
	},
});

export default Header;
