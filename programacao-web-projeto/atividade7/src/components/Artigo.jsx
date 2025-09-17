function Artigo({ titulo, autor, data, conteudo }) {
    return (
      <article>
        <h2>{titulo}</h2>
        <p><strong>Autor:</strong> {autor}</p>
        <p><em>{data}</em></p>
        <p>{conteudo}</p>
      </article>
    )
  }
  
  export default Artigo
  