
import {FaReact, FaGraduationCap, FaCode, FaCodepen, FaTeamspeak, FaVideo} from "react-icons/fa";
import Card from "./Card";
import Title from "./Title.tsx";
import { FadeIn } from "./FadeIn";


const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Software Engineering Expertise"
            des="I'm a Software Engineer skilled in solving complex problems using technologies like JavaScript, React.js, and MySQL. My focus is on creating innovative solutions that improve user experiences."
            icon={<FaGraduationCap/>}
          />
          <Card
            title="Frontend Developer"
            des="With hands-on experience in frontend development,I build dynamic, responsive user interfaces. I specialize in HTML, CSS,
                 Tailwind CSS, and React to create seamless interactions."
            icon={<FaReact />}
          />
          <Card
            title=" Key Programming Languages"
            des="Proficient in  C++, Java, React-Native, I design scalable software solutions using OOP principles.
                 I’m also familiar with MySQL and MongoDB for backend integration"
            icon={<FaCode />}
          />
          <Card
            title="SDLC and Agile"
            des="I have strong knowledge of SDLC, ensuring successful project delivery by collaborating with cross-functional teams.
                 I focus on continuous improvement throughout the development cycle."
            icon={<FaCodepen />}
          />
          <Card
            title="Communication Skills"
            des="My communication skills help me effectively collaborate with teams and clients, translating needs into actionable solutions.
                 I provide clear project updates and feedback for successful teamwork."
            icon={<FaTeamspeak/>}
          />
          <Card
            title="Video Editing and Content Creation"
            des=" I have a passion for video editing, creating Ai content optimized for platforms. This skill helps me stay innovative and 
                  apply unique visual strategies to my work."
            icon={<FaVideo />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
