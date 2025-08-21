import { CardProdutos } from "../../CardProdutos";
import { Titulo } from "../../Titulo";
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "./style.css";

const NbSection = ({ produtos = [] }) => {
    // return(
    //     <section className="nbSection">
    //         <h2 className="nbSectionTxt"><Titulo cor="#0000"
    //         tamanhoFonte="24px">Notebook de qualidade, somente aqui na Preço Certo!</Titulo></h2>
    //         <div className="produtosNb">
    //             {produtos.slice(0,4).map((produtos, id) => (
    //                 <CardProdutos key={id} {...produtos} />
    //             ))}
    //         </div>
    //     </section>
    // )
    const [ready, setReady] = useState(false)
        
          const [sliderRef, instanceRef] = useKeenSlider({
            loop: true,
            
            slides: {
              perView: 5,
              spacing: 0,
            },
            created() { setReady(true) },
            destroyed() { setReady(false) },
          })
        
          const safe = (fn) => () => {
            try {
              const inst = instanceRef.current
              // guarda forte: só navega se existir track/detalhes e pelo menos 1 slide
              if (!inst || !inst.track || !inst.track.details) return
              if (inst.track.details.slides?.length < 1) return
              fn(inst)
            } catch { /* evita erro em runtime */ }
          }
        
          return (
          <section className="nbSection">
            <h2 className="nbSectionTxt">
              <Titulo cor="#0000" tamanhoFonte="24px">
                Notebook de qualidade, somente aqui na Preço Certo!
              </Titulo>
            </h2>
        
            <div className="carousel-container">
              <div ref={sliderRef} className="keen-slider produtosNb">
                {produtos.slice(0, 8).map((produto) => (
                  <div key={produto.produto_id} className="keen-slider__slide">
                    <CardProdutos {...produto} />
                  </div>
                ))}
              </div>
        
              {/* Botões ficam posicionados em cima, mas continuam dentro do mesmo container */}
              {/* <button
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
              </button> */}
            </div>
          </section>
          )
              }

export default NbSection