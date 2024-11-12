import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS Software Engineer"
            subTitle="Khwaja Fareed University Of Engineering & Information Technology"
            result="CGPA 3.51/4"
            des="I completed a robust Software Engineering degree focus on Software Development Life Cycle"
          />
          <ResumeCard
            title="FSC Pre-Engineering"
            subTitle="Brookfield Collage (2018 - 2020)"
            result="76%"
            des="Studied foundational courses in mathematics, physics, and chemistry, building a strong analytical base for engineering. "
          />
          <ResumeCard
            title="Metric"
            subTitle="The Knowledge House School (2016 - 2018)"
            result="79%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jnr. Software Engineer"
            subTitle="Infosync - (02-05-2023 - internship)"
            result="Lahore"
            des="As an aspiring Software Engineer with hands-on experience in frontend development and a strong foundation in programming. "
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Virtue Netz- (2024)"
            result="Rahim Yar Khan"
            des="Frontend development and a strong foundation in programming, My proactive learning approach and passion for software engineering."
          />
          <ResumeCard
            title="Bussines Developemnt"
            subTitle="Digital Product Designe Company"
            result="India"
            des=" I'm Pro Video Editor also and helping to promote the company using upwork or digital platform"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
