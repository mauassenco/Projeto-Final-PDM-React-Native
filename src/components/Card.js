import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";

export default function Card(props) {
  return (  
    // <TouchableHighlight onPress = {() => props.navigation.navigate('Produto', {
    //   idProduto: props.id})}>  
    <TouchableHighlight onPress = {() => props.navigation.navigate('Produto', {
      screen: 'Produto',
      params:{'idProduto': props.id},
      }
      )}>  

      <View style={styles.card} >
        <Image style={styles.foto} source={{ uri: props.img }} />
        <View style={styles.card_description}>
          <Text style={{ fontSize: 20, color: '#fff' }}>{props.produto}</Text>
          <Text style={{ fontSize: 20, color: '#fff' }}>{props.preco}</Text> 
        </View>
      </View>  
    </TouchableHighlight>
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