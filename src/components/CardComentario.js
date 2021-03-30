import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";

export default function CardComentario(props) {
  return (  
     <View style={styles.card} >
        <Image style={styles.foto} source={{ uri: props.foto }} />
        <View style={styles.card_description}>
          <Text style={{ fontSize: 20, color: '#fff' }}>{props.nome}</Text>
          <Text style={{ fontSize: 18, color: '#fff' }}>{props.comentario}</Text> 
          <Text style={{ fontSize: 20, color: '#fff' }}>{props.estrelas}</Text> 
        </View>
      </View>  
    );
}

const styles = StyleSheet.create({
  card: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "rgb(0, 122, 255)",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,    
    elevation: 5,
  },
  card_description: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10, 
  },
  foto: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});