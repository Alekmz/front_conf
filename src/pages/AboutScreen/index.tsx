import { Nav } from "../../components/nav"
import { Footer } from "../../components/footer"
import logo from "../../assets/LOGO.png"

export const AboutEvent = () => {
    return (
        <div className="h-screen overflow-y-auto font-montserrat ">
            <div className="flex h-12 justify-end lg:w-[900px]">
                <div className="flex items-center">
                    <Nav /> {/* Componente nav */}
                </div>
            </div>
            <div className="bg-white">
                <div className="flex justify-center">
                    <img src={logo} alt="" className="w-60 sm:w-96 lg:w-1/2" />
                </div>
                <div className=" text-sm text-justify pl-4 pr-4 pb-4">
                    <p>No ano de 2023, ano LEOístico 22/23, Fraiburgo/SC será sede de um evento distrital do LEO, a XXIV Conferência do Distrito LEO LD-8. Mas o que seria uma Conferência?
                        <br></br><br></br>
                        Esse evento distrital acontece todos os anos, em clubes sede diferentes, que por coincidência, são escolhidos durante o evento, sendo, resumida em apenas uma frase, a Conferência Distrital é o fim de um AL (ano LEOístico) e início de outro.
                        <br></br><br></br>
                        O evento, como um todo, acontece em dois dias, sendo no sábado ainda o AL 22/23, tendo sua última RCD (reunião do conselho distrital) pela manhã, as plenárias no horário da tarde, onde serão decididos os rumos da nova gestão, inclusive o novo presidente e a noite a posse do presidente eleito, com seu gabinete e os novos presidentes de clube.
                        <br></br><br></br>
                        Na virada do sábado para o domingo, haverá a primeira RCD do AL 23/24, com seu novo gabinete e com os presidentes de Clube, e em paralelo a essa reunião acontecem os concursos e amostras culturais, onde os vencedores dos encontros de Região disputam o primeiro lugar perante todo o distrito.
                        Por fim, todos se reúnem para a foto oficial do evento e no domingo, após o almoço, o evento se finda.</p>
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}