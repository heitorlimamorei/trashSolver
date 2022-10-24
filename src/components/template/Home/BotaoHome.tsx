

export default function BotaoHome(props) {
    return <button className= 'dark:bg-green-400 bg-green-800 w-3/12 h-2/6 rounded-2xl p-6 mt-8'>
                <div className='w-full h-2/3 text-white dark:text-black'>{props.icon}</div>
                <div className='text-white dark:text-black'>{props.Nome}</div>
        </button>
}