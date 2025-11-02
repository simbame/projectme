import Image from "next/image";
import React from "react";

interface Props {
  src: string;
}

const ImageButton = (props: Props) => {
  return (
    <div>
      <Image
        src={props.src}
        width={400}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
};

export default ImageButton;
