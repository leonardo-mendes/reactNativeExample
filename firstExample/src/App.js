import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Common from './style/Common';


export default class App extends React.Component {
	render() {
		return (
			<View>
				<Text style={Common.ex}>First Example!!</Text>
			</View>
		)
	}
};

