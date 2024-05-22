### Estrutura de Componentes por Página

#### 1. Página de Login (`Login`)

**Componentes:**
- **Mensagem de Boas-Vindas**: Componente para exibir uma mensagem de boas-vindas.
- **Formulário de Login**: Campos de entrada para email e senha, botão de login.
- **Link para SignUp**: Link que redireciona para a página de cadastro.

```jsx
import React from 'react';

const LoginPage = () => (
  <div>
    <WelcomeMessage />
    <LoginForm />
    <SignUpLink />
  </div>
);

const WelcomeMessage = () => <h2>Bem-vindo!</h2>;

const LoginForm = () => (
  <form>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Senha" />
    <button type="submit">Login</button>
  </form>
);

const SignUpLink = () => (
  <p>
    Não tem uma conta? <a href="/signup">Cadastre-se</a>
  </p>
);

export default LoginPage;
```

#### 2. Página de Cadastro (`Signup`)

**Componentes:**
- **Formulário de Cadastro**: Campos para email, senha e confirmação de senha, botão de sign up.
- **Link para Login**: Link que redireciona para a página de login.

```jsx
import React from 'react';

const SignUpPage = () => (
  <div>
    <SignUpForm />
    <LoginLink />
  </div>
);

const SignUpForm = () => (
  <form>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Senha" />
    <input type="password" placeholder="Confirme a Senha" />
    <button type="submit">Sign Up</button>
  </form>
);

const LoginLink = () => (
  <p>
    Já tem uma conta? <a href="/login">Faça login</a>
  </p>
);

export default SignUpPage;
```

#### 3. Página de Perfil (`Profile`)

**Componentes:**
- **Informações do Perfil**: Nome, email, foto de perfil (campos editáveis), pontos de recompensa, viagens anteriores, lista de desejos.
- **Viagens Anteriores**: Lista de países visitados e carimbos virtuais adquiridos.
- **Configurações**: Configurações do usuário.
- **Versão**: Informação sobre a versão do aplicativo.
- **Rodapé**: Links para navegação principal.

```jsx
import React from 'react';

const ProfilePage = () => (
  <div>
    <ProfileInfo />
    <PreviousTrips />
    <Settings />
    <VersionInfo />
    <Footer />
  </div>
);

const ProfileInfo = () => (
  <div>
    <h2>Seu Perfil</h2>
    <img src="profile.jpg" alt="Foto de Perfil" />
    <input type="text" placeholder="Nome" />
    <input type="email" placeholder="Email" />
    <p>Pontos de Recompensa: 100</p>
    <p>Viagens Anteriores: 5</p>
    <p>Lista de Desejos: 10</p>
  </div>
);

const PreviousTrips = () => (
  <div>
    <h3>Viagens Anteriores</h3>
    {/* Lista de países e carimbos */}
  </div>
);

const Settings = () => <h3>Configurações</h3>;

const VersionInfo = () => <p>Versão: 1.0.0</p>;

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default ProfilePage;
```

#### 4. Página Inicial (`Home Page`)

**Componentes:**
- **Informações do Perfil**: Resumo do perfil do usuário.
- **Viagens Anteriores**: Resumo das viagens anteriores.
- **Configurações**: Link para configurações.
- **Versão**: Informação sobre a versão do aplicativo.
- **Rodapé**: Links para navegação principal.

```jsx
import React from 'react';

const HomePage = () => (
  <div>
    <ProfileSummary />
    <PreviousTripsSummary />
    <SettingsLink />
    <VersionInfo />
    <Footer />
  </div>
);

const ProfileSummary = () => (
  <div>
    <h2>Resumo do Perfil</h2>
    <p>Nome: João</p>
    <p>Email: joao@example.com</p>
  </div>
);

const PreviousTripsSummary = () => (
  <div>
    <h3>Viagens Anteriores</h3>
    {/* Resumo das viagens */}
  </div>
);

const SettingsLink = () => <a href="/settings">Configurações</a>;

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default HomePage;
```

#### 5. Página da Comunidade (`Community`)

**Componentes:**
- **Lista de Fóruns**: Títulos dos fóruns, descrições breves, links para páginas específicas de fóruns.
- **Avaliações Recentes**: Avaliações de destinos, acomodações, restaurantes.
- **Alertas Recentes**: Alertas de segurança emitidos por usuários.

