import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { CardProdutos } from "../../CardProdutos";
import { Titulo } from "../../Titulo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.css";

const MainSections = ({ produtos = [], title }) => {
  const [ready, setReady] = useState(false);
  const [sliderKey, setSliderKey] = useState(0);

//   useEffect(() => {
//     if (produtos && produtos.length > 0) {
//       setSliderKey(prevKey => prevKey + 1);
//     }
//   }, [produtos]);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: produtos.length >= 5,
      slides: {
        perView: 4,
        spacing: 20,
      },
      created() {
        setReady(true);
      },
      destroyed() {
        setReady(false);
      },
      centered: true, // Centraliza os slides
    },
    // 
    // [sliderKey] 
  );

  const safe = (fn) => () => {
    try {
      const inst = instanceRef.current;
      if (!inst || !inst.track || !inst.track.details) return;
      if (inst.track.details.slides?.length < 1) return;
      fn(inst);
    } catch { /* evita erro em runtime */ }
  };


  return (
    <section className="amazonSection">
      <h2 className="amazonSectionTxt">
        <Titulo cor="#0000" tamanhoFonte="24px">
          {title}
        </Titulo>
      </h2>

      {/* Envolve o carousel-container com o novo wrapper */}
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <div key={sliderKey} ref={sliderRef} className="keen-slider produtosAmazon">
            {produtos.map((produto) => (
              <div key={produto.produto_id} className="keen-slider__slide">
                <CardProdutos {...produto} />
              </div>
            ))}
          </div>

          <button
            className="carousel-btn left"
            onClick={safe((s) => s.prev())}
            aria-label="Anterior"
            disabled={!ready}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="carousel-btn right"
            onClick={safe((s) => s.next())}
            aria-label="Próximo"
            disabled={!ready}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainSections;