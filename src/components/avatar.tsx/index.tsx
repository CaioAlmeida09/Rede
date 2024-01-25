interface srcProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar(props: srcProps) {
  return (
    <img
      src={props.src}
      className="w-14 h-14"
      style={{
        border: "2px solid #323238",
        outline: props.hasBorder ? "2px solid #00875f" : "none",
      }}
    />
  );
}
