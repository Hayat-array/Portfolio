// First, install react-icons: npm install react-icons

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaCode,
  FaDatabase,
  FaServer,
  FaRobot
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiPycharm,
  SiAuth0
} from 'react-icons/si';

import { Card, CardContent, CardHeader } from './ui/card';
import { Section } from './section';
import Image from 'next/image';

const iconMap = {
  html: <FaHtml5 className="h-10 w-10 text-orange-500" />,
  css: <FaCss3Alt className="h-10 w-10 text-blue-500" />,
  javascript: <FaJs className="h-10 w-10 text-yellow-500" />,
  react: <FaReact className="h-10 w-10 text-cyan-500" />,
  'next.js': <SiNextdotjs className="h-10 w-10 text-black" />,
  bootstrap: <FaBootstrap className="h-10 w-10 text-purple-500" />,
  tailwindcss: <SiTailwindcss className="h-10 w-10 text-sky-400" />,
  // 'express.js': <SiExpress className="h-10 w-10 text-gray-700" />,
  'express.js': <span className="text-xl font-mono font-bold text-gray-600">Express</span>,
  mongodb: <SiMongodb className="h-10 w-10 text-green-600" />,
  php: <FaPhp className="h-10 w-10 text-indigo-600" />,
  xampp: <FaServer className="h-10 w-10 text-orange-600" />,
  mysql: <SiMysql className="h-10 w-10 text-blue-600" />,
  'node.js': <FaNodeJs className="h-10 w-10 text-lime-600" />,
  'c/c++': <SiCplusplus className="h-10 w-10 text-blue-700" />,
  dsa: <FaCode className="h-10 w-10 text-rose-500" />,
  git: <FaGitAlt className="h-10 w-10 text-red-500" />,
  github: <FaGithub className="h-10 w-10 text-gray-900" />,
  vscode: <FaCode className="h-10 w-10 text-blue-500" />,
  pycharm: <SiPycharm className="h-10 w-10 text-green-500" />,
  'machine learning': <FaPython className="h-10 w-10 text-python " />,
  'python': <FaPython className="h-10 w-10 text-python " />,
  'auth.js': <SiAuth0 className="h-10 w-10 color: rgb(255 255 255);" />,
  'antigravity': <Image src="/antigravity_logo.png" alt="Antigravity Logo" width={40} height={40} className="rounded-md" />,
};

const skillsList = [
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Next.js', icon: 'next.js' },
  { name: 'React.js', icon: 'react' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Express.js', icon: 'express.js' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'PHP', icon: 'php' },
  { name: 'XAMPP', icon: 'xampp' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Node.js', icon: 'node.js' },
  { name: 'C/C++', icon: 'c/c++' },
  { name: 'DSA', icon: 'dsa' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'VS Code', icon: 'vscode' },
  { name: 'PyCharm', icon: 'pycharm' },
  { name: 'Machine Learning', icon: 'machine learning' },
  { name: 'python', icon: 'python' },
  { name: 'Auth.js', icon: 'auth.js' },
  { name: 'Antigravity', icon: 'antigravity' },
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-secondary/20 fade-in-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">My Tech Stack</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          I work with a variety of modern technologies to build high-quality web
          applications from front to back, and also build efficient databases.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsList.map((skill, index) => (
          <Card
            key={skill.name}
            className="text-center group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="items-center">
              {iconMap[skill.icon] || <FaReact className="h-10 w-10 text-primary" />}
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}