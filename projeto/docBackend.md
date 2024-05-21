USERS
1-  GET "api/login"- Serve para fazer o login do usuário, deve verificar se já existe o utilizador através do email, se existir retornar "Utilizador já existe com este email" Caso contrário faz login.

2 -  POST 'api/signin':-Serve para fazer o registo de um novo usuário, verifica se existe o usário que se está a registar, caso exista retorna "utilizador já existente" caso contrário cria um novo usuário

3-  POST logout "api/logout"- serve para terminar a sessão do usuario 

4-   GET profile  'api/profile'- serve para autenticar o perfil do usuario 

5-  PUT profile 'api/profile'-serve para atualizar o perfil do usuario

 POST 
1-  GET  post 'api/post':  serve para mostrar uma lista dos posts

2-  GET post 'api/post/:id': serve para mostrar um post especifico atravez do seu  id

3-  POST  post 'api/post' : serve para criar um novo post 

4-  PUT post 'api/post/:id' : serve para atualizar um post atravez do seu id 

5-  DELETE posr 'api/post/:i' : serve para apgar um post atravez do seu id

COMMENTS
1-  GET  comment 'api/post/:postid/comment :serve para mostrar u um comentario de um post especifico 

2-  POST comment api/post/:postid/coment : serve para adicionar um novo comentario num blog especifico

3- PUT comment 'api/coment/:id': serve para atulizar um comentario especifico atravez so seu id 

4- DELETE comment 'api/coments/:id': serve para apagar um comentario especifico atravez do seu id 

COUNTRIES

1- GET country  'api/country/:id' serve para mostrar um pais atravez do seu id 