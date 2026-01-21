# Aula Back - API REST com Express

Projeto educacional de uma API REST simples utilizando Node.js e Express para gerenciar alunos e seus boletins.

## 📋 Requisitos

- Node.js instalado
- npm (gerenciador de pacotes)

## 🚀 Instalação

1. Clone ou baixe o repositório
2. Instale as dependências:
```bash
npm install
```

## ▶️ Como executar

```bash
node server.cjs
```

O servidor será iniciado na porta **3000**. Você verá a mensagem:
```
Servidor rodando na porta 3000
```

## 📡 Rotas disponíveis

### GET `/teste`
Retorna uma mensagem de teste.

**Exemplo:**
```
GET http://localhost:3000/teste
```

**Resposta:**
```json
{
  "mensagem": "Hello world"
}
```

### GET `/aluno/:id`
Retorna os dados de um aluno específico pelo ID.

**Exemplo:**
```
GET http://localhost:3000/aluno/1
```

**Resposta:**
```json
{
  "id": 1,
  "nome": "João",
  "idade": 16,
  "boletim": [10, 8, 9, 7]
}
```

## 📚 Estrutura do projeto

```
Aula Back/
├── server.cjs          # Arquivo principal da API
├── package.json        # Dependências do projeto
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias utilizadas

- **Express.js** - Framework web minimalista
- **Node.js** - Runtime JavaScript

## 📝 Notas

- A porta padrão é **3000**
- Os dados são armazenados em memória (não persistem após reiniciar)