/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/template/Layout";

export default function Riscos() {
    return(
        <div className=" text">
            <Layout titulo='Metais Pesados' subtitulo='Gabriel Saliba, Kenzo Higashi, laura Lobato, Rafael nassau e Renata Passos' className='dark:text-white'>
                <div className="mt-20 flex flex-col md:flex-row">
                    <div className="flex flex-col mr-2 bg-gray-500 p-4 rounded-2xl">
                        <h1 className="text-[40px] font-bold shadow-2xl rounded-xl bg-slate-300 dark:bg-slate-700">O QUE SÃO METAIS PESADOS?</h1>
                        <p className="text-[20px]">
                            Apesar de não haver consenso sobre a definição deste termo, pode-se dizer que “metais pesados” são um grupo de elementos químicos com relativa alta densidade e tóxicos em baixas doses. 
                            <br/>
                            <br/>
                            -LAQIA
                            Laboratório de Análises Químicas, Industriais e Ambientais

                        </p>
                       
                    </div> 
                    <img className="md:w-[25%] w-full mt-15 rounded-xl mr-8" src='../../../m.jpg' alt="Imagem" />
                </div>

                <div className="mt-20 flex flex-col md:flex-row">
                    <div className="flex flex-col mr-2 bg-gray-500 p-4 rounded-2xl">
                        <h1 className="text-[40px] font-bold shadow-2xl rounded-xl bg-slate-300 dark:bg-slate-700">MERCÚRIO</h1>
                        <p className="text-[20px]">
                            Termômetros, Lâmpadas.
                            <br/>
                            <br/>
                            Tremores, insônia, perda de memória, dores de cabeça, fraqueza muscular e, em casos extremos, morte.
                            <br/>

                            Bebês não-nascidos cujas mães têm altos níveis de mercúrio no sangue podem nascer com danos cerebrais e problemas de audição e visão.
                        </p>
                    </div>
                    <img className="md:w-[25%] w-full mt-15 rounded-xl mr-8" src='../../../MetalPesado.jpg' alt="Imagem" />
                </div>

                <div className="mt-20 flex flex-col md:flex-row">
                    <div className="flex flex-col mr-2 bg-gray-500 p-4 rounded-2xl">
                        <h1 className="text-[40px] font-bold shadow-2xl rounded-xl bg-slate-300 dark:bg-slate-700">CHUMBO</h1>
                        <p className="text-[20px]">
                        O Chumbo (Pb) e Estanho (Sn) são utilizados em soldas elétricas.<br/>

                        Irritabilidade, dores de cabeça, tremor muscular, alucinações, perda da memória e da capacidade de concentração e muitos outros.

                        </p>
                        <img src="../../../TabelaChumbo.png " className=' rounded-3xl mt-20 md:w-2/6 w-full' alt="" />
                    </div>
                    <img className="md:w-[25%] w-full mt-15 rounded-xl mr-8" src='../../../Cumbo.jpg' alt="Imagem" />

                </div>

                <div className="mt-20 flex flex-col md:flex-row">
                    <div className="flex flex-col mr-2 bg-gray-500 p-4 rounded-2xl">
                        <h1 className="text-[40px] font-bold shadow-2xl rounded-xl bg-slate-300 dark:bg-slate-700">CÁDMIO</h1>
                        <p className="text-[20px] w-full">
                        As baterias de níquel/cádmio ou de cádmio/oxido de níquel são muito utilizadas em aparelhos sem fio como celulares, barbeadores, câmeras de vídeo, flashes, aparelhos eletrônicos portáteis, ferramentas, entre outros.
                        <br/><br/>
                        Alterações no sistema nervoso central e no sistema respiratório. Compromete ossos e rins. Ocasiona edema pulmonar, câncer pulmonar e irritação no trato respiratório. Afeta o sistema nervoso e os rins. Provoca perda de olfato, formação de um anel amarelo no colo dos dentes, redução na produção de glóbulos vermelhos e remoção de cálcio dos ossos.

                        </p>
                        <img src="" alt="" />
                    </div>
                    <img className="md:w-[25%] w-full mt-15 rounded-xl mr-8" src='../../../Cadmium-crystal_bar.jpg' alt="Imagem" />
                </div>
            </Layout>
        </div>
    )
}