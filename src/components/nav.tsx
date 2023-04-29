import React, { useEffect, useState } from "react";
import logo from '../assets/LOGO.png'
import { useNavigate } from "react-router";


export const Nav = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/main");
  }
  const [isNavOpen, setIsNavOpen] = useState(false); //iniciando o menu móvel
  return (
    <nav>
      <div className={isNavOpen ? "showMenuNav lg:hidden" : "hidden"}>
        <div>
          <div
            className="CROSS-ICON absolute top-6 right-0 px-8 py-4 lg:hidden"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div>
            <div className=" lg:hidden bg-[#1d1d1d] text-sm grid h-52 text-white">
              <div className="lg:hidden p-2 pl-4">
                <figure className="w-[130px]">
                  <img src={logo}></img>
                </figure>
                <p>Josué Morais</p>
                <p>andrejosue2001@gmail.com</p>
              </div>
            </div>
            <div className="lg:hidden text-base flex flex-col p-4 space-y-8"> {/*menu mobile */}
              <a href="main" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvtldENwjAMRF83gAkYAdgANmAURmAkNgA2gA1gAtgA5CqR3Mi010r5a/7aOPcc5yw3VF5NZX3GABbAJSW0Bz5Kciogi2+S6B2QIArAiz8SYA1IkCFAKb5LgCsgQfoAkXiuu+1JkH+APvH8thIkAijiMqQEjBGXIB5QWnGpeh2ws+/Iwh5gtjNn5DXksLLPvu6HaW3tuxbgBrSWjrLMmUy9QefcDPAPHZZ2LtGkEj2BlTKtghibF3kotdvRGxyAU9HVCu8FHIGzDx7bTAqoE1Md8APjLkQZBPCBYQAAAABJRU5ErkJggg=="/>Home</a>
              <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJNJREFUSEvdlNsOgDAIQ93/f7TGRRLEQiGRGOeb7nJKC46t+RnN92+fAvarOiYi3BcdbgdIPB4oJYCVf0LaAHJxttGg2EwGrwOschFR/T6FoQqqF3n7HwDP82oFYuk8pyuohsqyWRjgeZ6yxA4mysAC2LTbSb+9rwXwPNbti/IJLWT+6r+pnhsEhQIzANY94fr/AQdq9ikZ67RLUgAAAABJRU5ErkJggg=="/>Sobre o Evento</a>
              <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK1JREFUSEtjZKAxYKSx+QyELPgPdQAudYTk6W+BAwMDw3wGBgYFMoPuAQMDQyIDA8MBmH50r4MUyJNpOEwbyAxFXBbAwpRCOxBBj+4DullAKHXh8iFGqsLlg+FjAbqXSeVjZDRSDSCknqAFpCbXwRfJhIKAkDzBICJkACF5ghYM/Tigug8+MDAw8JNqKpr6h8j1CXqZA6pwFlBQJ4AMT8BX4VDoeEzt5JaaRDsEAEtJNBmkfiBdAAAAAElFTkSuQmCC"/>Cronograma</a>
              <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANBJREFUSEvtlesRAUEQhL+LgAwQASGQCZGRyQmBDMhABlRXmaqtte+r436Yv7vTPc+ejpGtGxkfn2ALHIFlI/ENOABn8/cJ9GHRCG5uwljFCJ7vh9bSffj7QD8nyAUwOIM/AdUl8EZ6+j3I7eD0M6ju0dc3+QHMAoW+ADtA77I50AObwN+7q8YhuT5FFNVIhJkC36fkOjQlilb6vgZEIlPkV0D3w7IKTlipLLskAioC18dSAqu7Xaps5LGDk1skZSJLlsUFqckgRz6oB03gcnoBgMw5GSl17t0AAAAASUVORK5CYII="/>Regulamento</a>
              <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYFJREFUSEvVle01BEEQRe9GgAjIgAwQARkgAkSADIRABIiAzUAIZEAEnOtUzant/Zph94f61VPd/V7Vq6qeEWu20Zrx+VcEB8A58AZcpjKryOA4gCWYwv0LwSlwBewE6iewEesOdyjBJnAEXBfgd+A2pHkAxkCXTV8CgdX3AnCtCSzRXXwL+jyUwPRPGmAjFDSBU/dBBAKrrzqnCWzEL+EwEwucRK6V6Cn8P8daifZCigp8HyAJ7D2JlOwMeAxCfQZ1E/tTBB60gGkCe8m+TqudM1HMOLuQ4KO0maCCS6Kpr5drrx8WuTKrhQRqapcY5XYAS/raALvVRq/PWtgQytY1wLw2lUSy3SJPXbbRu2eN9oGJvWVzkK1Xwc1K8pQv935F4OWvOVlYJydYIklXTpC8gtuBzoF13ArCmXMwK9g2A5+InBM7Td2rTci+rAatRE6p4Ead5tRLZAZavlWDMvAptrDt+1MjT+BK3uuX6RwYXZ3oOXWfdveRqDfYrINrJ/gGx3tVGXsqEmsAAAAASUVORK5CYII="/>Parceiros</a>
              <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIpJREFUSEvtVVsOgCAMKydTb64n08wEo4M5Rsa+4JO0a/eChMEnDY6PcIEdwFLJSjJyVrAUY8v3nFgjENYi8MFLAr2lywYf/hTgPVZL5L4Wvc1sNvIWkEa0ORgD3rFDBXqd/vJCe0BOijEzpqWO6RRoLhEvvdtz7fHhHABW6cMxDo0OD98D3ZIRcQEacBwZ8/GwTQAAAABJRU5ErkJggg=="/>QR Code</a>
              <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOVJREFUSEvFVcENwjAMvE4CTABsBJPBSLABbIIO1ZWVnqM6StS+oursu7OdeMLgbxqcH7sSvACcNzok9qqwkYMbgMfG5Aa7A3iWMRHBB8BhBvN8qpCZGIlTBBbwnZOSSKpzpCZohVMEHswcLFWzi5LAqz+6EjW7KAmU1WqNXZkkzhMo9RYf1rho/grnCWpJsmO79GwUASfw30NVIjUxXUpEwlqTF1XBpZM9jMbUu2hWX5ZITYxdtCb1EYGfZ2LYrK5Phe8Fz83qIwf8n517xqSeawZkFs4bwCWzcJK7JobvupO7uPgBM0hQGeFcr2gAAAAASUVORK5CYII="/>Meus dados</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 p-4">
          <a href="#" className="flex hover:text-[#91c7f3]"><img className="pr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvdleENwkAIhb9O4AjaTXQTnUxHcYS6gW6gE2heUkxzbeWkPU16f4H34MFBReFXFcbn5wRb4AhsgpVdgQNwtvi0Ajmsg+AWJox6jODZGqLS9eJToOUTnID9hx65Enn9FUAD7ID7gPMsBMIVuEhE1n0ugTl4lZhdMy/Z7P2fwMvcMnwA+vVfS5RDcGnBQ032PtrkMfUIciqUz3tDLG9VqHErTwfHfuvek1QijZ4aGb0JAteuGj04E5Pvh0cPS3YixQlenxYyGbO5dyYAAAAASUVORK5CYII="/>Sair</a>
        </div>
      </div>
      <div className="flex lg:hidden mr-5" onClick={() => setIsNavOpen((prev) => !prev)}>
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-300 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-300 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-300 animate-pulse"></span>
        </div>
      </div>
      <div className="max-lg:hidden flex text-white text-sm space-x-6">
        <a href="main" className="hover:text-[#91c7f3]">Home</a>
        <a href="#" className="hover:text-[#91c7f3]">Sobre o Evento</a>
        <a href="#" className="hover:text-[#91c7f3]">QR Code</a>
        <a href="#" className="hover:text-[#91c7f3]">Cronograma</a>
        <a href="#" className="hover:text-[#91c7f3]">Regulamento</a>
        <a href="#" className="hover:text-[#91c7f3]">Parceiros</a>
        <a href="#" className="flex hover:text-[#91c7f3]">Sair</a>
      </div>
    </nav>
  )
}