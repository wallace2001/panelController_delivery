import React, { useState } from 'react'
import { Login } from '../../Components/Login';
import db from '../../../pages/api/config.json';
import { useRouter } from 'next/router';
import api from '../../../db';

export const LoginBox = (props) => {
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
        api.get('/me', { headers: { Authorization: totalToken } })
        .then(res => {
            if(!res.data.error){
                setMe(res);
                localStorage.setItem('oauth_token', token);
                localStorage.setItem('logado', true);
                router.push('/panel');
                res.data.ok ? setName(res.data.user) :  '';
                localStorage.setItem('name', res.data.user);
            }else{
                localStorage.setItem('logado', false);
            }

        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/signin', {
            email: name,
            password: pass
        })
        .then(res => {
            setMessage(res);
            if(!res.data.error){
                isAuthenticated(res.data.token);
            }else{
                setErrorEmail(res ? res.data.error === 'E-mail não encontrado!' ? 1 : 0 : 0);
                setErrorPassword(res ? res.data.error === 'Senha invalida!' ? 1 : 0 : 0);
            }
            
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
                            {message ? message.data.error === 'E-mail não encontrado!' ? <h6>{message.data.error}</h6> : '' : ''}
                        </Login.Input>

                        <Login.Input err={errorPassword}>
                            <label>Senha</label>
                            <input err={errorPassword} type="password" onChange={(e) => {setPass(e.target.value); setErrorPassword(0)}} />
                            {message ? message.data.error === 'Senha invalida!' ? <h6>{message.data.error}</h6> : '' : ''}
                        </Login.Input>

                        <Login.Button><button type="submit" >Entrar</button></Login.Button>
                        
                    </Login.Box>
                </Login.Content>
            </Login.Bg>
        </Login>
    )
}



