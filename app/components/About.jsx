import React from "react";
import Image from "next/image";
import exampleImg5 from "../../public/images/5.jpg";

const About = () => {
  return (
    <div className=" text-black text-xl m-4 p-4 rounded-lg flex justify-center items-center">
      <div className="bg-zinc-200 w-1/2 p-4 rounded-lg grid grid-cols-2 gap-4 ">
        <div>
          <h1>Tools for Learning</h1>
          <p className="text-sm">
            Welcome to School Tools, your ultimate online resource for a wide
            range of educational tools specifically designed to support students
            within the public education system. Our platform offers an extensive
            collection of interactive resources, including games, simulations,
            tutorials, and study guides, tailored to various subjects and grade
            levels. With user-friendly navigation and compatibility across
            devices, School Tools empowers students to enhance their learning
            experience, collaborate with peers, and excel academically. Join
            School Tools today and access the tools you need to thrive in the
            classroom and beyond.
          </p>
        </div>
        <div>
          <Image
            src={exampleImg5}
            width={400}
            height={400}
            alt="exampleimage5"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
