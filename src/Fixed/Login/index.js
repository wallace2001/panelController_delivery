import React, { useState } from 'react'
import { Login } from '../../Components/Login';
import db from '../../../pages/api/config.json';
import { useRouter } from 'next/router';
import axios from 'axios';

export const LoginBox = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState();
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();
    const [me, setMe] = useState();

    const router = useRouter();
    const img = db.bgMenu;

    const isAuthenticated = (token) => {
        const totalToken = 'Bearer '.concat(token);
        axios.get(`http://localhost:3001/me`, { headers: { Authorization: totalToken } })
        .then(res => {
            setMe(res);
            res.data.ok ? router.push(`/panel/`) : '';
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/signin`, {
            email: name,
            password: pass
        })
        .then(res => {
            setMessage(res);
            setErrorEmail(res ? res.data.message === 'E-mail não encontrado!' ? 1 : 0 : 0);
            setErrorPassword(res ? res.data.message === 'Senha invalida!' ? 1 : 0 : 0);
            isAuthenticated(res.data.token);
        }
        )
    }
    

    return (
        <Login>
            <Login.Bg backgroundImg={img}>
                <Login.Content>
                    <Login.Box onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        {/* {message ? message.data.message ? <h4>E-mail ou senha incorretos!</h4> :'' :''} */}
                        <Login.Input err={errorEmail}>
                            <label>E-mail</label>
                            <input err={errorEmail} type="text" onChange={(e) => {setName(e.target.value); setErrorEmail(0)}} />
                            {message ? message.data.message === 'E-mail não encontrado!' ? <h6>{message.data.message}</h6> : '' : ''}
                        </Login.Input>

                        <Login.Input err={errorPassword}>
                            <label>Senha</label>
                            <input err={errorPassword} type="password" onChange={(e) => {setPass(e.target.value); setErrorPassword(0)}} />
                            {message ? message.data.message === 'Senha invalida!' ? <h6>{message.data.message}</h6> : '' : ''}
                        </Login.Input>

                        <Login.Button><button type="submit" >Entrar</button></Login.Button>
                        
                    </Login.Box>
                </Login.Content>
            </Login.Bg>
        </Login>
    )
}
