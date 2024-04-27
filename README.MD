<h1>API de Equipes e Pilotos de Fórmula 1</h1>
<p>Esta é uma API simples para fornecer informações sobre equipes e pilotos de Fórmula 1. Ela foi construída com Fastify e TypeScript.</p>

<h2>Instalação</h2>
<p>Para utilizar esta API, você precisará ter o Node.js instalado em seu sistema. Clone este repositório e execute o seguinte comando para instalar as dependências:</p>
<pre><code>npm install</code></pre>

<h2>Inicializando o Servidor</h2>
<p>Para iniciar o servidor localmente, execute o seguinte comando:</p>
<pre><code>npm run start:dev</code></pre>

<h2>Como Usar</h2>
<p>Existem várias rotas disponíveis para acessar informações sobre as equipes e os pilotos.</p>

<h3>Endpoint /teams</h3>
<p>Retorna informações sobre todas as equipes de Fórmula 1.</p>
<p>Método: GET</p>
<pre><code>http://localhost:3000/teams</code></pre>

<h3>Endpoint /drivers</h3>
<p>Retorna informações sobre todos os pilotos de Fórmula 1.</p>
<p>Método: GET</p>
<pre><code>http://localhost:3000/drivers</code></pre>

<h3>Endpoint /drivers/:id</h3>
<p>Retorna informações sobre um piloto específico com base em seu ID.</p>
<p>Método: GET</p>
<p>Parâmetros:</p>
<ul>
  <li><code>id</code>: ID do piloto</li>
</ul>
<pre><code>http://localhost:3000/drivers/:id</code></pre>

<h3>Endpoint /teams/:id</h3>
<p>Retorna informações sobre uma equipe específica com base em seu ID.</p>
<p>Método: GET</p>
<p>Parâmetros:</p>
<ul>
  <li><code>id</code>: ID da equipe</li>
</ul>
<pre><code>http://localhost:3000/teams/:id</code></pre>

<h2>Pré-requisitos</h2>
<ul>
  <li>Node.js instalado</li>
  <li>Conhecimento básico de APIs REST</li>
</ul>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a <a href="LICENSE.txt">Licença MIT</a>.</p>
