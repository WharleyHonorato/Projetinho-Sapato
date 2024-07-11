import { IoSearchSharp } from "react-icons/io5";
import { GiBallerinaShoes } from "react-icons/gi";

function App() {
  return (
    <div className="w-full h-full bg-black">
      <div className="w-full h-[60%] bg-fuchsia-300 flex">
        <div className="pl-10 gap-5 flex items-center">
          <GiBallerinaShoes size={90} color="black" />
          <p className="italic"><strong>Kafka Shoes, aqui você encontra seu sapatinho de cristal!</strong></p>
        </div>
        <div className="w-full">
          <div className=" w-[95%] flex justify-center items-center h-full">
            <div className="flex items-center justify-center bg-white p-1 rounded-xl h-[40%]">
              <input className="pl-2 w-full h-full"
                type="text" placeholder="O que você está procurando?"
              />
              <div className="  w-[100px] border-none bg-white flex justify-center items-center h-full ">
                <button className="">
                  <IoSearchSharp size={20} color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[503px] flex pl-20 mt-10 gap-10">
        <div className="w-[150px] h-[150px] bg-white">
          
        </div>
        <div className="w-[150px] h-[150px] bg-white">
          
        </div>
        <div className="w-[150px] h-[150px] bg-white">
          
        </div>
        <div className="w-[150px] h-[150px] bg-white">
          
        </div>
      </div>
    </div>
  );
}

export default App;
