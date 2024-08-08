import { Link } from "react-router-dom"

const Login = () => {

    return(
        <div>
            <h1>Login</h1>
            <Link to={'/home'}
                  className="btn btn-primary">
                Entrar
            </Link>
            <Link to={'/forgotpass'}>
                Esqueci minha senha
            </Link>
        </div>
    )
}

export default Login