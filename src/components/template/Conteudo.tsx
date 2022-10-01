interface ConteudoProps {
    children?: any;
}

export default function Template(props:ConteudoProps){
    return (
        <div className={`
        flex flex-col mt7 w-full h-full overflow-y-auto
        `}>
            {props.children}
        </div>
    )
}