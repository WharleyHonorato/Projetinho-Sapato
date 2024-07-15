import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const ProdutoDetalhado = () => {
    const { id } = useParams(); 

    const [produto, setProduto] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduto(data))
    }, [id])

    if (!produto) {
        return <div>Carregando...</div>
    }

    return (
        <>
        <NavBar/>
        <div className="w-full h-full bg-[#FAE6CA] flex flex-col">
            <div className="w-full h-[671px] flex justify-center items-center">
                <div className="font-Roboto text-black border-[3px] w-[850px] h-[75vh] shadow-xl shadow-[#EF6D7A]/100 bg-white rounded-xl border-black overflow-hidden flex items-center justify-around flex-col">
                    <p className="text-xl"><strong>{produto.title}</strong></p>
                    <img className="w-[200px]" src={produto.image} alt={produto.title} />
                    <p  className="text-xl"><strong>{produto.price} R$</strong></p>
                    <p className="text-center italic"><strong>{produto.description}</strong></p>
                </div>    
            </div>
        </div>
        </>
    )
}

export default ProdutoDetalhado;
