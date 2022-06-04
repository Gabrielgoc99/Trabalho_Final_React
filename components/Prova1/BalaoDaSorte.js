import * as React from 'react';
import {useState} from 'react';
import {Image, Text, View} from "react-native";
import Botao from "../Botao";
import estilo from "../Estilo";

export const BalaoDaSorte = () => {
    const [imagem, setImagem] = useState(require('../../assets/balloon_red.jpg'));
    const [frase, setFrase] = useState('');

    const frases = ['Grandezas em Pequenos Começos',
        'Melhor chegar atrasado neste mundo do que adiantado no outro',
        'Lute como os boletos, eles sempre vencem!',
        'Pra quem não tem nada, metade é o dobro',
        'As coisas podem piorar, você é que não tem imaginação!',
        'Perigo não é um cavalo na pista, mas sim um burro na direção',
        'Se casamento fosse bom não precisaria de testemunhas',
        'Às vezes é melhor ficar quieto e deixar que pensem que você é um idiota, do que abrir a boca e não deixar nenhuma dúvida.'
    ];

    const estourar = () => {
        let indice = Math.floor(Math.random() * (7 + 1));
        setImagem(require('../../assets/popped_balloon_red.jpg'));
        setFrase(frases[indice]);
    }

    const resetar = () => {
        setImagem(require('../../assets/balloon_red.jpg'));
        setFrase('');
    }

    return (
        <View>
            <Image style={estilo.imagem} source={imagem}/>

            <Text style={estilo.paragraph}>{frase}</Text>

            <Botao
                color='red'
                title='estourar'
                action={estourar}
            />
            <Botao
                color='gray'
                title='Resetar'
                action={resetar}
            />
        </View>
    );
}

export default BalaoDaSorte;
