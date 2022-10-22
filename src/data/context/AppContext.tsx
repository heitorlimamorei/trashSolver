import { createContext, useState, useEffect } from "react";
import RealizarTrocaModel from "../../model/RealizarTroca";
import PontoDeColetaCompostaModel from "../../model/PontoDeColeta/Composta";
//type Tema = "dark" | ""
interface AppContextProps {
  tema: string;
  alternarTema: () => void;
  realizarTroca: RealizarTrocaModel;
  setRealizarTroca: (troca: any) => void;
  pontoDeColeta: PontoDeColetaCompostaModel;
  setPontoDeColeta: (pontoDeColeta: any) => void;
}
type AppContextProvider = {
  children: any;
};

const AppContext = createContext<AppContextProps>({
  tema: "",
  alternarTema: null,
  realizarTroca: RealizarTrocaModel.realizarTrocaEmBraco(),
  setRealizarTroca: null,
  pontoDeColeta: PontoDeColetaCompostaModel.emBraco(),
  setPontoDeColeta: null,
});

export function AppContextProvider(props: AppContextProvider) {
  const [tema, setTema] = useState("");
  const [realizarTroca, setRealizarTroca] = useState(
    RealizarTrocaModel.realizarTrocaEmBraco()
  );
  const [pontoDeColeta, setPontoDeColeta] = useState(
    PontoDeColetaCompostaModel.emBraco()
  );
  function alternarTema() {
    const novoTema = tema === "dark" ? "" : "dark";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  }
  useEffect(() => {
    const tema = localStorage.getItem("tema");
    setTema(tema);
  }, []);
  return (
    <AppContext.Provider
      value={{
        tema: tema,
        alternarTema,
        realizarTroca,
        setRealizarTroca,
        pontoDeColeta,
        setPontoDeColeta,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
