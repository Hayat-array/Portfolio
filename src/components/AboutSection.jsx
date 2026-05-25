'use client';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative rounded-xl p-[2px] overflow-hidden group animate-fade-up"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-[length:200%_200%] animate-bg-pan" />

      <div className="relative m-2 rounded-md bg-card/85 backdrop-blur-md px-6 py-16 text-card-foreground border border-border/40 shadow-2xl transition-all duration-700 ease-in-out">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl font-headline text-primary">
            About Me
          </h1>

          <div className="space-y-6 text-justify">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hello! My name is <span className="font-semibold text-primary border-b-2 border-primary/20">Hayat Ali</span>, son of Shahadat Ali.
              I am from <span className="font-bold text-foreground">Makrana</span>, in the Nagaur district of Rajasthan.
              I completed my schooling in my hometown, where I secured a remarkable <span className="font-bold text-violet-600 dark:text-violet-400">94.2%</span> in Class 12th.
              Currently, I am in my third year of <span className="font-semibold text-primary">B.Tech in Computer Science & Engineering</span> at
              <span className="font-semibold text-primary"> JECRC Foundation</span>, Jaipur.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I have a strong interest in <span className="font-semibold text-primary">Machine Learning</span>,
              <span className="font-semibold text-primary"> Artificial Intelligence</span>, and
              <span className="font-semibold text-primary"> Web Development</span>. I enjoy exploring complex programming challenges and
              continuously improving my technical skills. My academic journey is enriched with certifications and
              hands-on experience in C programming and modern web technologies. I thrive in team environments,
              having coordinated tasks and supported colleagues to achieve project goals efficiently.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My core strengths lie in <span className="font-bold text-foreground italic text-lg">problem-solving, quick learning, and meticulous attention to detail</span>.
              I am driven by the ambition of becoming a professional <span className="font-semibold text-primary underline decoration-violet-300 dark:decoration-violet-700 decoration-2 underline-offset-4">Machine Learning Engineer</span>.
              You can explore my full academic history in the <a href="/#studies" className="text-violet-600 dark:text-violet-400 font-bold underline hover:text-primary transition-colors">Studies & Certificates</a> section.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground pb-4 border-b border-border/40">
              Beyond my professional goals, I come from a family of four siblings. My father works in the mining industry,
              and my mother is a dedicated homemaker. My background instills in me a strong work ethic and a desire for continuous growth.
            </p>
          </div>

          <p className="mt-8 text-xl font-bold pb-2 text-primary animate-pulse">
            Thank you for visiting my portfolio!
          </p>
        </div>
      </div>
    </section>
  );
}
