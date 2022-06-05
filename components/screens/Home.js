import * as React from 'react';
import { Text, View, Animated } from 'react-native';
import Styles from '../Styles';
import { useState } from 'react';
import { tamanhos } from '../Tamanhos';
import { Botao } from '../Botao';
import { colors } from '../Colors';


const Home = ({navigation}) => {

  const [altura] = useState(new Animated.Value(20));
  const [largura] = useState(new Animated.Value(20));
  const [banner] = useState (new Animated.Value(30));
  const [alturaTower] = useState(new Animated.Value(20));
  const [larguraTower] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 3000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaHome,
        duration: 3000,
    }).start();

    Animated.timing(larguraTower, {
        toValue: tamanhos.padraoGigante,
        duration: 3000,
    }).start();

    Animated.timing(alturaTower, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 3000,
    }).start();

    Animated.loop(Animated.sequence([Animated.decay(banner,{ velocity:0.5, deceleration:0.999, toValue:tamanhos.padraoAlturaHome})])).start();
    

  return (
      <View style={Styles.container}>

        <Text style={Styles.paragraph}>Bem vindo ao Goliath National Bank!</Text>
        <Animated.Image source={require("../../assets/GNB_Wait_For_It.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, marginBottom: 10, marginTop: 10}}
        />

        <Animated.Text style={[Styles.paragraph, {width: banner}]}> Clique no Botão abaixo e abra já sua conta! </Animated.Text>

      
        <Botao style={Styles.botao}
                cor={colors.botaoVermelho}
                label="Abrir Conta"
                action={() => navigation.navigate("Conta")}
        />
        <Animated.Image source={require("../../assets/Goliath_Tower.png")}
                            style={{alignSelf: 'center', width: larguraTower, height: alturaTower, marginBottom: 10, marginTop: 10}}
        />
      
      </View>
    );
}

export default Home;

