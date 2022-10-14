interface FeedBackButtonProps {
    text: string;
    onClick: (event: any) => void;
    className?: string
    children?: any;
}
export default function FeedBackButton(props:FeedBackButtonProps){
    return <button 
    onClick={props.onClick} 
    className={`
    bg-green-400 py-2 px-4 w-full rounded-md mt-2  hover:bg-green-500 
    ${props.className}
    `}
    >
        {props.text}
        {props?.children}
    </button>
}