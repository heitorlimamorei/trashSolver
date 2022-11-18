import Layout from "../components/template/Layout";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase/config'
import { useState } from "react";
import ProfileInput from "../components/template/ProfileInput";
import FeedBackButton from "../components/template/FeedBack/FeedBackButton";
import useAuth from "../data/hook/useAuth";
import { useRouter } from "next/router";
export default function FeedBack(){
    const {usuario} = useAuth()
    const [comentario, setComentario] = useState<string>(null)
    const [classificacao, setClassificacao] = useState<number>(1)
    const router = useRouter()
    async function EnviarComentario(){
        const collenctionRef = collection(db, "comentarios")
        await addDoc(collenctionRef, {
            text: comentario,
            classificacao: classificacao,
            userName: usuario?.nome,
            userImg: usuario.imagemUrl ?? '',
            verificado: false,
            email: usuario.email
        })
        window.alert('Obrigado por dar sua opinião, comentario enviado!')
        router.push('/CommentsFeed')
    }
    return (
        <div>
            <Layout feedBack titulo="Dê sua opinião" subtitulo="Deixe seu comentário e vejo os outros">
                <div className="flex flex-col  w-full h-full  items-center justify-center">
                    <div className="flex flex-col  mt-10 h-full items-center justify-center">
                        <ProfileInput 
                        valor={comentario ?? ''}
                        setValor={setComentario}
                        placeholder="Digite seu comentario aqui"
                        tipo="text"
                        className="w-full"
                        />
                        <select value={classificacao ?? ''} onChange={(ev) => setClassificacao(Number(ev.target.value))} className=" py-2 px-4 w-full rounded-md mt-2  h-15 bg-gray-100">
                            <option value={1}>1 Estrela</option>
                            <option value={2}>2 Estrelas</option>
                            <option value={3}>3 Estrelas</option>
                            <option value={4}>4 Estrelas</option>
                            <option value={5}>5 Estrelas</option>
                        </select>
                       <FeedBackButton text="Enviar comentario" onClick={EnviarComentario} />
                    </div>
                </div>
            </Layout>
        </div>
    )
}