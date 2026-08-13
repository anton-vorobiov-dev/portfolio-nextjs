"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  achievements,
  experiences,
  languages,
  profile,
  skillGroups,
} from "@/lib/profile";

const contactInfo = [
  { fieldName: "Name", fieldValue: profile.name },
  { fieldName: "Location", fieldValue: profile.location },
  { fieldName: "Experience", fieldValue: `${profile.experienceYears} years` },
  { fieldName: "Email", fieldValue: profile.email },
  { fieldName: "Phone (UA)", fieldValue: profile.phones[0].label },
  { fieldName: "Phone (HR)", fieldValue: profile.phones[1].label },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[calc(100svh-120px)] py-12 xl:min-h-[calc(100svh-152px)] xl:pt-8 xl:pb-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col items-stretch gap-10 xl:h-[clamp(500px,calc(100svh-220px),680px)] xl:flex-row xl:items-start xl:gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 xl:shrink-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full min-w-0 xl:h-full">
            <TabsContent value="experience" className="w-full min-h-0 xl:h-full">
              <div className="flex flex-col gap-[30px] text-center xl:h-full xl:text-left">
                <div>
                  <h2 className="text-4xl font-bold">Professional experience</h2>
                  <p className="max-w-[700px] mt-4 text-white/60 mx-auto xl:mx-0">
                    Eight years of frontend delivery across SaaS, AdTech, CRM,
                    analytics, real-time products, and distributed teams.
                  </p>
                </div>

                <ScrollArea className="h-[520px] pr-4 xl:min-h-0 xl:flex-1">
                  <ol className="flex flex-col gap-5">
                    {experiences.map((item) => (
                      <li
                        key={`${item.company}-${item.duration}`}
                        className="bg-[#232329] p-6 md:p-8 rounded-xl text-left"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                          <div>
                            <h3 className="text-xl font-semibold">{item.position}</h3>
                            <p className="text-accent">{item.company}</p>
                          </div>
                          <div className="md:text-right shrink-0">
                            <p className="text-accent">{item.duration}</p>
                            <p className="text-sm text-white/50">{item.location}</p>
                          </div>
                        </div>
                        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/65">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0"
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="w-full min-h-0 xl:h-full">
              <div className="flex flex-col gap-[30px] text-center xl:h-full xl:text-left">
                <div>
                  <h2 className="text-4xl font-bold">Key achievements</h2>
                  <p className="max-w-[700px] mt-4 text-white/60 mx-auto xl:mx-0">
                    Measurable outcomes from performance optimization,
                    migrations, component architecture, and UX improvements.
                  </p>
                </div>

                <ScrollArea className="h-[520px] pr-4 xl:min-h-0 xl:flex-1">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {achievements.map((achievement) => (
                      <li
                        key={achievement.title}
                        className="bg-[#232329] p-6 md:p-8 rounded-xl text-left"
                      >
                        <p className="text-4xl font-extrabold text-accent leading-none">
                          {achievement.value}
                        </p>
                        <h3 className="text-xl font-semibold mt-5">
                          {achievement.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          {achievement.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full min-h-0 xl:h-full">
              <div className="flex flex-col gap-[30px] text-center xl:h-full xl:text-left">
                <div>
                  <h2 className="text-4xl font-bold">Technical skills</h2>
                  <p className="max-w-[700px] mt-4 text-white/60 mx-auto xl:mx-0">
                    A frontend-first toolkit spanning architecture, testing,
                    delivery, UI systems, real-time applications, and AI-assisted workflows.
                  </p>
                </div>

                <ScrollArea className="h-[500px] pr-4 xl:min-h-0 xl:flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {skillGroups.map((group) => (
                      <section
                        key={group.title}
                        className="bg-[#232329] p-6 rounded-xl text-left"
                      >
                        <h3 className="text-lg font-semibold text-accent">
                          {group.title}
                        </h3>
                        <ul className="flex flex-wrap gap-2 mt-5">
                          {group.items.map((skill) => (
                            <li
                              key={skill}
                              className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/75"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full min-h-0 text-center xl:h-full xl:text-left"
            >
              <div className="flex flex-col gap-[30px] xl:h-full">
                <div>
                  <h2 className="text-4xl font-bold">About me</h2>
                  <p className="max-w-[780px] mt-4 text-white/60 mx-auto xl:mx-0">
                    {profile.summary}
                  </p>
                </div>

                <ScrollArea className="h-[520px] pr-4 xl:min-h-0 xl:flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[860px]">
                    <section className="bg-[#232329] p-6 rounded-xl text-left">
                      <h3 className="text-lg font-semibold text-accent">Details</h3>
                      <dl className="mt-5 space-y-3">
                        {contactInfo.map((item) => (
                          <div key={item.fieldName} className="flex flex-wrap gap-x-3">
                            <dt className="text-white/50">{item.fieldName}:</dt>
                            <dd className="break-all">{item.fieldValue}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>

                    <section className="bg-[#232329] p-6 rounded-xl text-left">
                      <h3 className="text-lg font-semibold text-accent">Languages</h3>
                      <dl className="mt-5 space-y-4">
                        {languages.map((language) => (
                          <div
                            key={language.name}
                            className="flex items-center justify-between gap-4"
                          >
                            <dt>{language.name}</dt>
                            <dd className="text-white/50">{language.level}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
