import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
  },[])

  return (
    <div className="w-full h-full bg-white">
      <div className="w-full h-[130px] bg-white flex">
        <div className="pl-10 gap-5 flex items-center">
          <img className="w-[200px]" src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-vetor-de-icone-de-loja-de-loja_917138-2077.jpg" alt="" />
          <p className="italic text-lg"><strong>Wharley's Clothing</strong></p>
        </div>
        <div className="w-full">
          <div className=" w-[110%] flex justify-center items-center h-full">
            <div className="flex items-center justify-center bg-black p-2 rounded-2xl h-[32%]">
              <input className=" outline-none pl-5 w-full h-full bg-black text-white"
                type="text" placeholder="O que você está procurando?"
              />
              <div className="  w-[100px] border-none bg-black flex justify-center items-center h-full ">
                <button className="">
                  <IoSearchSharp size={20} color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center mr-4">
          <IoIosHeartEmpty size={35}/><p>Lista de Desejos</p>
          <RiUser3Fill size={35} /> <p>Entrar</p>
          <PiShoppingCartSimpleLight size={35} /><p>Carrinho</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap w-full h-screen justify-center gap-5">
          {produtos.map((produto) => 
            <div className="text-black w-[400px] h-[400px] bg-white p-2 border-4 rounded-2xl border-black overflow-hidden flex items-center justify-center flex-col"
            key={produto.id}>
              <p className="">{produto.title}</p>
              <img className="h-[80px]" src={produto.image} alt={produto.title} />
              <p>{produto.price}</p>
              <button className="">Comprar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
