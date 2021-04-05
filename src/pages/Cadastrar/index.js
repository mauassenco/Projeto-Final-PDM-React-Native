import React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

import { cadastrarProduto } from '../../services/ProdutosService';

export default function Cadastrar(){
    const [nome, setNome] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [preco, setPreco] = React.useState("");

  return <View style={styles.form_container}>
            <View style={styles.form}>
                <Text style={styles.form_label}>Nome do produto</Text>
                <TextInput 
                    style={styles.form_input}
                    onChangeText={setNome}
                    value={nome}/>
                <Text style={styles.form_label}>Descrição do produto</Text>
                <TextInput 
                    style={styles.form_input}
                    onChangeText={setDescricao}
                    value={descricao}/>
                <Text style={styles.form_label}>Preço do produto</Text>
                <TextInput 
                    style={styles.form_input}
                    onChangeText={setPreco}
                    value={preco}/>
                <Button
                    title="Cadastrar produto"
                    style={styles.botao_remover}
                    onPress={() => cadastrarProduto({
                        product: nome,
                        description: descricao,
                        img_url: 'https://cdn.ecvol.com/s/www.querocase.com.br/produtos/topsocket-bola-de-basquete/z/0.png?v=0',
                        prod_price: preco,
                    })} />
            </View>

        </View>
}

const styles = StyleSheet.create({
    form_container:{
        flex: 1,
        backgroundColor:'#E6F2FF',
        marginVertical: 40,
        marginHorizontal: 40,       
    },
    form:{
        backgroundColor:'rgb(0, 122, 255)',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,    
        elevation: 5,
        padding: 15,
    },
    form_input:{
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 5, 
        paddingHorizontal: 10,     
        color: '#fff',          
    },
    form_label:{
        color: '#fcfcfc',
        fontSize: 18,
        fontWeight: 'bold',
    }
})