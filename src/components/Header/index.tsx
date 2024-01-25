import Ignitelogo from "../../assets/Ignitesimbol.svg";

export function Header() {
  return (
    <header
      className="h-20 flex justify-center items-center"
      style={{ background: "#202024" }}
    >
      <img className=" h-10" src={Ignitelogo} alt="logo-ingnite" />
    </header>
  );
}
