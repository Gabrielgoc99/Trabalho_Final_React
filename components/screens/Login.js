import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Home from "./Home";
import estilo from "../Estilo"


const Login = ({navigation}) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState(null);

    return (

        <View>
            <Text style={estilo.text}>Seja Bem-Vindo!</Text>
            <Input
                placeholder="Usuario"
                onChangeText={setUsuario}
                value={usuario}
            />


            <Input
                placeholder="Senha"
                onChangeText={setSenha}
                value={senha}
            />

            <Botao
                color="blue"
                title="Entrar"
                action={() => navigation.navigate("Home")}
            />

            <Botao
                color="blue"
                title="Cadastrar Novo usuario"
                action={() => navigation.navigate("Cadastro")}
            />


        </View>
    );
}

export default Login;

