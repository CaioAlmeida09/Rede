import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

// Author: {AvatarURL: "", name: "", role: ""}
// Published: Date;
// coment: ""

// interface PostProps {
//   Author: { AvatarUrl: string; name: string; role: string };
//   Published: Date;
//   Comment: string;
// }

const Posts = [
  {
    author: {
      AvatarUrl: "https://github.com/CaioAlmeida09.png",
      name: "Caio Almeida",
      role: "Analista de RH JR",
    },
    published: new Date("2024-01-23 19:18:00"),
    content: [
      { type: "paragraph", comment: "Fala galeraa 👋" },
      {
        type: "paragraph",
        comment:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],
  },
  {
    author: {
      AvatarUrl: "https://github.com/CaioAlmeida09.png",
      name: "Lele Tiemy",
      role: "Dentista",
    },
    published: new Date("2024-01-23 19:18:00"),
    content: [
      { type: "paragraph", comment: "Fala galeraa 👋" },
      {
        type: "paragraph",
        comment:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        comment: "  #novoprojeto #nlw #rocketseat",
      },
    ],
  },
];
function App() {
  return (
    <>
      <div className="w-full h-screen ">
        <Header />
        <div className="Wrapper">
          <aside
          // className="flex justify-center items-center "
          // style={{ width: "256px" }}
          >
            <Sidebar />
          </aside>
          <main className=" w-full">
            {Posts.map(({ author, published, content }) => {
              return (
                <Post author={author} published={published} content={content} />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
