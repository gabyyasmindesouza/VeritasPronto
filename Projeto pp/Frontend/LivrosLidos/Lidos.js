function LivrosLidos() {

    const [lidos, setLidos] = useState([]); ////////////////////////////////////////
    const [livros, setLivros] = useState(pacoteDeProdutos)  ////////////////////////////////////////
///pacotedeprodutos = info dos livros

    const itensLidos =
      lidos &&
      lidos.map((item) => {
        return (
          <Itens //// mudar c as tuas informações necessárias
            key={item.id}
            imagem={item.photo}
            quantidade={item.quantidade}
            nome={item.name}
            
          />
        );
      });
      
  
      
    return (
      <ConjuntoDoCarrinho>
        <h2>livros lidos:</h2>
          <div>{itensLidos}</div>  ///passar pro html
    
      </ConjuntoDoCarrinho>
    );
  }
  
  export default LivrosLidos