import { Trash } from "phosphor-react";
import Perfil from "../../assets/fotoPerfil.jpg";
import { Avatar } from "../avatar.tsx";

interface contentProps {
  content: string;
  onDeleteComment: (comentDelete: string) => void;
}
export function Comment({ content, onDeleteComment }: contentProps) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className="flex flex-col p-5 w-full">
      <section className="flex gap-3">
        <Avatar hasBorder={false} src={Perfil} />
        <div
          className="flex flex-col w-full p-3"
          style={{ background: "#29292e" }}
        >
          <header className="flex justify-between items-center w-full  ">
            <div className="flex gap-3">
              <section className="flex flex-col justify-center items-center">
                <strong className=" text-base"> Caio Almeida</strong>
                <time
                  title="21 de Janeiro de 2024"
                  dateTime="2024-01-21 09:18:00"
                  className="text-gray-500 text-sm"
                >
                  Cerca de 1h atrás
                </time>
              </section>
            </div>
            <button onClick={handleDeleteComment} title="Botão para deletar">
              <Trash size={23} color="#767676" />
            </button>
          </header>
          <p className="mt-7"> {content}</p>
        </div>
      </section>
    </div>
  );
}
