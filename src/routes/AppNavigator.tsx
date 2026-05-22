import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";     

//importar as screens
import ListaProdutos from "../screens/ListaProdutos";
import Detalhe from "../screens/Detalhe";

//criar um objeto do Stack Navigator
//desestruturação
//          Essa é uma das formas de fazer
//                        ↓
//const { Navigator, Screen} = createStackNavigator();
//               Outra forma de fazer 
//                        ↓
        const Stack = createStackNavigator();

export default function AppNavigator(){
    return(
        //componente raiz que gerencia estado de navegação
        <NavigationContainer>
            <Stack.Navigator initialRouteName="pag-lista">
                <Stack.Screen
                    name = "pag-lista"
                    component = {ListaProdutos}
                    options = {{
                        title: "Catálogo",
                        headerTitleAlign: 'center',
                        headerStyle:{
                            backgroundColor: 'blue',
                        }
                    }}    
                />
                <Stack.Screen
                    name = 'pag-detalhe'
                    component={Detalhe}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}