const express = require('express');
const app = express();
const port = 3031;
app.use(express.json());
const { v4: uuidv4 } = require('uuid');

var produtos = [
    {
        id: 1,
        product: 'Bola de Basquete',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
        img_url: 'https://cdn.ecvol.com/s/www.querocase.com.br/produtos/topsocket-bola-de-basquete/z/0.png?v=0',
        prod_price:'39.99',
    },
    {
        id: 2,
        product: 'Chuteira',
        description: 'Chuteira vermelha',
        img_url: 'https://static.netshoes.com.br/produtos/chuteira-campo-nike-mercurial-vapor-13-club-fg/68/HZM-1898-068/HZM-1898-068_zoom1.jpg?ts=1579725255&ims=544x',
        prod_price:'99.99',
    },
    {
        id: 3,
        product: 'Caneleira',
        description: 'Caneleira branca',
        img_url: 'https://static.netshoes.com.br/produtos/caneleira-adidas-everlite/28/COL-3398-028/COL-3398-028_zoom1.jpg?ts=1565966644',
        prod_price:'129,99',
    },

];

var comentarios = [
    {
        id:'1',
        idProduto: '1',
        foto:'https://www.esciupfnews.com/wp-content/uploads/2020/05/Charles-Babbage-data.jpg',
        nome: 'Charles Babage',
        comentario: 'Comentário da pessoa 1 sobre o produto 1',
        estrelas: '5',
    },
    {
        id:'2',
        idProduto: '1',
        foto:'https://i.pinimg.com/736x/82/12/ac/8212ac06b4c5ec6567a0b8e1e91775ab.jpg',
        nome: 'Alan Turing',
        comentario: 'Comentário da pessoa 2 sobre o produto 1',
        estrelas: '4',
    },
    {
        id:'3',
        idProduto: '1',
        foto:'https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg',
        nome: 'Ada Lovelace',
        comentario: 'Comentário da pessoa 3 sobre o produto 1',
        estrelas: '3',
    },
    {
      id:'4',
      idProduto: '2',
      foto:'https://www.esciupfnews.com/wp-content/uploads/2020/05/Charles-Babbage-data.jpg',
      nome: 'Charles Babage',
      comentario: 'comentáriopessoa 1',
      estrelas: '2',
  },
  {
      id:'5',
      idProduto: '2',
      foto:'https://i.pinimg.com/736x/82/12/ac/8212ac06b4c5ec6567a0b8e1e91775ab.jpg',
      nome: 'Alan Turing',
      comentario: 'comentáriopessoa 2',
      estrelas: '5',
  },
  {
      id:'6',
      idProduto: '2',
      foto:'https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg',
      nome: 'Ada Lovelace',
      comentario: 'comentáriopessoa 3',
      estrelas: '3',
  },
  {
    id:'7',
    idProduto: '3',
    foto:'https://www.esciupfnews.com/wp-content/uploads/2020/05/Charles-Babbage-data.jpg',
    nome: 'Charles Babage',
    comentario: 'comentáriopessoa 1',
    estrelas: '4',
},
{
    id:'8',
    idProduto: '3',
    foto:'https://i.pinimg.com/736x/82/12/ac/8212ac06b4c5ec6567a0b8e1e91775ab.jpg',
    nome: 'Alan Turing',
    comentario: 'comentáriopessoa 2',
    estrelas: '1',
},
{
    id:'9',
    idProduto: '3',
    foto:'https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg',
    nome: 'Ada Lovelace',
    comentario: 'comentáriopessoa 3',
    estrelas: '3',
},
{
    id:'10',
    idProduto: '3',
    foto:'https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg',
    nome: 'Ada Lovelace',
    comentario: 'comentáriopessoa 3',
    estrelas: '3',
},
]

// Rota da raiz
app.get('/', (req, res) => {
    res.send('Rota RAIZ ok');
  });

// Rota dos produtos - pegando todos os produtos
app.get('/produtos', (req, res) => {        
    res.send(produtos);
});

// Rota do produto - pegando um produto
app.get('/produtos/:id', (req, res) => {
    const produto = produtos.filter((produto) => produto.id == req.params.id);
    res.send(produto[0]);
  });
// Adicionar produto
app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = uuidv4();
    produtos.push(novoProduto);    
    res.send(novoProduto);
});

// Deletar produto
app.delete('/produtos/:id', (req, res) => {
    produtos = produtos.filter((produto) => produto.id != req.params.id)
    res.send(produtos);
  });


// Rota do comentarios - pegando um comentario
app.get('/produtos/:idProduto/comentarios/:id', (req, res) => {
    const comentario = comentarios.filter((comentario) => comentario.id == req.params.id);
    res.send(comentario[0]);
  });

// Rota dos comentarios - pegando todos os comentarios
app.get('/produtos/:id/comentarios', (req, res) => {        
    const comentariosProduto = comentarios.filter((comentario) => comentario.idProduto == req.params.id);
    res.send(comentariosProduto);
});


// Deletar comentario
app.delete('/produtos/:idProduto/comentarios/:id', (req, res) => {
    comentarios = comentarios.filter((comentario) => comentario.id != req.params.id)
    res.send(comentarios);
  });


// Adicionar comentario
app.post('/produtos/:idProduto/comentarios/:id', (req, res) => {
    const novoComentario = req.body;
    novoComentario.id = uuidv4();
    comentarios.push(novoComentario);    
    res.send(novoComentario);
});



app.listen(port, '0.0.0.0', () => {
  console.log('Servidor online');
});