import { useState } from "react"

export default function Cadastro () {
    const [nome,setNome] = useState()
    const [sobrenome,setSobrenome] = useState()
    const [user,setUser] = useState()
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const [reSenha,setReSenha] = useState()

    function Senha () {
        if (senha !== reSenha) {
            alert("As senhas não correspondem! Tente novamente.")
        }
    }

    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-[#FAE6CA]">
            <div className="w-[30vw] h-[100vh] flex flex-col justify-center items-center rounded-full bg-[#EF6D7A]">
                <div className="w-[20vw] h-[vh] flex flex-col items-center justify-between text-center gap-[10px]">
                    <img className="w-[100px]" src="https://cdn-icons-png.flaticon.com/512/4647/4647492.png" alt="" />
                    <h1 className="text-[17px] italic font-Roboto"><strong>Olá, seja bem-vindo à nossa loja, é um prazer tê-lo como cliente! Para realizar seu cadastro e ficar por dentro de todas as novidades, basta preencher todos os campos abaixo:</strong></h1>
                </div>
                <div className="flex flex-col items-center gap-[10px] mt-5">
                    <p className="text-[16px] font-Roboto"><strong>Nome</strong></p>
                    <input onChange={(e) => setNome(e.target.value)}
                    className="w-[250px] h-[30px] rounded-xl pl-2 placeholder-black"
                    type="text" placeholder="Insira seu nome" />
                    <p className="text-[16px] font-Roboto"><strong>Sobrenome</strong></p>
                    <input onChange={(e) => setSobrenome(e.target.value)} 
                    className="w-[250px] h-[30px] rounded-xl pl-2 placeholder-black"
                    type="text" placeholder="Insira seu sobrenome" />
                    <p className="text-[16px] font-Roboto"><strong>Nome de Usuário</strong></p>
                    <input onChange={(e) => setUser(e.target.value)}
                    className="w-[250px] h-[30px] rounded-xl pl-2 placeholder-black"
                    type="text" placeholder="Insira seu nome de usuário" />
                    <p className="text-[16px] font-Roboto"><strong>E-mail</strong></p>
                    <input onChange={(e) => setEmail(e.target.value)}
                    className="w-[250px] h-[30px] rounded-xl pl-2 placeholder-black"
                    type="text" placeholder="Insira seu e-mail" />
                    <p className="text-[16px] font-Roboto"><strong>Senha</strong></p>
                    <input onChange={(e) => setSenha(e.target.value)} 
                    className="w-[250px] h-[30px] rounded-xl pl-2 placeholder-black"
                    type="password" placeholder="Insira sua senha" />
                    <p className="text-[16px] font-Roboto"><strong>Confirme sua Senha</strong></p>
                    <input onChange={(e) => setReSenha(e.target.value)} 
                    className="w-[250px] h-[30px] rounded-xl pl-2 placeholder-black"
                    type="password" placeholder="Repita sua senha" />
                </div>
                <div className="mt-10">
                    <button onClick={Senha} 
                    className="font-Roboto bg-[#FAE6CA] flex justify-center items-center text-[15px] text-black font-bold w-[100px] h-[50px] rounded-xl"
                    >Cadastrar</button>
                </div>
            </div>
        </div>
    )
}