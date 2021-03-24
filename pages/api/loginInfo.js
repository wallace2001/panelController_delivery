import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

export const LoginInfo = createContext({});

export const LoginProvider = ({ children, ...rest }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState();
    const [errorEmail, setErrorEmail] = useState(0);
    const [errorPassword, setErrorPassword] = useState(0);
    const [infoUser, setInfoUser] = useState();
    const [me, setMe] = useState();

    const router = useRouter();

    const isAuthenticated = (token) => {
        const totalToken = 'Bearer '.concat(token);
        api.get(`/me`,  { headers: { Authorization: totalToken } })
        .then(res => {
            setMe(res);
            res.data.ok ? setName(res.data.user) :  '';
        });
    }
    // router.push(`/panel/`)

    const loginFunction = (name, password) => {
        api.post('/signin', {
            email: name,
            password: password
        })
        .then(res => {
            if(!res.data.error){
                setEmail(name);
                setPass(password);
                setMessage(res);
                isAuthenticated(res.data.token);
            }else{
                setErrorEmail(res.data.error === 'E-mail não encontrado!' ? 1 : 0);
                setErrorPassword(res.data.error === 'Senha invalida!' ? 1 : 0);
            }
        }
        );
    }

    useEffect(() => {
        Cookie.set('email', email);
        Cookie.set('password', pass);
        Cookie.set('name', name);
    }, [name, pass, email])
    
    return(
        <LoginInfo.Provider value={{
            name, 
            pass, 
            loginFunction,
            message,
            errorEmail,
            errorPassword,
            me,
            setMessage,
            setErrorEmail,
            setErrorPassword
            }}>
            {children}
        </LoginInfo.Provider>
    );
} 