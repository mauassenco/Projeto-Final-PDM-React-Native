import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { AdMobBanner } from "expo-ads-admob";

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
  


  var bannerError = (e) => {console.log(e)}
  
    return (
      <View style={styles.container}>       
        <FlatList
          data={produtos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
         <AdMobBanner
            bannerSize="Banner"
            // adUnitID="ca-app-pub-6702695123328649/8029874893"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={bannerError} />
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

