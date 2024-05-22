## Documentação de Frontend para o Projeto SheRoams

### Visão Geral

O frontend do aplicativo SheRoams será desenvolvido utilizando React e Next.js. A interface do usuário será projetada para ser intuitiva e fácil de usar, proporcionando uma experiência agradável e eficiente para as usuárias. 

### Estrutura de Páginas


#### 1. Página Inicial (`Login`)

**Descrição:** Página para usuários existentes fazerem login em suas contas.

  - Mensagem de boas-vindas.
  - Campos: Email e Password.
  - Botão de login. **Redirecionamento para Home Page**
  - Link para SignUp onde pode criar conta.

#### 2. Página de Cadastro (`Signup`)

**Descrição:** Página onde novos usuários podem criar suas contas.

**Componente Formulário de Cadastro :**

  - Campos: Email, Password, Confirmação de Password.
  - Botão de Sign Up.
  
- **Redirecionamento para Login**
  - Link para a página de login.

#### 3. Página de Perfil (`Profile`)

**Descrição:** Página onde o usuário pode ver e editar suas informações pessoais e histórico de viagens.

**Componentes:**
- **Informações do Perfil**: Nome, Email, Foto de Perfil (Campos editáveis). Reward Points, Travel Trips, Bucket List.
- **Previous Trips**
- **Settings**  
- **Version**
  - Lista de países visitados e carimbos virtuais adquiridos.
  - Links para informações sobre o aplicativo, política de privacidade, termos de serviço.


- **Component Footer**
  - Home, Community, Passport, Global.


  #### 4. Página Inicial (`Home Page`)

**Descrição:** Página onde o usuário pode 

**Componentes:**
- **Informações do Perfil**:
- **Previous Trips**
- **Settings**  
- **Version**

  - Lista de países visitados e carimbos virtuais adquiridos.


- **Component Footer**
  - Home, Community, Passport, Global.


#### 5. Página da Comunidade (`Community`)

**Descrição:** Página dedicada à comunidade, onde os usuários podem participar de fóruns de discussão, compartilhar avaliações e emitir alertas.

**Componentes:**
- **Lista de Fóruns**
  - Títulos dos fóruns, descrições breves.
  - Links para páginas específicas de fóruns.
- **Avaliações Recentes**
  - Avaliações de destinos, acomodações, restaurantes.
- **Alertas Recentes**
  - Alertas de segurança emitidos por usuários.

#### 6. Página de Fórum (`Forum`)

**Descrição:** Página específica para cada fórum de discussão.

**Componentes:**
- **Título e Descrição do Fórum**
- **Lista de Posts**
  - Títulos, autores, datas de publicação.
  - Links para páginas específicas de posts.
- **Formulário de Novo Post**
  - Campos: Título, Conteúdo.
  - Botão de envio.

#### 7. Página de Post (`Post`)

**Descrição:** Página específica para cada post em um fórum.

**Componentes:**
- **Título do Post**
- **Conteúdo do Post**
- **Informações do Autor**
- **Comentários**
  - Lista de comentários com autores e datas.
  - Formulário para adicionar novo comentário.

#### 8. Página de Países (`Countries`)

**Descrição:** Página com um filtro que permite aos usuários acessar informações detalhadas sobre cada país.

**Componentes:**
- **Filtro de Países**
  - Campos: Nome do país, continente, etc.
- **Lista de Países**
  - Nome, bandeira, link para detalhes do país.

#### 9. Página de Detalhes do País (`CountryDetail`)

**Descrição:** Página com informações detalhadas sobre um país específico.

**Componentes:**
- **Informações Gerais**
  - Descrição, etiqueta cultural, costumes locais.
- **Dicas para Viajantes Solitárias**
  - Dicas específicas para mulheres viajando sozinhas.
- **Checklist Personalizada**
  - Itens a serem preparados para a viagem.
- **Curiosidades**
  - Fatos interessantes sobre o país.

#### 10. Página do Passaporte Virtual (`VirtualPassport`)

**Descrição:** Página onde os usuários podem ver e gerenciar seus carimbos virtuais.

**Componentes:**
- **Lista de Carimbos Virtuais**
  - Países visitados, datas de visita, imagens dos carimbos.
- **Adicionar Novo Carimbo**
  - Formulário para adicionar carimbo manualmente, se necessário.

#### 11. Página de Localização Compartilhada (`SharedLocation`)

**Descrição:** Página onde os usuários podem ativar a opção de compartilhamento de localização em tempo real com amigos e familiares.

**Componentes:**
- **Mapa Interativo**
  - Mostra a localização atual do usuário.
- **Configurações de Compartilhamento**
  - Opções para ativar/desativar compartilhamento, selecionar contatos.

  ### Componentes Globais

**Rodapé (`Footer`):**
- Navegação principal (Home, Comunidade, Países, Passaporte Virtual, Perfil).
- Ícone de usuário com dropdown para login/logout.




