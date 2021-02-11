import React from 'react'
import { Login } from '../../Components/Login';
import db from '../../../pages/api/config.json';

export const LoginBox = () => {

    const img = db.bgMenu;
    return (
        <Login>
            <Login.Bg backgroundImg={img}>
                <Login.Content>
                    <Login.Box>
                        <h2>Login</h2>
                        <Login.Input>
                            <label>Nome</label>
                            <input type="text" />
                        </Login.Input>

                        <Login.Input>
                            <label>Senha</label>
                            <input type="password" />
                        </Login.Input>

                        <Login.Button><button>Entrar</button></Login.Button>
                        
                    </Login.Box>
                </Login.Content>
            </Login.Bg>
        </Login>
    )
}
