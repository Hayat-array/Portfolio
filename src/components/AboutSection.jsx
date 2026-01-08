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
            <h1 className="mb-8 text-4xl font-bold md:text-5xl font-headline text-primary">
              About Me
            </h1>

            <div className="space-y-6 text-justify">
              <p className="text-lg leading-relaxed text-[#333333]">
                Hello! My name is <span className="font-semibold text-primary border-b-2 border-primary/20">Hayat Ali</span>, son of Shahadat Ali.
                I am from <span className="font-bold text-[#000000]">Makrana</span>, in the Nagaur district of Rajasthan.
                I completed my schooling in my hometown, where I secured a remarkable <span className="font-bold text-violet-700">94.2%</span> in Class 12th.
                Currently, I am in my third year of <span className="font-semibold text-primary">B.Tech in Computer Science & Engineering</span> at
                <span className="font-semibold text-primary"> JECRC Foundation</span>, Jaipur.
              </p>

              <p className="text-lg leading-relaxed text-[#333333]">
                I have a strong interest in <span className="font-semibold text-primary">Machine Learning</span>,
                <span className="font-semibold text-primary"> Artificial Intelligence</span>, and
                <span className="font-semibold text-primary"> Web Development</span>. I enjoy exploring complex programming challenges and
                continuously improving my technical skills. My academic journey is enriched with certifications and
                hands-on experience in C programming and modern web technologies. I thrive in team environments,
                having coordinated tasks and supported colleagues to achieve project goals efficiently.
              </p>

              <p className="text-lg leading-relaxed text-[#333333]">
                My core strengths lie in <span className="font-bold text-[#000000] italic text-lg">problem-solving, quick learning, and meticulous attention to detail</span>.
                I am driven by the ambition of becoming a professional <span className="font-semibold text-primary underline decoration-violet-300 decoration-2 underline-offset-4">Machine Learning Engineer</span>.
                You can explore my full academic history in the <a href="/#studies" className="text-violet-700 font-bold underline hover:text-primary transition-colors">Studies & Certificates</a> section.
              </p>

              <p className="text-lg leading-relaxed text-[#333333] pb-4 border-b border-gray-100">
                Beyond my professional goals, I come from a family of four siblings. My father works in the mining industry,
                and my mother is a dedicated homemaker. My background instills in me a strong work ethic and a desire for continuous growth.
              </p>
            </div>

            <p className="mt-8 text-xl font-bold pb-2 text-primary animate-pulse">
              Thank you for visiting my portfolio!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