```jsx
import React from 'react';

const CommunityPage = () => (
  <div>
    <ForumList />
    <RecentReviews />
    <RecentAlerts />
    <Footer />
  </div>
);

const ForumList = () => (
  <div>
    <h2>Fóruns</h2>
    {/* Lista de fóruns */}
  </div>
);

const RecentReviews = () => (
  <div>
    <h3>Avaliações Recentes</h3>
    {/* Lista de avaliações */}
  </div>
);

const RecentAlerts = () => (
  <div>
    <h3>Alertas Recentes</h3>
    {/* Lista de alertas */}
  </div>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default CommunityPage;
```

#### 6. Página de Fórum (`Forum`)

**Componentes:**
- **Título e Descrição do Fórum**: Exibe o título e a descrição do fórum.
- **Lista de Posts**: Títulos, autores, datas de publicação, links para páginas específicas de posts.
- **Formulário de Novo Post**: Campos para título e conteúdo, botão de envio.

```jsx
import React from 'react';

const ForumPage = () => (
  <div>
    <ForumHeader />
    <PostList />
    <NewPostForm />
    <Footer />
  </div>
);

const ForumHeader = () => (
  <div>
    <h2>Título do Fórum</h2>
    <p>Descrição do Fórum</p>
  </div>
);

const PostList = () => (
  <div>
    <h3>Posts</h3>
    {/* Lista de posts */}
  </div>
);

const NewPostForm = () => (
  <form>
    <input type="text" placeholder="Título" />
    <textarea placeholder="Conteúdo"></textarea>
    <button type="submit">Postar</button>
  </form>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default ForumPage;
```

#### 7. Página de Post (`Post`)

**Componentes:**
- **Título do Post**: Exibe o título do post.
- **Conteúdo do Post**: Exibe o conteúdo do post.
- **Informações do Autor**: Exibe informações sobre o autor do post.
- **Comentários**: Lista de comentários com autores e datas, formulário para adicionar novo comentário.

```jsx
import React from 'react';

const PostPage = () => (
  <div>
    <PostHeader />
    <PostContent />
    <AuthorInfo />
    <Comments />
    <NewCommentForm />
    <Footer />
  </div>
);

const PostHeader = () => <h2>Título do Post</h2>;

const PostContent = () => <p>Conteúdo do Post</p>;

const AuthorInfo = () => <p>Autor: João</p>;

const Comments = () => (
  <div>
    <h3>Comentários</h3>
    {/* Lista de comentários */}
  </div>
);

const NewCommentForm = () => (
  <form>
    <textarea placeholder="Adicione um comentário"></textarea>
    <button type="submit">Comentar</button>
  </form>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a

>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default PostPage;
```

#### 8. Página de Países (`Countries`)

**Componentes:**
- **Filtro de Países**: Campos para filtrar países por nome, continente, etc.
- **Lista de Países**: Nome, bandeira, link para detalhes do país.

```jsx
import React from 'react';

const CountriesPage = () => (
  <div>
    <CountryFilter />
    <CountryList />
    <Footer />
  </div>
);

const CountryFilter = () => (
  <div>
    <input type="text" placeholder="Nome do País" />
    <select>
      <option value="">Continente</option>
      <option value="asia">Ásia</option>
      <option value="europe">Europa</option>
      {/* Outros continentes */}
    </select>
  </div>
);

const CountryList = () => (
  <div>
    <h3>Países</h3>
    {/* Lista de países */}
  </div>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default CountriesPage;
```

#### 9. Página de Detalhes do País (`CountryDetail`)

**Componentes:**
- **Informações Gerais**: Descrição, etiqueta cultural, costumes locais.
- **Dicas para Viajantes Solitárias**: Dicas específicas para mulheres viajando sozinhas.
- **Checklist Personalizada**: Itens a serem preparados para a viagem.
- **Curiosidades**: Fatos interessantes sobre o país.

