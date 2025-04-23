import iconStar from "../assets/icon-star.svg"
import { InputButton } from "./InputButton";

export function CardInicial({ nota, setNota, setSubmited }) {
    function handleTrocarNota(nota){
        setNota(nota);
      }

    function handleSubmit(){
        if(nota !== 0){
          setSubmited(true)
          return
        }
    
        alert("Por favor, selecione um botão de avaliação!")
    }  

    return(
      <div className="max-w-103 bg-gradient-dark p-6 rounded-2xl text-white font-overpass">
      <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
        <img src={iconStar} alt="icon star" />
      </div>

      <h1 className="text-2xl font-bold mb-2.5">Como foi a sua experiência conosco?</h1>

      <p className="text-sm text-light-grey mb-6">Por favor, informe-nos como foi o nosso atendimento em sua solicitação de suporte. Todo feedback é importante para nos ajudar a melhorar nossos serviços!</p>

      <div className="flex justify-between mb-6">
        <InputButton valor={1} handleTrocarNota={handleTrocarNota}/>
        <InputButton valor={2} handleTrocarNota={handleTrocarNota}/>
        <InputButton valor={3} handleTrocarNota={handleTrocarNota}/>
        <InputButton valor={4} handleTrocarNota={handleTrocarNota}/>
        <InputButton valor={5} handleTrocarNota={handleTrocarNota}/>
      </div>

      <button onClick={handleSubmit} className="bg-orange w-full py-3 rounded-3xl uppercase tracking-1 font-bold hover:bg-white hover:text-orange cursor-pointer">Enviar</button>

    </div>
    )
}