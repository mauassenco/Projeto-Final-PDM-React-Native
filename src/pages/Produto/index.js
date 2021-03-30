import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";


import { getProduto } from '../../services/ProdutosService';
import CardProduto from '../../components/CardProduto';

export default function Produto(props){
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {     
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  })

  return <View>
        {
          produto.id && <CardProduto
          id={produto.id}
          produto={produto.product}
          preco={produto.prod_price}
          img={produto.img_url} 
          descricao={produto.description}
          />        
        }
        </View>;
}