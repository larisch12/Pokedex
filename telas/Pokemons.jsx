import { View , Text, TouchableOpacity, Image, StyleSheet, ScrollView} from "react-native";
import Logomarca from "../imagens/logomarca_pokemon.png";
import Cartao from "./cartao";

export default function Pokemons({navigation}){
    return(
        <ScrollView style={estilo.container}>
            <Image
                source={Logomarca}
                style={{margin: 'auto'}}
                
            />
            
            <View style={{flexDirection:"row",
                          flexWrap: 'wrap', 
                          gap: 20}}>
                <Cartao 
                    nome={"Bulbassauro"}
                    imagem={require("../imagens/bulbassauro.png")}
                    onPress={()=>{navigation.navigate("Bulbassauro")}}
                />
                <Cartao 
                    nome={"Charmander"}
                    imagem={require("../imagens/charmander.png")}
                    onPress={()=>{navigation.navigate("Charmander")}}
                />
                <Cartao 
                    nome={"Squirtle"}
                    imagem={require("../imagens/Squirtle.png")}
                    onPress={()=>{navigation.navigate("Squirtle")}}
                />
                <Cartao 
                    nome={"Zubat"}
                    imagem={require("../imagens/zubat.png")}
                    onPress={()=>{navigation.navigate("Zubat")}}
                />
                <Cartao 
                    nome={"Sandslash"}
                    imagem={require("../imagens/Sandslash.png")}
                    onPress={()=>{navigation.navigate("Sandslash")}}
                />
                <Cartao 
                    nome={"Charmeleon"}
                    imagem={require("../imagens/Charmeleon.png")}
                    onPress={()=>{navigation.navigate("Charmeleon")}}
                />
            </View>            
        </ScrollView>
    );   
}

export const estilo = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        // alignItems: 'flex-end',
        padding: 20
    }
})