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

Criar package.json
`npm init`

Instalar o react e next [Docs Next.org](https://nextjs.org/docs/getting-started)
`npm install next react react-dom`

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
* Gera pasta next

Criar página pages/sobre.js com base na index

