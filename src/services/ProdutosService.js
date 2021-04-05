import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://192.168.1.5:3031/produtos');
  return response.data;
}

var getProduto = async (id) => {
  const response = await axios.get('http://192.168.1.5:3031/produtos/'+id);
  return response.data;
}

var removerProduto = async (id) => {
  const response = await axios.delete('http://192.168.1.5:3031/produtos/'+id);
  return response.data;
}
var cadastrarProduto = async(produto) =>{
  const response = await axios.post('http://192.168.1.5:3031/produtos', produto);
  return response.data;
}

export { getProdutos, getProduto, removerProduto, cadastrarProduto };