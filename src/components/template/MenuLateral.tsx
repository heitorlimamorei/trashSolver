import MenuItem from "./MenuItem";
import {IconeAjustes, IconeCasa, IconeSino, IconeSair} from '../icons/Icones'
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
            bg-gradient-to-r from-green-800 to-green-600
            h-20 w-20 

            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem titulo="Home" url="/" icone={IconeCasa} />
                <MenuItem titulo="Ajustes" url="/ajustes" icone={IconeAjustes} />
                <MenuItem titulo="Notificações" url="/notificacoes" icone={IconeSino} />
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