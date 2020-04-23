import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		minHeight: 30,
		height: "10%",
		borderBottomColor: "grey",
		borderBottomWidth: 1,
		marginVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Input;
