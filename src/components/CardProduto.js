import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default function CardProduto(props) {
    return (   
        <View style={styles.card} >
          <Image style={styles.foto} source={{ uri: props.img }} />
          <View style={styles.card_info}>
            <Text style={{paddingBottom: 10}}>{props.produto}</Text>
            <Text >{props.preco}</Text>   
          </View>
          <View style={styles.card_description}>
              <Text style={{textAlignVertical: "center",textAlign: "center", paddingBottom: 10}}>Descrição</Text>
              <Text style={{textAlignVertical: "center",textAlign: "center",}}>{props.descricao}</Text>
          </View>
      </View>     
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      padding: 30,
      alignItems: "center",
      justifyContent:'space-between',
    },
    card_info: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    card_description: {
      padding: 40,
      paddingHorizontal: 20,       
    },
    foto: {
      width: 260,
      height: 260,   
      },
  });