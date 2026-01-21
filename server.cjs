const express = require('express');
const app = express();

app.get('/teste',(req,res) =>{
    res.json({mensagem:'Hello world'});

});

let table =[ 
    {id:1,
    nome: 'João',
    idade: 16,
    boletim:[10, 8, 9, 7],},

     {id:2,
    nome: 'João',
    idade: 16,
    boletim:[10, 8, 9, 7],},

    {id:3,
    nome: 'João',
    idade: 16,
    boletim:[10, 8, 9, 7],},

    {id:4,
    nome: 'João',
    idade: 16,
    boletim:[10, 8, 9, 7],},

    {id:5,
    nome: 'João',
    idade: 16,
    boletim:[10, 8, 9, 7],}
    
];

app.get('/aluno/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const findaluno = table.find (i=> i.id === id);
    res.json(findaluno);
});

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});
