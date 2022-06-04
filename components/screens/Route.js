import * as React from 'react';
import Login from "./Login";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from "./HomeTab";
import Cadastro from "./Cadastro";

const Stack = createNativeStackNavigator();

const Route = () => {

    return (

        <NavigationContainer initialRoutename="Login">
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen  name="Home" component={HomeTab} options={{header: () => null}}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>

            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default Route;