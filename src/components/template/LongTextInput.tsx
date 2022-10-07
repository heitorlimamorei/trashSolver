//legado do financeal-solver
interface LongTextInputProps {
    valor: any;
    setValor?: (v: any) => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
  }
  export default function LongTextInput(props: LongTextInputProps) {
    return (
      <textarea 
      disabled={props?.disabled} 
      placeholder={props?.placeholder} 
      onChange={(ev) => props.setValor(ev.target.value)} 
      className={`${props.className} 
      py-2 px-4 m-2 rounded-md bg-gray-100 focus:bg-white`}>
      </textarea>
    );
  }