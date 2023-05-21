import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section>
                    <Menu />
                    <div>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
        </>
    );
}