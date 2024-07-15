import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Principal () {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProdutos(data));
    }, []);

    return (
        <div className="w-full h-[220vh] bg-[#FAE6CA]">
          <NavBar/>
            <div className="mt-5">
                <div className="flex flex-wrap w-full h-screen justify-center gap-5 font-Roboto  text-center">
                    {produtos.map((produto) => 
                        <Link key={produto.id} to={`/produto/${produto.id}`}>
                            <div className="text-black border-[2px] w-[400px] h-[350px] shadow-xl shadow-[#EF6D7A]/100 bg-white rounded-xl border-black overflow-hidden flex items-center justify-around flex-col">
                                <p className="ml-1"><strong>{produto.title}</strong></p>
                                <img className="h-[130px]" src={produto.image} alt={produto.title} />
                                <p><strong>{produto.price} R$</strong></p>
                                <button className= "flex text-center items-center justify-center font-bold font-Poppins w-[120px] h-[40px] rounded-xl bg-[#FFEB96]">Comprar</button>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
