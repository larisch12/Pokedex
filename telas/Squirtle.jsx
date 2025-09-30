import { View, Text, StyleSheet, Image} from 'react-native';

export default function Squirtle(){
    return(
        <View style={estilo.tela}>
            <Image
                source={require('../imagens/Squirtle.png')}
                style={{height: 200, width: 300}}
                resizeMode='contain'
            />
            <Text style={{fontSize: 40, color: 'white', fontWeight: '600'}}>
                Squirtle
            </Text>
            <View style={estilo.cxDetalhes}>
                <Text style={{
                    padding: 20,
                    fontSize: 20
                }}>
                    - Altura: 0.5m <br/>
                    - Peso: 9.0kg<br/>
                    - Tipo: Água<br/>
                    - Fraquezas: Elétrico e Grama
                </Text>
            </View>
        </View>
    )
}

export const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#48a3b0',
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