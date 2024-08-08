import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"
import ForgotPass from "../templates/Login/ForgotPass"
import Login from "../templates/Login/Login"
import Mensagem from "../templates/Mensagem/Mensagem"
import Produto from "../templates/Produto/Produto"
import ProdutoEditar from "../templates/Produto/ProdutoEditar"
import ProdutoNovo from "../templates/Produto/ProdutoNovo"
import ProdutosLista from "../templates/Produto/ProdutosLista"
import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        <Route path="/mensagem" element={<Mensagem />} />

        <Route path="/produto" element={<Produto />} />
        <Route path="/produtoslista" element={<ProdutosLista />} />
        <Route path="/produtonovo" element={<ProdutoNovo />} />
        <Route path="/produtoeditar" element={<ProdutoEditar />} />

        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar" element={<UsuarioEditar />} />

      </Routes>
    </div>
  )
}
export default AppRoutes