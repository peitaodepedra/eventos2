import React from "react";
import './login.css';

function Login() {
    return (
        <div className="login-content d-flex align-itens-center">
            <main className="form-signin m-auto">
                <form>
                    <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
                    <h1 className="h3 mb-3 fw-normal text-center text-white">Login</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label for="floatingPassword">Senha</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-login" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </div>
    );
}

export default Login;