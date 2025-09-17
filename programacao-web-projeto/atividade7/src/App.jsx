import './index.css'
import Cabecalho from './componentes/Cabecalho'
import Navegacao from './componentes/Navegacao'
import Artigo from './componentes/Artigo'
import BarraLateral from './componentes/BarraLateral'
import Rodape from './componentes/Rodape'

function App() {
  const postagem = {
    titulo: 'Como refatorar um blog com React',
    autor: 'Vitor Dev',
    data: '17 de setembro de 2025',
    conteudo: 'Neste post, vamos aprender como transformar um blog estático em uma aplicação React usando componentes reutilizáveis e props.'
  }

  const relacionados = [
    'React: Introdução e JSX',
    'React: Props e Estado',
    'React: Hooks e Ciclo de Vida'
  ]

  return (
    <div className="container">
      <Cabecalho />
      <Navegacao />
      <main>
        <Artigo {...postagem} />
        <BarraLateral posts={relacionados} />
      </main>
      <Rodape />
    </div>
  )
}

export default App
