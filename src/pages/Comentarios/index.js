import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, FlatList, Button, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardComentario from '../../components/CardComentario';
import { getComentarios } from '../../services/ComentariosService';
import Comentar from '../../pages/Comentar';



export default function Comentarios(props) {
    const [comentarios, setComentarios] = useState([]);  
    useEffect(() => {
      async function loadContent() {
        const comentarios = await getComentarios(props.idProduto);
        setComentarios(comentarios);
      }
      loadContent();
    });
  
    var renderItem = ({ item }) => {
      return <CardComentario                     
                navigation={props.navigation}  
                id={item.id}              
                idproduto={item.idProduto}              
                nome={item.nome}
                foto={item.foto}
                comentario={item.comentario}   
                estrelas={item.estrelas}   
            />; 
    }
  
    return (
      <View style={styles.container}>   
        <FlatList
          data={comentarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: '#E6F2FF',
    },
  });

