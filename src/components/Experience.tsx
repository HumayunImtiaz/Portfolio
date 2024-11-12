import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend"
            subTitle="Virtue Netz- (2024)"
            result="Rahim Yar Khan"
            des="Frontend development and a strong foundation in programming, My proactive learning approach and passion for software engineering."
          />
          <ResumeCard
            title="Bussines Development"
            subTitle="Disgital Product Design"
            result="India"
            des="I'm Pro Video Editor also and helping to promote the company using upwork or digital platform."
          />
          <ResumeCard
            title="Professional Video Editor and Adda maker"
            subTitle="Digital Media"
            result="Lundon"
            des="As a video editor and Ai content creator serv almost 1.2 years"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Infosync"
            subTitle="Frontend Developer"
            result="Remotely"
            des="This is first step i join to the company as a frontend developer and gain very strong experience"
          />
          <ResumeCard
            title="Software Engineer (SDLC)"
            subTitle="Z-ZONE"
            result="Remotely"
            des="Join the training for gain very well experience how the project life cycle work."
          />
          <ResumeCard
            title="Assistant Professor "
            result="KFUEIT"
            des="This is very well experience how to manage shadule of work."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
