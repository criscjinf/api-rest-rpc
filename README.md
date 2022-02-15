# api-rest-rpc
Api para exemplificar diferenças entre API REST e RPC

## Requisitos para rodar o sistema:
- NodeJS 12

## Configuração:
- npm i
- npm run dev

## Rotas disponíveis
| Rotas | Verbos implementados|
|-----|------|
|http://localhost:6000/users | GET, POST |
|http://localhost:6000/users/:id_user | GET |
|http://localhost:6000/cities | GET, POST |
|http://localhost:6000/cities/:id_city | GET |
|http://localhost:6000/users/:id_user/address | GET, POST |
|http://localhost:6000/users/:id_user/address/:id_address | GET |
|http://localhost:6000/rpc/listUsers | GET |
|http://localhost:6000/rpc/getUser/:id_user | GET |
|http://localhost:6000/rpc/upsertUser | POST |

Obs.: Construí esta api para servir de exemplo básico, implementando somente os métodos GET e POST, porém na talk no link disponibilizado abaixo, falo sobre os principais verbos utilizados por api's rest

## Link para a talk sobre REST
https://drive.google.com/file/d/1w34RicxmtMdFtOtkwIkqvcV1ZnzFp5TH/view?usp=sharing