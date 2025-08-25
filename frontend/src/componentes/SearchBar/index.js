import './style.css'
import { useState } from 'react'
import produtosMock from '../Produtos/produtos'
import { Link } from 'react-router-dom';
import { CardProdutos } from '../CardProdutos';

const SearchBar = () => {
  const [textoPesquisa, setTextoPesquisa] = useState('');
  const [produtosPesquisados, setProdutosPesquisados] = useState([]);

  const handleSearch = (event) => {
    const texto = event.target.value;
    setTextoPesquisa(texto);

    if (texto.length > 0) {
      const resultado = produtosMock.filter(produto =>
        produto.nome.toLowerCase().includes(texto.toLowerCase())
      );
      setProdutosPesquisados(resultado);
    } else {
      setProdutosPesquisados([]);
    }
  };

const handleLinkClick = () => {
    setTextoPesquisa('');
    setProdutosPesquisados([]);
  }

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <select className="categoriasSelect">
          <option>Todas as categorias</option>
          <option>iPhone</option>
          <option>Samsung</option>
          <option>Notebook</option>
          <option>Smartwatch</option>
          <option>Headphone</option>
          <option>Outros</option>
        </select>
        <input
          type="text"
          placeholder="Digite sua busca..."
          value={textoPesquisa}
          onChange={handleSearch}
        />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>

      {produtosPesquisados.length > 0 && (
        <div className="search-results-container">
          {produtosPesquisados.map(produto => (
            // Usa o seu CardProdutos para exibir os resultados
            <Link to={`/produto`} className="search-result-item" key={produto.produto_id} onClick={handleLinkClick}>
              <CardProdutos
                nome_produto={produto.nome}
                preco={produto.preco}
                site_origem={produto.origem}
                imagem_url={produto.src}
                id={produto.produto_id}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar
