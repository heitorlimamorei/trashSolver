import type { NextApiRequest, NextApiResponse } from "next";
export default async function TrocaController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tiposMock =  ["Computador", "Motores eletricos", "Transistor", "Impressora", "Controle"]
  const imagesTable = [
    {id: '1', tipo: tiposMock[3], url: 'https://www.impressora.com.br/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/l/5/l5290.jpg'},
    {id: '2', tipo: tiposMock[0], url: 'https://images-americanas.b2w.io/produtos/2145002736/imagens/computador-smart-pc-smt81961-intel-i5-8gb-ssd-120gb/2145002744_1_large.jpg'},
    {id: '3', tipo: tiposMock[4], url: 'https://a-static.mlcdn.com.br/800x560/controle-para-xbox-360-sem-fio-microsoft/magazineluiza/088443800/676965fc6c3e3aa53f6a67a617a926c0.jpg'},
    {id: '4', tipo: tiposMock[1], url: 'https://images.tcdn.com.br/img/img_prod/557302/motor_eletrico_monofasico_hitachi_cf0048020_2203_1_20190403130542.jpg'},
    {id: '5', tipo: tiposMock[2], url: 'https://a-static.mlcdn.com.br/1500x1500/transistor-bipolar-2n2222a-to-92-40v-600ma-npn-imp/mamuteeletronica/88/6b477d276c00bbcecc24ed4f2a2e10d6.jpg'}
    
  ] 
  if (req.method === "GET") {
    res.status(200).json(imagesTable);
  }
}
