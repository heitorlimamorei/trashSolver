import Link from "next/link";

interface MenuItemProps {
  url?: string;
  titulo: string;
  icone: any;
  onClick?: (event: any) => void;
  className?: string;
}
export default function MenuItem(props: MenuItemProps) {
  const renderMenuItem = () => {
    return (
      <a className={`flex flex-col justify-center items-center h-20 w-full  ${props.className}`}>
        {props.icone}
        <span
          className={`
            text-xs font-light 
            `}
        >
          {props.titulo}
        </span>
      </a>
    );
  };
  return (
    <li onClick={props.onClick} className={`hover:bg-green-900 dark:hover:bg-green-400  cursor-pointer`}>
      {props.url ? (
        <Link href={props.url}>{renderMenuItem()}</Link>
      ) : (
        renderMenuItem()
      )}
    </li>
  );
}
