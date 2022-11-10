import MenuItem from "./MenuItem";
import {IconeAjustes, IconeCasa, IconeSino, IconeSair,ponto, usersGroupIcon } from '../icons/Icones'
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral(props){
    const { logout } = useAuth()
    return(
        <aside  className={`
        flex flex-col
        bg-green-800 text-gray-200
        dark:bg-green-600 dark:text-gray-700
        `}>
            <div className={`
            flex flex-col items-center justify-center 
            bg-gradient-to-l from-green-800 to-green-600
            dark:bg-gradient-to-r dark:from-green-800 dark:to-green-600
            md:h-20 md:w-20 h-15 w-15 

            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem titulo="Home" url="/" icone={IconeCasa} />
                <MenuItem titulo="Coletas" url="/pontoDeColetas" icone={ponto(6)} />
                <MenuItem titulo="Trocar" url="/trocas" icone={usersGroupIcon(6)} />
            </ul>
            <ul className={``}>
            <MenuItem titulo="Sair"  icone={IconeSair} onClick={logout} className={`
            text-red-600
            hover:bg-red-400 hover:text-white
            `}/>
            </ul>
        </aside>
    )
}