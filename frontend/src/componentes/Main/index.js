import { useEffect, useState } from "react";
import Carousel from "../BannerCarousel";
import { Titulo } from "../Titulo";
import StoreList from "../StoreList";
import MainSections from "./MainSections";
import HistorySection from "./SecaoHistory";
import Footer from "../Footer";
import './style.css';
import axios from 'axios';

function Main() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Novo estado de carregamento
  const [error, setError] = useState(null); // Novo estado para lidar com erros

  useEffect(() => {
    // Função assíncrona para buscar os produtos da API
    const fetchProdutos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Ajuste a URL para a sua API, conforme necessário
        const res = await axios.get('http://localhost:3001/produtos');
        setProdutos(res.data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Não foi possível carregar os produtos. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  function getRandomItems(arr, num) {
    // Se a lista for nula ou menor que o número solicitado, retorne o que tiver.
    if (!arr || arr.length === 0) {
      return [];
    }
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  // Condições de filtragem só devem ser executadas depois que os produtos forem carregados
  const smartphone = getRandomItems(produtos.filter(p => p.nome_categoria === "Smartphone"), 12);
  const notebook = getRandomItems(produtos.filter(p => p.nome_categoria === "Notebook"), 12);
  const amazon = getRandomItems(produtos.filter(p => p.site_origem === "Amazon"), 12);

  return (
    <main>
      <div className='carousel-full-width'>
        <Carousel />
      </div>

      <Titulo cor="#0000" tamanhoFonte="24px">
        Comparação de preços e cashback é no Preço Certo!
      </Titulo>

      <StoreList />

      {/* Renderização condicional dos carrosseis */}
      {isLoading ? (
        // Se estiver carregando, mostra uma mensagem
        <p>Carregando as melhores ofertas...</p>
      ) : error ? (
        // Se houver um erro, mostra uma mensagem de erro
        <p className="error-message">{error}</p>
      ) : (
        // Se os dados estiverem prontos, renderiza os carrosseis
        <>
          <MainSections
            produtos={smartphone} 
            title="Encontre o celular ideal, com a melhor oferta!"
          />
          <MainSections
            produtos={amazon} 
            title="As melhores ofertas você encontra na Amazon!"
          />
          <MainSections
            produtos={notebook} 
            title="Notebook de qualidade, somente aqui na Preço Certo!"
          />
        </>
      )}

      <HistorySection />
      <Footer />
    </main>
  );
}

export default Main;