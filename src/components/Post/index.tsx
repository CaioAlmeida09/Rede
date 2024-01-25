import { useState } from "react";
import { Comment } from "../Comment";
import { Avatar } from "../avatar.tsx";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface PostProps {
  author: { AvatarUrl: string; name: string; role: string };
  published: Date;
  content: { type: string; comment: string }[];
}

// <{ message: string }[]>
export function Post(props: PostProps) {
  const [comments, setComments] = useState(["Bacana Caio!!"]);
  const [digitedComment, setDigitedComment] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setComments([...comments, digitedComment]);
    setDigitedComment("");
  }
  const formatedPushidedDate = format(
    props.published,
    "d 'de' LLLL 'às' HH:mm'h' ",
    { locale: ptBR }
  );

  const PublishetDateRelative = formatDistanceToNow(props.published, {
    locale: ptBR,
    addSuffix: true,
  });

  function deleteComment(commentDelete: string) {
    const newComentWidhoutDelete = comments.filter((comment) => {
      return comment !== commentDelete;
    });
    setComments(newComentWidhoutDelete);
  }
  return (
    <article className="flex flex-col p-5" style={{ background: "#202024" }}>
      <header>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <Avatar hasBorder={true} src={props.author.AvatarUrl} />
            <section className="flex flex-col justify-center items-center">
              <strong className=" text-xl"> {props.author.name}</strong>
              <p className="text-base text-gray-500"> {props.author.role}</p>
            </section>
          </div>
          <time
            title={formatedPushidedDate}
            dateTime={props.published.toISOString()}
            className="text-gray-500"
          >
            {PublishetDateRelative}
          </time>
        </div>
      </header>

      <div className="flex flex-col gap-2 mt-10">
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p> {line.comment}</p>;
          } else if (line.type === "link")
            return (
              <p
                key={line.comment}
                className="mt-7 text-green-400 hover:text-green-300"
              >
                {" "}
                <a key={line.comment}> {line.comment}</a>
              </p>
            );
        })}
      </div>
      <form
        className="w-full mt-4 pt-4 flex flex-col"
        style={{ borderTop: "1px solid #323238" }}
        onSubmit={handleSubmit}
      >
        <strong className="leading-5 text-gray-500 font-bold mt-5">
          {" "}
          Deixe seu FeedBack
        </strong>
        <div className="container">
          <textarea
            placeholder="Deixe um comentário:"
            className="w-full p-2 rounded-lg text-gray-400 mt-4 leading-3 h-28 outline-none "
            style={{ background: "#121214" }}
            onChange={(e) => setDigitedComment(e.target.value)}
            value={digitedComment}
          ></textarea>
          <footer
            style={{
              visibility: "hidden",
              minHeight: 0,
              transition: "visibility 0s, max-height 0.3s ease",
            }}
          >
            <button className="px-5 py-3 mt-4 border-none cursor-pointer font-bold bg-green-700 w-32 rounded-lg hover:bg-green-500 mb-2">
              {" "}
              Comentar
            </button>
          </footer>
          {comments.map((item: string) => {
            return (
              <Comment
                key={item}
                content={item}
                onDeleteComment={() => deleteComment(item)}
              />
            );
          })}
        </div>
      </form>
    </article>
  );
}