```jsx
import React from 'react';

const CountryDetailPage = () => (
  <div>
    <GeneralInfo />
    <SoloTravelTips />
    <CustomChecklist />
    <FunFacts />
    <Footer />
  </div>
);

const GeneralInfo = () => (
  <div>
    <h2>Informações Gerais</h2>
    <p>Descrição, etiqueta cultural, costumes locais.</p>
  </div>
);

const SoloTravelTips = () => (
  <div>
    <h3>Dicas para Viajantes Solitárias</h3>
    <p>Dicas específicas para mulheres viajando sozinhas.</p>
  </div>
);

const CustomChecklist = () => (
  <div>
    <h3>Checklist Personalizada</h3>
    <p>Itens a serem preparados para a viagem.</p>
  </div>
);

const FunFacts = () => (
  <div>
    <h3>Curiosidades</h3>
    <p>Fatos interessantes sobre o país.</p>
  </div>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default CountryDetailPage;
```

#### 10. Página do Passaporte Virtual (`VirtualPassport`)

**Componentes:**
- **Lista de Carimbos Virtuais**: Países visitados, datas de visita, imagens dos carimbos.
- **Adicionar Novo Carimbo**: Formulário para adicionar carimbo manualmente, se necessário.

```jsx
import React from 'react';

const VirtualPassportPage = () => (
  <div>
    <StampList />
    <AddStampForm />
    <Footer />
  </div>
);

const StampList = () => (
  <div>
    <h3>Carimbos Virtuais</h3>
    {/* Lista de carimbos */}
  </div>
);

const AddStampForm = () => (
  <form>
    <input type="text" placeholder="País Visitado" />
    <input type="date" placeholder="Data da Visita" />
    <button type="submit">Adicionar Carimbo</button>
  </form>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default VirtualPassportPage;
```

#### 11. Página de Localização Compartilhada (`SharedLocation`)

**Componentes:**
- **Mapa Interativo**: Mostra a localização atual do usuário.
- **Configurações de Compartilhamento**: Opções para ativar/desativar compartilhamento, selecionar contatos.

```jsx
import React from 'react';

const SharedLocationPage = () => (
  <div>
    <InteractiveMap />
    <SharingSettings />
    <Footer />
  </div>
);

const InteractiveMap = () => (
  <div>
    <h3>Mapa Interativo</h3>
    {/* Mapa com a localização atual */}
  </div>
);

const SharingSettings = () => (
  <div>
    <h3>Configurações de Compartilhamento</h3>
    <button>Ativar Compartilhamento</button>
    <button>Desativar Compartilhamento</button>
    <select>
      <option value="">Selecione um Contato</option>
      {/* Lista de contatos */}
    </select>
  </div>
);

const Footer = () => (
  <footer>
    <a href="/home">Home</a>
    <a href="/community">Comunidade</a>
    <a href="/passport">Passaporte</a>
    <a href="/global">Global</a>
  </footer>
);

export default SharedLocationPage;
```

### Componentes Globais

**Cabeçalho (`Header`):**
- Navegação principal (Home, Comunidade, Países, Passaporte Virtual, Perfil).
- Ícone de usuário com dropdown para login/logout.

```jsx
import React from 'react';

const Header = () => (
  <header>
    <nav>
      <a href="/home">Home</a>
      <a href="/community">Comunidade</a>
      <a href="/countries">Países</a>
      <a href="/passport">Passaporte Virtual</a>
      <a href="/profile">Perfil</a>
      <UserDropdown />
    </nav>
  </header>
);

const UserDropdown = () => (
  <div>
    <button>User</button>
    <div>
      <a href="/login">Login</a>
      <a href="/logout">Logout</a>
    </div>
  </div>
);

export default Header;
```

**Rodapé (`Footer`):**
- Links para informações sobre o aplicativo, política de privacidade, termos de serviço.

```jsx
import React from 'react';

const Footer = () => (
  <footer>
    <a href="/about">Sobre</a>
    <a href="/privacy">Política de Privacidade</a>
    <a href="/terms">Termos de Serviço</a>
  </footer>
);

export default Footer;
```

### Considerações Finais

- **Reutilização de Componentes**: Componentes como `Footer`, `Header`, e elementos de formulários (ex: `LoginForm`, `SignUpForm`) são reutilizáveis em várias páginas, o que ajuda a evitar retrabalho.
- **Estrutura Modular**: A organização modular facilita a manutenção e a escalabilidade do aplicativo.
- **Componentes Dinâmicos**: Para dados dinâmicos (ex: lista de países, posts, comentários), componentes podem ser atualizados para buscar dados de uma API.

Esta estrutura modular e reutilizável irá facilitar o desenvolvimento, a manutenção e a expansão futura do aplicativo.