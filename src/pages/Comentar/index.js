import React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

import { cadastrarComentario } from '../../services/ComentariosService';

export default function Comentar(){
    const [nomeUser, setNomeUser] = React.useState("");
    const [comentario, setComentario] = React.useState("");
    const [estrelas, setEstrelas] = React.useState("");

  return <View style={styles.form_container}>
            <View style={styles.form}>
                <Text style={styles.form_label}>Nome do usuario</Text>
                <TextInput 
                    style={styles.form_input}
                    onChangeText={setNomeUser}
                    value={nomeUser}/>
                <Text style={styles.form_label}>Comentário</Text>
                <TextInput 
                    style={styles.form_input_comment}
                    onChangeText={setComentario}
                    value={comentario}/>
                <Text style={styles.form_label}>Estrelas</Text>
                <TextInput 
                    style={styles.form_input}
                    onChangeText={setEstrelas}
                    value={estrelas}/>
                <Button
                    title="Cadastrar comentário"                    
                    onPress={(e) => cadastrarComentario(props.route.params.idProduto, {
                        nome: nomeUser,
                        comentario: comentario,
                        foto: 'https://lirte.pesquisa.ufabc.edu.br/coletivo_mina/wp-content/uploads/sites/3/2019/09/youngdorothyvaughan.jpeg',
                        estrelas: estrelas,
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
    form_input_comment:{
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 5, 
        paddingHorizontal: 10,     
        color: '#fff',
        height: 200,
        textAlignVertical:'top',
        paddingTop: 5,
    },
    form_label:{
        color: '#fcfcfc',
        fontSize: 18,
        fontWeight: 'bold',
    }
})