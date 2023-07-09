import React from "react";

const Services = () => {
  return (
    <div className="text-black text-xl m-4 p-4 rounded-lg flex justify-center items-center  ">
      <div className="bg-zinc-200 w-1/2 p-4 rounded-lg grid grid-cols-3">
        <div className="m-4">
          <h1>Reading</h1>
          <p className="text-sm">
            Our reading app provides interactive stories and exercises to
            enhance reading comprehension and vocabulary skills, making learning
            engaging and enjoyable for students.
          </p>
        </div>
        <div className="m-4">
          <h1>Writing</h1>
          <p className="text-sm">
            With our writing app, students can develop their writing skills
            through guided prompts and feedback, helping them improve their
            grammar, creativity, and overall written expression.
          </p>
        </div>
        <div className="m-4">
          <h1>Math</h1>
          <p className="text-sm">
            Our math app offers interactive lessons, quizzes, and practice
            exercises to strengthen students math skills, covering various
            topics from basic arithmetic to advanced problem-solving.
          </p>
        </div>
        <div className="m-4">
          <h1>Social Studies</h1>
          <p className="text-sm">
            Explore the world with our social studies app, which provides
            historical and geographical information, interactive maps, and
            engaging activities to deepen students understanding of different
            cultures and societies.
          </p>
        </div>
        <div className="m-4">
          <h1>Science</h1>
          <p className="text-sm">
            Our science app brings science to life through virtual experiments,
            interactive simulations, and educational videos, fostering curiosity
            and facilitating hands-on learning in various scientific
            disciplines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
