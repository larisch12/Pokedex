import { Text, StatusBar, ImageBackground, StyleSheet, Image } from "react-native";
import Fundo from '../imagens/fundo.jpg';
import Carregando from '../imagens/carregando.gif';

export default function SplashScreens(){
    return (
        <ImageBackground source={Fundo} style={styles.container}>
            <StatusBar hidden={true}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

