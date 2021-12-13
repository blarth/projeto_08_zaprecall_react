import Card from "./Card"
import IconeTopo from "./IconeTopo"
export default function TelaCard({mudaPagina}){
    return (
        <>
            < IconeTopo />
            < Card mudaPagina={mudaPagina}/>
        </>
    )
}


