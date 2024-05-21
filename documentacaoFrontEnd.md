## Documentação de Frontend para o Projeto SheRoams

### Visão Geral

O frontend do aplicativo SheRoams será desenvolvido utilizando React e Next.js. A interface do usuário será projetada para ser intuitiva e fácil de usar, proporcionando uma experiência agradável e eficiente para as usuárias. Abaixo estão descritas todas as páginas e componentes necessários, juntamente com suas funcionalidades e detalhes.

### Estrutura de Páginas

#### 1. Página Inicial (`Home`)

**Descrição:** Página de boas-vindas que introduz o aplicativo e destaca suas principais funcionalidades.

**Componentes:**
- **Banner de Boas-Vindas**
  - Mensagem de introdução.
  - Imagem inspiradora.
- **Funcionalidades em Destaque**
  - Breve descrição de funcionalidades principais (Empoderamento Feminino, Segurança, Comunidade, Planejamento Personalizado, Passaporte Virtual).
- **Chamadas para Ação**
  - Botões para cadastro e login.

#### 2. Página de Cadastro (`Signup`)

**Descrição:** Página onde novos usuários podem criar suas contas.

**Componentes:**
- **Formulário de Cadastro**
  - Campos: Nome, Email, Senha, Confirmação de Senha, Interesses de Viagem.
  - Botão de envio.
- **Redirecionamento para Login**
  - Link para a página de login.

#### 3. Página de Login (`Login`)

**Descrição:** Página para usuários existentes fazerem login em suas contas.

**Componentes:**
- **Formulário de Login**
  - Campos: Email, Senha.
  - Botão de envio.
- **Redirecionamento para Cadastro**
  - Link para a página de cadastro.

#### 4. Página de Perfil (`Profile`)

**Descrição:** Página onde o usuário pode ver e editar suas informações pessoais e histórico de viagens.

**Componentes:**
- **Informações do Perfil**
  - Campos editáveis: Nome, Email, Foto de Perfil, Interesses de Viagem.
- **Histórico de Viagens**
  - Lista de países visitados e carimbos virtuais adquiridos.
- **Botões de Ação**
  - Salvar alterações, excluir conta.

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

**Cabeçalho (`Header`):**
- Navegação principal (Home, Comunidade, Países, Passaporte Virtual, Perfil).
- Ícone de usuário com dropdown para login/logout.

**Rodapé (`Footer`):**
- Links para informações sobre o aplicativo, política de privacidade, termos de serviço.

### Conclusão

Esta documentação detalha todas as páginas e componentes necessários para o frontend do SheRoams. A estrutura modular e bem definida garante que todas as funcionalidades principais e adicionais sejam implementadas de forma organizada e eficiente, proporcionando uma excelente experiência para as usuárias.
