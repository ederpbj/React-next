# React-next
Site React com next js

[Meu Git](https://github.com/ederpbj/React-next)

# Resumo

## Cmd
Descrição | Comandos
-------|----------
Clonar git | `git clone https://github.com/ederpbj/React-next.git`
Ir para pasta | `cd React-next`
Instalar react-dom | `npm install next react react-dom`

## Links
[Docs Next.org](https://nextjs.org/docs/getting-started)

# Sequencia

Clonar git | `git clone https://github.com/ederpbj/React-next.git`

Ir para pasta | `cd React-next`

Criar package.json | `npm init`

Ver site: 

[Docs Next.org](https://nextjs.org/docs/getting-started)

Instalar o react e next  | `npm install next react react-dom`



Abra package.json e adicione o script: 
````
"scripts": {
  "dev": "next",
  "build":"next build",
  "start": "next start",
}
````

Criar pasta pages/index.js, seguindo site next
````
  function HomePage() {
    return <div>Welcome to Next.js!</div>
  }

  export default HomePage
````
Gera pasta next

Criar página pages/sobre.js com base na index

Criar página pages/contato.js com base na index

### Modificando páginas

Modificar return das páginas, incluir () para mais linhas

### Iniciando components/Menu

### linkStyle components/Menu

Rodar em modo dev | `npm run dev`

## Iniciando com Bootstrap

[Reactstrap](https://reactstrap.github.io/)

### Instalando Bootstrap e next-css

Ir para parte
** Adding Bootstrap

Instalar biblioteca para gerenciar o Bootstrap. 

[reactstrap](https://github.com/reactstrap/reactstrap)

Instalar bootstrap | `npm install --save bootstrap`
Instalar reactstrap | `npm install --save reactstrap`

Instalar next-css

[next-css](https://github.com/vercel/next-plugins/tree/master/packages/next-css)

Instalar Biblioteca next-css | `npm install --save @zeit/next-css`

Importar em todas as páginas (para next)

`import 'bootstrap/dist/css/bootstrap.min.css';`

Criar arquivo na raiz (root) next.config.js

* Implementando components bootstrap

[Components reactstrap](https://reactstrap.github.io/components/alerts/)

### Spinners

- Importar em contato
- Personalizar spinner

[Doc Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

- pesquisar spinner
- flex

