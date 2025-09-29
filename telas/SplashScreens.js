import { useEffect } from "react";
import { Text, View, StatusBar, Image, ImageBackground, StyleSheet } from "react-native";
import Carregando from "../imagens/carregando.gif";
import Fundo from "../imagens/fundo.jpg";

export default function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(() => navigation.replace('Pokemons'), 3000);
    },[]);
    return (
        <ImageBackground
            source={Fundo}
            resizeMode="cover"
            style={estilo.container}>
            <StatusBar hidden={true} /> 
            <Image
                source={Carregando}
                style={{height: 40}}
                resizeMode="contain"
            />
            <Text style={{color: "white"}}>Carregando...</Text>
           
        </ImageBackground>        
    )
}

export const estilo = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: "white",
        fontFamily: "Arial"
    }
})