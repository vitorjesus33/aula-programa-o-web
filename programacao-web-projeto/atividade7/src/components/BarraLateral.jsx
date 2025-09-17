function BarraLateral({ posts }) {
    return (
      <aside>
        <h3>Posts Relacionados</h3>
        <ul>
          {posts.map((post, indice) => (
            <li key={indice}>{post}</li>
          ))}
        </ul>
      </aside>
    )
  }
  
  export default BarraLateral
  