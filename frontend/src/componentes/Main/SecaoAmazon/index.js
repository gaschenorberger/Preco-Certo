import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { CardProdutos } from "../../CardProdutos"
import { Titulo } from "../../Titulo"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./style.css"

const AmazonSection = ({ produtos = [] }) => {
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
  <section className="amazonSection">
    <h2 className="amazonSectionTxt">
      <Titulo cor="#0000" tamanhoFonte="24px">
        As melhores ofertas você encontra na Amazon!
      </Titulo>
    </h2>

    <div className="carousel-container">
      <div ref={sliderRef} className="keen-slider produtosAmazon">
        {produtos.slice(0, 4).map((produto) => (
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
  </section>


  )
}

export default AmazonSection
