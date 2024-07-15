import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiUser3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="w-full h-[120px] bg-[#EF6D7A] flex">
        <div className="pl-10 gap-5 flex items-center">
          <img
            className="w-[130px]"
            src="https://cdn-icons-png.flaticon.com/512/4647/4647492.png"
            alt=""
          />
          <p className="text-lg text-center font-PlaywriteCo">
            <strong>
              Bazar da Rochelle , todo dia novas mercadorias com qualidade e
              preço baixo!
            </strong>
          </p>
        </div>
        <div className="w-full">
          <div className=" w-[85%] flex justify-center items-center h-full">
            <div className="flex items-center justify-center bg-[#FFEB96] p-2 rounded-2xl h-[32%]">
              <input
                className="font-Poppins font-bold text-[15px] outline-none pl-5 w-full h-full bg-[#FFEB96] text-black placeholder-black"
                type="text"
                placeholder="O que você está procurando?"
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
          <RiUser3Fill size={30} color="#FFEB96" />
          <Link to={"/login"}>
            <button className="font-bold font-Poppins flex items-center justify-center w-[90px] h-[30px] rounded-xl bg-[#FFEB96]">
              Entrar
            </button>
          </Link>
          <PiShoppingCartSimpleLight size={30} color="#FFEB96" />
          <button className="font-bold font-Poppins flex items-center justify-center w-[90px] h-[30px] rounded-xl bg-[#FFEB96]">
            Carrinho
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
