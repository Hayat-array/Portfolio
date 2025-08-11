'use client';

export function AboutSection() {
  return (
    <>

    <div id="about" className="relative rounded-xl p-[2px] overflow-hidden group 
                before:absolute before:inset-0 before:rounded-xl 
                before:bg-gradient-to-r before:from-indigo-500 
                before:via-violet-500 before:to-indigo-500 
                before:transition-colors before:duration-1000 
                before:animate-bg-pan before:bg-[length:200%_200%] 
                before:z-[-1]">

      <section id="about" className="justify-center p-5 px-6 py-16 ml-2 mr-2 text-gray-800 transition-all duration-700 ease-in-out bg-white rounded-md align-center animate-fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl font-headline text-primary">
          About Me
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold">Hayat Ali</span>, son of Shahadat Ali.
          I'm currently pursuing a <span className="font-semibold">Bachelor of Technology (B.Tech)</span> in
          <span className="font-semibold"> Computer Science & Engineering</span> from
          <span className="font-semibold"> JECRC Foundation</span>, affiliated with
          <span className="font-semibold"> Rajasthan Technical University (RTU)</span>.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          I’m passionate about software development, problem-solving, and learning new technologies.
          My academic journey includes certifications and hands-on practice in C programming, web development,
          and more.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          I believe in continuous learning and building real-world projects to enhance my skills.
          Please check out my <a href="/#studies" className="text-blue-600 underline hover:text-blue-800">Studies & Certificates</a> section
          to see what I’ve accomplished so far.
        </p>

        <p className="text-lg leading-relaxed">
          Thank you for visiting my portfolio!
        </p>
      </div>
      </section>
    </div>
    </>
  );
}
