import {StyleSheet} from 'react-native';
import { colors } from './Colors';
import { tamanhos } from './Tamanhos';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: tamanhos.padraoMinusculo,
     
    margin: 0,  
    backgroundColor: 'black',    
  },
  itensContainer: {
    flexDirection: 'columns',
    padding: 12,
  },
  paragraph: {    
    marginBottom: 0,
    fontSize: tamanhos.padraoDescricao,
    fontWeight: 'bold',    
    borderColor: 'red',
    textAlign: 'center',
    color: 'white',
  },
  frase: {
    width: 200, 
    height: 100, 
    marginTop: 5,
  },
  imagem: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  text: {
        margin: 24,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
  botao: {
    width: 200,  
    alignSelf: 'center',
    padding: tamanhos.padraoMinusculo,
    marginBottom: 5,
  },
  input: {
    height: 20, 
    borderColor: "gray", 
    width: 300, 
    borderWidth: 1,     
    marginBottom: 10, 
    backgroundColor: 'white'
  },
  slider: {
      width: 250, 
      height: 40,
      size: 20,
      color:"#f50" ,     
  },
  switchAdjust: {
    marginBottom: 20,
  },
  fadingContainer: {
    padding: 10,
    backgroundColor: "gray", 
    width: 300,
    marginBottom: 10, 
    marginTop: 10,
  },
  fadingText: {
    marginBottom: 10,
    fontSize: tamanhos.padraoDescricao,    
    color: 'white'    
  },
  buttonRow: {
    flexBasis: 50,
    justifyContent: "space-evenly",
    marginVertical: 10,
    marginBottom: 5,
  }, 
    label:{
        fontSize: 16,
        marginLeft:'525px'
    },
    touch: {
        alignItems: "center",
        backgroundColor: "#81b0ff",
        padding: 10,
        width: 300,
        height: 40,
        alignSelf:"center"
    }
});