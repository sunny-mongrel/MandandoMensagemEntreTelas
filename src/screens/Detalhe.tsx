import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Detalhe( {route, navigation} : any){
    //desestruturação 
const {idnovel, titulonovel} = route.params;
    return(
        <View style = {{flex:1}}>
            <Text>Detalhes da Novel</Text>
            <Text>ID: {idnovel}</Text>
            <Text>Titulo: {titulonovel}</Text>
            <Button title = 'Voltar' onPress = { () => navigation.goBack() } ></Button>
        </View>
    )
}