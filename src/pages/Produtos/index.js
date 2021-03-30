import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import Card from '../../components/Card';
import { getProdutos } from '../../services/ProdutosService';


export default function Produtos(props) {

    const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      async function loadContent() {
        const produtos = await getProdutos();
        setProdutos(produtos);
      }
      loadContent();
    });
  
    var renderItem = ({ item }) => {
      return <Card                     
                navigation={props.navigation}  
                id={item.id}              
                produto={item.product}
                img={item.img_url}
                preco={item.prod_price}   
            />; 
    }
  
    return (
      <View style={styles.container}>       
        <FlatList
          data={produtos}
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

