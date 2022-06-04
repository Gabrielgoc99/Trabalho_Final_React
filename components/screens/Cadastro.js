import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import estilo from "../Estilo";


const Cadastro = ({navigation}) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState(null);

    return (

        <View>
            <Text style={estilo.text}>Cadastrar Usuário</Text>
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
                title="Cadastrar"
                action={() => navigation.navigate("Home")}
            />


        </View>
    );
}

export default Cadastro;

