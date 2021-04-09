import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, StatusBarIOS } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CardComentario(props) {
  let color = '#FFD700'
  let stars = [];

  for(let i=0; i<props.estrelas; i++){
    stars.push(<Ionicons name='star' size={26} color={color}/>)
  }
  for(let j =0; j<stars.length;j++){
    if(stars.length<5){
      stars.push(<Ionicons name='star-outline' size={26} color={color}/>)
    }
  }
    

  return (  
     <View style={styles.card} >
        <Image style={styles.foto} source={{ uri: props.foto }} />
        <View style={styles.card_description}>
          <Text style={{ fontSize: 20, color: '#fff' }}>{props.nome}</Text>
          <Text style={{ fontSize: 18, color: '#fff' }}>{props.comentario}</Text> 
          <View style={styles.rate}>
           {stars}
          </View>          
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
  rate: {
    flexDirection: 'row',
  },
});