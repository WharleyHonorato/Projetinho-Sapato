import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./Principal";
import Login from "./Login";
import Cadastro from "./Cadastro";
import ProdutoDetalhado from "./ProdutoDetalhado";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/login/cadastro" element={<Cadastro/>}></Route>
                <Route path="/produto/:id" element={<ProdutoDetalhado/>}></Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default App;
