import axios from 'axios';

var getComentarios = async (id) => {
  const response = await axios.get('http://192.168.1.5:3031/produtos/'+id+'/comentarios');
  return response.data;
}

export { getComentarios };