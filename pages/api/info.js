import { FaHamburger, FaCandyCane } from 'react-icons/fa';
import { BiMoney, BiPhone } from 'react-icons/bi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { AiOutlineStar, AiOutlineTeam } from 'react-icons/ai';

import { Hamburguer } from '../../src/Fixed/Hamburguer';
import { About } from '../../src/Fixed/About';
import { Contact } from '../../src/Fixed/Contact';
import { Dessert } from '../../src/Fixed/Dessert';
import { Evaluation } from '../../src/Fixed/Evaluation';
import { Promo } from '../../src/Fixed/Promo';

export const SidebarData = [
    {
        title: 'Hamburguer',
        path: '/hamburguer',
        bottom: true,
        icon: <FaHamburger />,
        iconU: <RiArrowUpSLine size={30} />,
        iconD: <RiArrowDownSLine size={30}/>,
        component: <Hamburguer />,
        current: false,
    },
    
    {
        title: 'Sobremesa',
        path: '/sobremesa',
        bottom: true,
        icon: <FaCandyCane />,
        iconU: <RiArrowUpSLine size={30} />,
        iconD: <RiArrowDownSLine size={30}/>,
        component: <Dessert />,
        current: false,
    },

    {
        title: 'Promoção',
        path: '/promocao',
        bottom: true,
        icon: <BiMoney />,
        iconU: <RiArrowUpSLine size={30} />,
        iconD: <RiArrowDownSLine size={30}/>,
        component: <Promo />,
        current: false,
    },

    {
        title: 'Avaliação',
        path: '/avaliacao',
        bottom: true,
        icon: <AiOutlineStar />,
        iconU: <RiArrowUpSLine size={30} />,
        iconD: <RiArrowDownSLine size={30}/>,
        component: <Evaluation />,
        current: true,
    },

    {
        title: "Contato",
        path: '/contato',
        bottom: true,
        icon: <BiPhone />,
        iconU: <RiArrowUpSLine size={30} />,
        iconD: <RiArrowDownSLine size={30}/>,
        component: <Contact />,
        current: false,
    },

    {
        title: 'Sobre',
        path: '/sobre',
        bottom: false,
        icon: <AiOutlineTeam />,
        iconU: <RiArrowUpSLine size={30} />,
        iconD: <RiArrowDownSLine size={30}/>,
        component: <About />,
        current: false,
    },

];
