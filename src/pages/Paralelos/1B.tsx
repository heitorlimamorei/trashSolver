import Layout from '../../components/template/Layout'


export default function Tabuleiro() {
    return (
        <Layout titulo='Jogo' subtitulo='Jogo'>
            <div className='dark:text-white flex flex-col md:flex-row'>
                <div className='flex flex-col w-[60%]'>
                     <h1 className=' text-[30px] font-bold'>Explicação:</h1>
                    <p className='mb-10'>Nesse jogo cada casa corresponde a uma instrução a ser seguida, existem 3 caminhos como representado no tabuleiro abaixo:</p>
                    <img src="../../../Tabuleiro.jpg" className="w-[98%] h-[80%]" alt="" />
                </div>

                <div className="w-full md:w-[14%] mx-2 dark:bg-gray-500 bg-gray-400 rounded-xl p-2 text-[12px]">
                    <h1 className="text-[20px] font-bold dark:bg-slate-600 bg-slate-300 rounded-xl p-2 shadow-xl">Computador</h1>
                    <p>
                    <span className="text-[20px] font-bold">1-</span> Você foi entregue em um ponto de coleta e foi reciclado com sucesso! Avance duas casas. <br/>
                    <span className="text-[20px] font-bold">2-</span> Você ficou obsoleto por muito tempo na casa de alguém que não sabia onde te depositar.<br/>
                    <span className="text-[20px] font-bold">3-</span> Você teve um descarte incorreto no lixo comum e infectou 25 pessoas com seus resíduos tóxicos, volte uma casa.<br/>
                    <span className="text-[20px] font-bold">4-</span> Você foi descartado em um ponto de organização de reciclagem! Avance 1 casa. <br/>
                    <span className="text-[20px] font-bold">5-</span> Você realizou uma campanha de coleta de lixo eletrônico com seus amigos! Avance 1 casa. <br/>
                    <span className="text-[20px] font-bold">6-</span> Seu descarte foi feito de modo incorreto e acabou gerando danos no meio ambiente. Volte 2 casas. <br/>
                    <span className="text-[20px] font-bold">7-</span> Opa, você foi jogado no meio de uma mata e, em sua composição, possui substâncias tóxicas, contaminando os lençóis freáticos! Volte 2 casas.<br/>
                    <span className="text-[20px] font-bold">8-</span> Isso aí! Seu computador foi reciclado e utilizado na produção de novos aparelhos eletrônicos.<br/>


                    </p>
                </div>

                <div className="mx-2 w-[14%] dark:bg-gray-500 bg-gray-400 rounded-xl p-2 text-[12px]">
                    <h1 className="text-[20px] font-bold dark:bg-slate-600 bg-slate-300 rounded-xl p-2 shadow-xl">Celular</h1>
                    <span className="text-[20px] font-bold">1-</span> Parabéns! Você realizou uma campanha na sua escola e ajudou o meio ambiente. Avance uma casa. <br/>
                    <span className="text-[20px] font-bold">2-</span> O celular foi descartado na floresta e matou animais, desequilibrando a cadeia alimentar. <br/>
                    <span className="text-[20px] font-bold">3-</span> Seu lixo foi descartado corretamente e ajudou o meio ambiente! Muito bem!<br/>
                    <span className="text-[20px] font-bold">4-</span> Ah não... seu celular foi descartado incorretamente e acabou atingindo o solo e contaminando os lençóis freáticos, volte 1 casa.<br/>
                    <span className="text-[20px] font-bold">5-</span> Seu aparelho foi entregue corretamente a um local de coleta de resíduos eletrônicos! Avance duas casas.<br/>
                    <span className="text-[20px] font-bold">6-</span> Você foi descartado incorretamente e foi parar no Rio Citarum e causou danos a população próxima. Volte três casas. <br/>
                    <span className="text-[20px] font-bold">7-</span> Seu celular foi levado ao descarte correto de sua faculdade! Avance 1 casa!<br/>
                    <span className="text-[20px] font-bold">8-</span> Você doou seu celular que ainda funciona para uma pessoa que esteva precisando.<br/>
                </div>

                <div className="mx-2 w-[14%] dark:bg-gray-500 bg-gray-400 rounded-xl p-2 text-[12px]">
                    <h1 className="text-[20px] font-bold dark:bg-slate-600 bg-slate-300 rounded-xl p-2 shadow-xl">Pilha</h1>
                    <span className="text-[20px] font-bold">1-</span> Você descartou corretamente o lixo e evitou a contaminação de 20 mil litros de água. Avance duas casas!<br/>
                    <span className="text-[20px] font-bold">2-</span> Você infectou uma pessoa com o mau descarte desse lixo. Volte uma casa<br/>
                    <span className="text-[20px] font-bold">3-</span> Oh não! Seu descarte em lixo comum fez solo e água serem contaminados. Volte uma casa.<br/>
                    <span className="text-[20px] font-bold">4-</span> Você descartou em coletas de lixo eletrônico e preservou diversas plantações! <br/>
                    <span className="text-[20px] font-bold">5-</span> Parabéns! Você devolveu a pilha ao fabricante e ela foi reutilizada. Avance duas casas. <br/>
                    <span className="text-[20px] font-bold">6-</span> Essa não! Você incendiou 1 tonelada de pilhas e afetou a respiração de toda a cidade. Reinicie o jogo!  <br/>
                    <span className="text-[20px] font-bold">7-</span> Sua pilha é alcalina e foi descartada em lixo comum. Bom trabalho! Avance uma casa. <br/>
                    <span className="text-[20px] font-bold">8-</span> Você desenvolveu um ponto de coleta de lixo eletrônico em seu condomínio. 
 <br/>
                </div>
            </div>
        </Layout>
    )
}