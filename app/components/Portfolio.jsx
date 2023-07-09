import React from "react";
import Image from "next/image";
import exampleImg1 from "../../public/images/1.jpg";
import exampleImg2 from "../../public/images/2.jpg";
import exampleImg3 from "../../public/images/3.jpg";
import exampleImg4 from "../../public/images/4.jpg";

const Portfolio = () => {
  return (
    <div className=" text-black text-xl flex justify-center m-4 max-w-screen ">
      <div className="text-sm bg-zinc-200 grid grid-cols-2 gap-4 p-2 rounded-lg">
        <div className="flex items-center justify-center p-4 ">
          <div>
            <Image
              src={exampleImg1}
              width={300}
              height={300}
              alt="exampleimage1"
              className="rounded-lg"
            />
            <p>Cerc Creator</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div>
            <Image
              src={exampleImg2}
              width={300}
              height={300}
              alt="exampleimage2"
              className="rounded-lg"
            />
            <p>Writing Guide</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div>
            <Image
              src={exampleImg3}
              width={300}
              height={300}
              alt="exampleimage3"
              className="rounded-lg"
            />
            <p>Math Practice</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div>
            <Image
              src={exampleImg4}
              width={300}
              height={300}
              alt="exampleimage4"
              className="rounded-lg"
            />
            <p>History Quiz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
