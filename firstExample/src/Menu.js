import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function HomeScreen ({ navigation }){
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
    </View>)
}

class NotificationsScreen extends React.Component{
	render() {
		return (<View>
			<Text>{this.props.number}</Text>
		</View>) 
	}
}

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" >
			{props => <NotificationsScreen number={"9"} />}
		</Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}