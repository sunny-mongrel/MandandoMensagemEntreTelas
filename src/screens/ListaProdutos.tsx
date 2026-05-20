import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ListaProdutos( {navigation} : any){
//mock
const novel = {
    id: 'Lo49',
    titulo: 'Shadow Slave',
    editora: 'Vozes da minha cabeça',
}

const handleVerDetalhe = () => {

    navigation.navigate('pag-detalhe',{
        idnovel: novel.id,
        titulonovel: novel.titulo,
        editoranovel:novel.editora,
        teste: 'Olá'
    }
    )
}

    return(
        <View style = {style.container}>
            <Text style = {{ fontSize: 30}}>Lista De Produtos</Text>
            <Button title="Ver detalhes Livro" onPress={handleVerDetalhe}/>
        </View>
    );
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'yellow',
    }

})