import { Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";

export default function Cartao({ nome, imagem, onPress}) {
  return (
    <TouchableOpacity style={estilo.cartao} onPress={onPress}>
        <Image source={imagem} style={estilo.img} resizeMode="contain"/>
        <Text style={estilo.nome}>{nome}</Text>
    </TouchableOpacity> 
  );
}

export const estilo = StyleSheet.create({
    img:{
        height: 80,
    },
    cartao:{
        backgroundColor: '#3ca0c5',
        width: 150,
        height: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nome:{
        backgroundColor: '#737070',
        padding: 5,
        borderRadius: 8,
        color: "#fff"
    }
})