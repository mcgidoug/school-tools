import React from "react";
import Image from "next/image";
import exampleImg1 from "../../public/images/1.jpg";
import exampleImg2 from "../../public/images/2.jpg";
import exampleImg3 from "../../public/images/3.jpg";
import exampleImg4 from "../../public/images/4.jpg";

const Portfolio = () => {
  return (
    <div className=" text-white text-xl flex justify-center m-4 max-w-screen ">
      <div className="bg-orange-700 grid grid-cols-2 gap-4 p-2 rounded-lg">
        <div className="flex items-center justify-center p-4">
          <div>
            <p>img1</p>
            <Image
              src={exampleImg1}
              width={200}
              height={200}
              alt="exampleimage1"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div>
            <p>img2</p>
            <Image
              src={exampleImg2}
              width={200}
              height={200}
              alt="exampleimage2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div>
            <p>img3</p>
            <Image
              src={exampleImg3}
              width={200}
              height={200}
              alt="exampleimage3"
            />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div>
            <p>img4</p>
            <Image
              src={exampleImg4}
              width={200}
              height={200}
              alt="exampleimage4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
