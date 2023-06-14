import { Footer } from "../../components/footer"
import prefeitura from "../../assets/apoio/prefeitura.png"
import agricola from "../../assets/apoio/agricola.png"
import ervaMate from "../../assets/apoio/erva-mate-caio.png"
import hoteFraiburgo from "../../assets/apoio/logo-hotel-fraiburgo.png"
import hoteRenar from "../../assets/apoio/logo-hotelrenar.jpg"
import lions from "../../assets/apoio/lions.png"
import cdl from "../../assets/patrocinadores/cdl.png"
import aciaf from "../../assets/patrocinadores/aciaf.png"
import samila from "../../assets/patrocinadores/samila.png"
import radioFraiburgo from "../../assets/patrocinadores/radio-fraiburgo.png"
import bebelas from "../../assets/patrocinadores/bebelas.png"
import kaene from "../../assets/apoio/kaene.png"
import eder from "../../assets/patrocinadores/eder.png"
import redesmart from "../../assets/patrocinadores/redesmart.png"
import bigbom from "../../assets/apoio/bigbom.png"
import halo from "../../assets/patrocinadores/halo.png"
import leo from "../../assets/leo.png"
import amadeo from "../../assets/patrocinadores/amadeo.png"
import distrito from "../../assets/distrito.png"
import rimas from "../../assets/apoio/rimas.png"
import soFesta from "../../assets/apoio/so-festas.png"
import { Nav } from "../../components/nav"

export const PartnersEvent = () => {
    return (
        <div className="h-screen overflow-y-auto font-montserrat">
            <div className="flex h-12 justify-end lg:justify-center">
                <div className="flex items-center lg:justify-center lg:w-[900px]">
                    <Nav /> {/* Componente nav */}
                </div>
            </div>
            <div className="bg-white flex justify-center">
                <div className="lg:w-[900px] sm:w-[700px]">
                    <div className="pt-6 p-2">
                        <h3 className="font-bold">Patrocinadores</h3>
                        <div className="grid grid-cols-3 gap-6 pt-2 pb-0 p-4 items-center justify-items-center">
                            <img src={cdl} className="w-26 max-h-14 "></img>
                            <img src={aciaf} className="w-20 max-h-14"></img>
                            <img src={samila} className="w-28 max-h-14"></img>
                            <img src={radioFraiburgo} className="w-28 max-h-24"></img>
                            <img src={bigbom} className="w-26 max-h-14"></img>
                            <img src={halo} className="w-26 max-h-14"></img>
                            <img src={bebelas} className="w-32 max-h-18"></img>
                            <img src={eder} className="w-26 max-h-14"></img>
                            <img src={redesmart} className="w-26 max-h-16"></img>
                            <img src={amadeo} className="w-26 max-h-16"></img>
                            <p className="w-26 max-h-14">Luiz Felipe T. Zanella</p>
                            <p className="w-26 max-h-14">Guilherme Techio</p>
                            <p className="w-26 max-h-14">Juliano Zonta</p>
                            <p className="w-26 max-h-14">Nilce Pinz</p>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="font-bold p-2">Apoio</h3>
                        <div className="grid grid-cols-3 gap-8 pt-2 pb-0 p-4 items-center justify-items-center">
                            <img src={lions} className="w-20 max-h-24"></img>
                            <img src={prefeitura} className="w-20 max-h-24"></img>
                            <img src={ervaMate} className="w-22 max-h-14"></img>
                            <img src={hoteFraiburgo} className="w-26 max-h-14"></img>
                            <img src={hoteRenar} className="w-26 max-h-14"></img>
                            <img src={rimas} className="w-26 max-h-14"></img>
                            <img src={soFesta} className="w-26 max-h-14"></img>
                            <img src={kaene} className="w-26 max-h-14"></img>          
                        </div>
                    </div>
                    <div className="pt-6">
                        <h3 className="font-bold p-2">Organização</h3>
                        <div className="grid grid-cols-3 gap-4 pt-2 pb-0 p-4 items-center justify-items-center">
                            <img src={leo} className="w-28 max-h-32"></img>
                            <img src={distrito} className="w-26 max-h-28"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}


// Apoiadores:
// KAENE
// LIONS
// Prefeitura V
// Agrícola Fraiburgo V
// Erva Mate Caio V
// Restaurante Rimmas'
// Só Festas

// Patrocinadores:
// CDL: R$200,00
// ACIAF: 200,00
// SAMILA: R$500
// ENERGIA MIX: R$ 100,00 (de alguém)
// Rádio Fraiburgo: R$ 300

// Organizador:
// Leo
// Distrito Ld-8

// Apoiadores: 
// KAENE !
// LIONS !
// Prefeitura !
// Distrito LEO LD-8 !
// Erva Mate Caio !
// Restaurante Rimmas' !
// Só Festas !
// BIG BOM !

// Patrocinadores:
// CDL: R$200,00 💸 !
// ACIAF: R$200,00 💸 !
// SAMILA: R$500 💸 !
// POLPA: R$800
// Rádio Fraiburgo: R$ 300 💸 !
// Bebela's: R$150 💸 !
// Eder Martinelli R$300,00
// Fernanda Rosar R$150,00
// Fabio Dutra R$150,00
// Guilherme Techio R$150,00 💸
// Luiz Felipe Torcatto Zanella R$150,00 💸
// Nilce Pinz e Juliano Zonta R$150 💸
// AMADEO R$150,00 💸
// Brasil cacau @⁨Jonathan⁩ 
// AGROSERER @⁨Julia Gelati⁩ 
// LUGANO @⁨Julia Gelati⁩ 
// Casa Lúdica @⁨Valter Brito⁩ 
// Redsmart - @⁨Moisés⁩ 
// HALO R$150 💸 !
// Marcos Munaro @⁨João V. Borges⁩ 

// Parceiros:
// Hotel Fraiburgo !
// Hotel Renar !