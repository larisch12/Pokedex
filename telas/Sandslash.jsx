import { View, Text, StyleSheet, Image} from 'react-native';

export default function Sandslash(){
    return(
        <View style={estilo.tela}>
            <Image
                source={require('../imagens/Sandslash.png')}
                style={{height: 200, width: 300}}
                resizeMode='contain'
            />
            <Text style={{fontSize: 40, color: 'white', fontWeight: '600'}}>
            Sandslash
            </Text>
            <View style={estilo.cxDetalhes}>
                <Text style={{
                    padding: 20,
                    fontSize: 20
                }}>
                    - Altura: 1.0m <br/>
                    - Peso: 29.5kg<br/>
                    - Tipo: Terra<br/>
                    - Fraquezas: Água, Gelo, Planta
                </Text>
            </View>
        </View>
    )
}

export const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#b28b32',
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    cxDetalhes:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 300,
        height: 300,
        borderRadius: 20,
        marginTop: 50
    }
})