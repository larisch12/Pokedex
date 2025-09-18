import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreens from "./SplashScreens";
import Bulbassauro from "./Bulbassauro";
import Pokemons from "./Pokemons";

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return (
        <Stack.Navigator initialRouteName="SplashScreens">
            <Stack.Screen name="SplashScreens" component={SplashScreens}/>
            <Stack.Screen name="Pokemons" component={Pokemons}/>
            <Stack.Screen name="Bulbassauro" component={Bulbassauro}/>            
        </Stack.Navigator>
    );
}