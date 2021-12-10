import { useState } from "react"

import TelaInicial from "./TelaInicial"
import TelaCard from "./TelaCard"
import TelaFinal from "./TelaFinal"





export default function App(){
    
    
    const[paginaAtual, setPaginaAtual] = useState('Inicial')
    
    return(
        <>

        {paginaAtual === 'Inicial' ? <TelaInicial  mudaPagina={setPaginaAtual}/> : paginaAtual === 'App'? <TelaCard/> : <TelaFinal /> }
        
        
        
        </>
    )
}