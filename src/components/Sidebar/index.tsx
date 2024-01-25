import Background from "../../assets/Rectangle4240.png";
import Perfil from "../../assets/fotoPerfil.jpg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../avatar.tsx";

export function Sidebar() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center"
      style={{ background: "#202024" }}
    >
      <img src={Background} alt="Tela-Retangular-BG" className="w-full" />
      <div className="-mt-5">
        <Avatar hasBorder={true} src={Perfil} />
      </div>
      <section className="flex flex-col justify-center items-center mt-3 mb-5">
        <strong className=" text-2xl"> Caio Almeida</strong>
        <p className="text-base text-gray-500"> Developer Web</p>
      </section>
      <footer
        className="w-full flex justify-center items-center h-24 p-5"
        style={{
          borderTop: "1px solid  #323238",
        }}
      >
        <div className="py-3 px-8 flex justify-center items-center text-green-400 border border-green-400 rounded-xl hover:bg-green-400 hover:text-white ">
          {" "}
          <a className=" flex gap-2" href="">
            <PencilLine size={20} />
            Edite seu perfil
          </a>
        </div>
      </footer>
    </div>
  );
}
