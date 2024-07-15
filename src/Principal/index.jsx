import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiUser3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Principal () {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProdutos(data))
    },[])
  
    return (
      <div className="w-full h-[220vh] bg-[#FAE6CA]">
        <div className="w-full h-[120px]  bg-[#EF6D7A] flex">
          <div className="pl-10 gap-5 flex items-center">
            <img className="w-[130px]" src="https://cdn-icons-png.flaticon.com/512/4647/4647492.png" alt="" />
            <p className="text-lg text-center font-PlaywriteCo"><strong>Bazar da , todo dia novas mercadorias com qualidade e preço baixo!</strong></p>
          </div>
          <div className="w-full">
            <div className=" w-[80%] flex justify-center items-center h-full">
              <div className="flex items-center justify-center bg-[#FFEB96] p-2 rounded-2xl h-[32%]">
                <input className="font-Poppins font-bold text-[15px] outline-none pl-5 w-full h-full bg-[#FFEB96] text-black placeholder-black"
                  type="text" placeholder="O que você está procurando?"
                />
                <div className="w-[135px] border-none bg-[#FFEB96] mr-[-8] flex justify-center items-center h-full ">
                  <button className="">
                    <IoSearchSharp size={20} color="black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center mr-4">
            <RiUser3Fill size={30} color="#FFEB96" /><Link to={"/login"}><button className="font-bold font-Poppins flex items-center justify-center w-[90px] h-[30px] rounded-xl bg-[#FFEB96]"
            >Entrar</button></Link>
            <PiShoppingCartSimpleLight size={30} color="#FFEB96" /><button className="font-bold font-Poppins flex items-center justify-center w-[90px] h-[30px] rounded-xl bg-[#FFEB96]"
            >Carrinho</button>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap w-full h-screen justify-center gap-5 font-Roboto  text-center">
            {produtos.map((produto) => 
              <div className="text-black border-[2px] w-[400px] h-[350px] shadow-xl shadow-[#EF6D7A]/100 bg-white rounded-xl border-black overflow-hidden flex items-center justify-around flex-col"
              key={produto.id}>
                <p className="ml-1"><strong>{produto.title}</strong></p>
                <img className="h-[130px]" src={produto.image} alt={produto.title} />
                <p><strong>{produto.price} R$</strong></p>
                <button className= "flex text-center items-center justify-center font-bold font-Poppins w-[120px] h-[40px] rounded-xl bg-[#FFEB96]">Comprar</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}