import axios from 'axios';

var getComentarios = async (id) => {
  const response = await axios.get('http://192.168.1.5:3031/produtos/'+id+'/comentarios');
  return response.data;
}

var removerComentario = async (id, idProduto) => {
  const response = await axios.delete('http://192.168.1.5:3031/produtos/'+idProduto+'/comentarios/'+id);
  return response.data;
}
var cadastrarComentario = async(idProduto, comentario) =>{
  const response = await axios.post('http://192.168.1.5:3031/produtos/'+idProduto+'/comentarios/', comentario); // Teste adcionando direto ao produto 1
  return response.data;  
}

export { getComentarios, removerComentario, cadastrarComentario};