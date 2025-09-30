import { View, Text, StyleSheet, Image} from 'react-native';

export default function Zubat(){
    return(
        <View style={estilo.tela}>
            <Image
                source={require('../imagens/zubat.png')}
                style={{height: 200, width: 300}}
                resizeMode='contain'
            />
            <Text style={{fontSize: 40, color: 'white', fontWeight: '600'}}>
                Zubat
            </Text>
            <View style={estilo.cxDetalhes}>
                <Text style={{
                    padding: 20,
                    fontSize: 20
                }}>
                    - Altura: 0.8m <br/>
                    - Peso: 7.5kg<br/>
                    - Tipo: Venenoso/Voador<br/>
                    - Fraquezas: Elétrico, Psíquico e Rocha
                </Text>
            </View>
        </View>
    )
}

export const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#6c436e',
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