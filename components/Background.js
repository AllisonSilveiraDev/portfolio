import background from "../public/images/backg.png";

import Image from "next/image";

export default function Background() {
  return (
    <div
      style={{ zIndex: -1, position: "fixed", width: "100vw", height: "100vh" }}
    >
      <Image
        src={background}
        layout="fill"
        objectFit="Cover"
        alt="background"
      />
    </div>
  );
}
