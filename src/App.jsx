import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiUser3Fill } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";

function App() {
  return (
    <div className="w-full h-full bg-black">
      <div className="w-full h-[120px] bg-white flex">
        <div className="pl-10 gap-5 flex items-center">
          <img className="w-[180px]" src="https://images.vexels.com/media/users/3/291084/isolated/preview/06b9fe2146fcd1517e80e939f43c2fda-roupa-de-sapateado-de-dana-a-simples.png" alt="" />
          <p className="font-bold italic text-xl"><strong>Wharley's Shoes: aqui você encontra o seu par perfeito!</strong></p>
        </div>
        <div className="w-full">
          <div className=" w-[90%] flex justify-center items-center h-full">
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
      <div className="w-full h-[50vh] flex pl-20 mt-10 gap-10">
        <div className="w-[150px] h-[150px] bg-sky-600 rounded-2xl">

        </div>
        <div className="w-[150px] h-[150px] bg-red-800 rounded-2xl">
          
        </div>
        <div className="w-[150px] h-[150px] bg-fuchsia-300 rounded-2xl">
          
        </div>
        <div className="w-[150px] h-[150px] bg-lime-200 rounded-2xl">
          
        </div>
      </div>
    </div>
  );
}

export default App;
