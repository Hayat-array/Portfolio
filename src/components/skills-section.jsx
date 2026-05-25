
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
  FaServer
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiPycharm,
  SiAuth0,
  SiPerplexity,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiGithubcopilot,
  SiReplit,
  SiCanva,
  SiOpenai,
  SiMeta
} from 'react-icons/si';

// Microsoft Office icons from Material Design Icons (react-icons/md)
import {
  MdTextSnippet,
  MdTableChart,
  MdSlideshow
} from 'react-icons/md';

import { Card, CardContent, CardHeader } from './ui/card';
import { Section } from './section';

const Kimi = {
  Combine: ({ size = 40 }) => (
    <img
      src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/kimi-color.png"
      alt="Kimi"
      width={size}
      height={size}
      className="dark:invert"
    />
  ),
};

const iconMap = {
  html: <FaHtml5 className="h-10 w-10 text-orange-500" />,

  css: <FaCss3Alt className="h-10 w-10 text-blue-500" />,

  javascript: <FaJs className="h-10 w-10 text-yellow-500" />,

  react: <FaReact className="h-10 w-10 text-cyan-500" />,

  'next.js': (
    <SiNextdotjs className="h-10 w-10 text-black dark:text-white" />
  ),

  bootstrap: <FaBootstrap className="h-10 w-10 text-purple-500" />,

  tailwindcss: (
    <SiTailwindcss className="h-10 w-10 text-sky-400" />
  ),

  'express.js': (
    <img
      src="https://cdn.simpleicons.org/express"
      alt="Express"
      width={40}
      height={40}
      className="dark:invert"
    />
  ),

  mongodb: <SiMongodb className="h-10 w-10 text-green-600" />,

  php: <FaPhp className="h-10 w-10 text-indigo-600" />,

  xampp: <FaServer className="h-10 w-10 text-orange-600" />,

  mysql: <SiMysql className="h-10 w-10 text-blue-600" />,

  'node.js': <FaNodeJs className="h-10 w-10 text-green-500" />,

  'c/c++': <SiCplusplus className="h-10 w-10 text-blue-700" />,

  dsa: <FaCode className="h-10 w-10 text-rose-500" />,

  git: <FaGitAlt className="h-10 w-10 text-red-500" />,

  github: (
    <FaGithub className="h-10 w-10 text-black dark:text-white" />
  ),

  vscode: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
      alt="VS Code"
      width={40}
      height={40}
    />
  ),

  pycharm: <SiPycharm className="h-10 w-10 text-green-500" />,

  'machine learning': (
    <img
      src="https://cdn.simpleicons.org/tensorflow"
      alt="Machine Learning"
      width={40}
      height={40}
    />
  ),

  python: <FaPython className="h-10 w-10 text-blue-400" />,

  anaconda: (
    <img
      src="https://icon.icepanel.io/Technology/svg/Anaconda.svg"
      alt="Anaconda"
      width={40}
      height={40}
    />
  ),

  'jupyter notebook': (
    <img
      src="https://cdn.simpleicons.org/jupyter"
      alt="Jupyter Notebook"
      width={40}
      height={40}
    />
  ),

  'auth.js': <SiAuth0 className="h-10 w-10 text-orange-500" />,

  antigravity: (
    <img
      src="/antigravity_logo.png"
      alt="Antigravity"
      width={40}
      height={40}
      className="rounded-md"
    />
  ),

  chatgpt: <SiOpenai className="h-10 w-10 text-green-500" />,

  claude: (
    <img
      src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png"
      alt="Claude"
      width={40}
      height={40}
    />
  ),

  gemini: (
    <img
      src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png"
      alt="Gemini"
      width={40}
      height={40}
    />
  ),

  deepseek: (
    <img
      src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png"
      alt="DeepSeek"
      width={40}
      height={40}
    />
  ),

  grok: (
    <img
      src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/grok.webp"
      alt="Grok"
      width={40}
      height={40}
    />
  ),

  kimi: <Kimi.Combine size={40} />,

  perplexity: <SiPerplexity className="h-10 w-10 text-teal-400" />,

  vercel: (
    <SiVercel className="h-10 w-10 text-black dark:text-white" />
  ),

  netlify: <SiNetlify className="h-10 w-10 text-green-400" />,

  firebase: <SiFirebase className="h-10 w-10 text-yellow-500" />,

  'meta ai': <SiMeta className="h-10 w-10 text-blue-500" />,

  copilot: (
    <SiGithubcopilot className="h-10 w-10 text-violet-400" />
  ),

  replit: <SiReplit className="h-10 w-10 text-orange-500" />,

  'z ai': (
    <img
      src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/zai.webp"
      alt="Z AI"
      width={40}
      height={40}
    />
  ),

  elevenlabs: (
    <img
      src="https://static.vecteezy.com/system/resources/previews/067/941/726/non_2x/elevenlabs-symbol-rounded-hd-free-png.png"
      alt="ElevenLabs"
      width={40}
      height={40}
    />
  ),

  canva:(
    <img src="https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg"
          alt="canva" width={40} height={40}/>
  ),

  // Microsoft Office icons using Material Design Icons with brand colors
  word: (
    <img src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Word_Logo_512px.png"
          alt="Microsoft Word" width={40} height={40} />
  ),

  powerpoint: (
    <img src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_PowerPoint_Logo_128px.png"
          alt="Microsoft PowerPoint" width={40} height={40} />
  ),

  excel: (
    <img src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Excel_Logo_128px.png"
          alt="Microsoft Excel" width={40} height={40} /> 
  ),

  cursor: (
    <img src="https://www.cursor.sh/favicon.ico"
          alt="Cursor" width={40} height={40} className="rounded-md" />
  ),

  'blackbox ai': (
    <img src="https://www.blackbox.ai/favicon.ico"
          alt="Blackbox AI" width={40} height={40} className="rounded-md" />
  ),

  mistral: (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAw1BMVEX////hBQD/ggX/rwD6UA//2ADysbH/iBv/1QD/hQD/rQD/qgD7ZR3zt7f/7bH/0AD/4s7wOgv/8Nz6QwD/dAD/4W3/xG3/uk3/zYb/eAD8pZP/6JP/9+r8gW36SgD+6OP7ZTz9x7v+3db6OQD97+7jLSzmTUzthob1wsH/9df/pG3/8sf/4GX/3n//5bD/tj38j237Xgj9nXf+0Lj8cjf+uZr+xKj8iXL7XTPxYFDxeGz2raXynpvwJgDiGhjlQ0P30dF8LevqAAABY0lEQVR4nO3XyVKDQBhFYTKRMCSocSJiooKaOMd5ivr+T2XplpuSptHCqnPWf93+WOI4RERERET0J50OVDP74UQOD8yHznqqHXvhLJLL5kMbHVElwp5cRogQIUKECBEiRIgQYS2FnVoJI9X5mkxPJPL2Qg5H5sLNwBcFsstETmzra7XrByWEfqto/tYyYeGJFkKECBEiRIgQIUKECBFWKWwtExpMlBCeeN3ieU2VwUA3LiGUj/5aCBEiRIgQIUKECBEiRFhA6Ima66pYnXpebHBcQng1D/PNr1dUN7fiNgzv5PG9Gg7H5sLdcTvfcCRvJ3vqeLwvjw9ScdtOESJEiBAhQoQIESJEiPCnHkyEj+kwX1qZsC97WhUtnuWtO5K9yOPXhVzWw9kXMHtr2PaeyU8/th5uTL+Fh9Y7RwgRIkSIECFChAgRIvxXwtr/pzh917apBDof1sPuRC8TEREREVH5PgEZCcxDs57UzQAAAABJRU5ErkJggg=="
          alt="Mistral" width={40} height={40} />
  ),

  'google ai studio': (
    <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/aistudio.webp"
          alt="Google AI Studio" width={40} height={40}  className="dark:invert" />
  ),

  qwen: (
    <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/qwen-color.png"
          alt="Qwen" width={40} height={40} className="rounded-md" />
  ),

  kaggle: (
    <img src="https://cdn.simpleicons.org/kaggle"
          alt="Kaggle" width={40} height={40} />
  ),

  qoder: (
    <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/qoder-color.png"
      alt="Qoder" width={40} height={40} className="rounded-md dark:invert" />
  ),

  'google colab': (
    <img src="https://colab.research.google.com/img/favicon.ico"
          alt="Google Colab" width={40} height={40} />
  )
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
  { name: 'Python', icon: 'python' },
  { name: 'Anaconda', icon: 'anaconda' },
  { name: 'Jupyter Notebook', icon: 'jupyter notebook' },
  { name: 'Auth.js', icon: 'auth.js' },
  { name: 'Antigravity', icon: 'antigravity' },
  { name: 'ChatGPT', icon: 'chatgpt' },
  { name: 'Claude', icon: 'claude' },
  { name: 'Gemini', icon: 'gemini' },
  { name: 'DeepSeek', icon: 'deepseek' },
  { name: 'Grok', icon: 'grok' },
  { name: 'Kimi AI', icon: 'kimi' },
  { name: 'Perplexity', icon: 'perplexity' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Netlify', icon: 'netlify' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'Meta AI', icon: 'meta ai' },
  { name: 'GitHub Copilot', icon: 'copilot' },
  { name: 'Replit', icon: 'replit' },
  { name: 'Z AI', icon: 'z ai' },
  { name: 'ElevenLabs', icon: 'elevenlabs' },
  { name: 'Canva', icon: 'canva' },
  { name: 'Microsoft Word', icon: 'word' },
  { name: 'Microsoft PowerPoint', icon: 'powerpoint' },
  { name: 'Microsoft Excel', icon: 'excel' },
  { name: 'Cursor', icon: 'cursor' },
  { name: 'Blackbox AI', icon: 'blackbox ai' },
  { name: 'Mistral', icon: 'mistral' },
  { name: 'Google AI Studio', icon: 'google ai studio' },
  { name: 'Qwen', icon: 'qwen' },
  { name: 'Kaggle', icon: 'kaggle' },
  { name: 'Qoder', icon: 'qoder' },
  { name: 'Google Colab', icon: 'google colab' }
];

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-secondary/20 fade-in-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
          My Tech Stack
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          I work with modern technologies to build high-quality web
          applications, AI tools, databases, and scalable full-stack projects.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsList.map((skill, index) => (
          <Card
            key={skill.name}
            className="text-center group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="items-center flex justify-center h-24">
              {iconMap[skill.icon] || (
                <FaReact className="h-10 w-10 text-primary" />
              )}
            </CardHeader>

            <CardContent>
              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
       {/* LeetCode Stats Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-headline">
          📊 LeetCode Stats
        </h2>

        <div className="flex flex-col items-center gap-8 mb-12">
          <a
            href="https://leetcard.jacoblin.cool/Hayat-Ali?theme=dark&font=Fira%20Code&ext=heatmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://leetcard.jacoblin.cool/Hayat-Ali?theme=dark&font=Fira%20Code&ext=heatmap"
              alt="LeetCode Stats Card"
              width={500}
              className="rounded-lg shadow-lg"
            />
          </a>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-headline">
          📈 LeetCode Badges
        </h2>

        <div className="flex justify-center mb-12">
          <img
            src="https://leetcode-badge-showcase.vercel.app/api?username=Hayat-Ali&theme=dark"
            alt="LeetCode Activity"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
     