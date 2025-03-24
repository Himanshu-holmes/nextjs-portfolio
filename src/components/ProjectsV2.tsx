import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Github, Radio } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NeonGradientCard } from "./ui/neon-gradient-card";

export function ProjectsV2() {
  const data = [
    {
      title: "Ai-Grah-Proj",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700 "
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    Ai-Grah-Proj : PDF Processing and QA System
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"#"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/Himanshu-holmes/ai-grah-proj"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="text-lg line-clamp-4 text-ellipsis text-start">
                  This FastAPI and React.js application enables users to
                  seamlessly upload PDF files, extract text using PyMuPDF, and
                  store the extracted content as vector embeddings in FAISS for
                  efficient retrieval. Leveraging Google&#39;s Gemini AI, the
                  system allows users to query the uploaded documents, providing
                  intelligent question-answering capabilities for enhanced
                  information access and retrieval.
                </p>
              </div>
            </div>
            <div className="">
              <iframe
                // width="935"
                // height="526"
                className="w-full lg:w-[40vw] xl:w-[50vw] h-96 lg:h-[54vh]"
                src="https://drive.google.com/file/d/16SLICfF47GewNzznqmbuNqMfq5m3SdhR/preview?usp=sharing"
                title="cloud-ide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "Cloudide",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700 "
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    Cloud-ide: A Paltform for Coding
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"#"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/Himanshu-holmes/cloud-ide"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="text-lg line-clamp-4 text-ellipsis text-start">
                  Builded my own cloud editor there is main server running which
                  proxy request to their respective container used docker where
                  each user gets one container you can code in react and nodejs
                  both users can invite their friend to debug their code
                </p>
              </div>
            </div>
            <div className="">
              <iframe
                // width="935"
                // height="526"
                className="w-full lg:w-[40vw] xl:w-[50vw] h-96 lg:h-[54vh]"
                src="https://www.youtube.com/embed/GXQG3sAuUvM"
                title="cloud-ide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "School",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    School Web App: Freelance Project
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://rajschoolvns.edu.in/"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"#"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="text-lg line-clamp-4 text-ellipsis text-start">
                  delivered two fullstack School App Functionalities for
                  students : 1. Students can download their TC by providing
                  their tc no. and issued date and then can see their pdf blob
                  and also can download; 2. Parents can apply and fill their
                  admission form from the website; 3. After form fill up
                  automated email is to send to both parent and principal with
                  the preview of the form; 4. to confirm their form Parent can
                  pay the form fee by clicking on the pay button . 5. I have
                  used razorpay for payment integration; 6. After Payment
                  Successfull message will be send to the Parent and Principal;
                  7. Functionalities for principal : only admin 1. Principal can
                  upload notice file which is replaced by whenever a new notice
                  file is upload and data in the file can be fetch on website
                  with scrollup animation; 2. Principal can upload tc file by
                  providing required no.s and dates; 3. Principal can upload ,
                  view image in modal , and delete images from the website ; 4.
                  Principal can edit School and Staff information ; 5. Principal
                  can edit document name and upload pdf document ;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/projects/project1/p1.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project1/p2.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project1/p3.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project1/p4.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "OurssEstate",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    OurssEstate: Real Estate Web App
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://new-estate.onrender.com/"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/Himanshu-holmes/RealEstate"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="line-clamp-4 text-ellipsis text-start text-lg">
                  {/* Kabutar is a real-time chat application built with React,
                  Node.js, Express, and Socket.IO, featuring Cloudinary for
                  media handling and optimized performance using Redux Toolkit
                  for state management. */}
                  a responsive full-stack MERN real estate web application,
                  implementing OAuth-based authentication (sign-in, sign-up,
                  sign-out) and key features like search functionality, image
                  uploads, dynamic image sliders, and user-listing management,
                  enhancing user experience and engagement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/projects/project2/p1.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project2/p2.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project2/p3.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/assets/projects/project2/p4.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
    // {
    //   title: "Typing Panda",
    //   content: (
    //     <motion.div
    //       className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
    //       initial={{ scale: 0.8, opacity: 0 }}
    //       whileInView={{ scale: 1, opacity: 1 }}
    //       transition={{ duration: 0.3 }}
    //     >
    //       <NeonGradientCard className="items-center justify-center text-center">
    //         <div className="flex justify-between w-full">
    //           <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
    //             <div className="flex justify-between">
    //               <h3 className="text-2xl font-semibold mb-2 text-start">
    //                 Typing Panda: Vanila Fullstack Typing app
    //               </h3>
    //               <div className="flex space-x-2 h-full">
    //                 <Link
    //                   href={"https://typingpanda.netlify.app"}
    //                   target="_blank"
    //                   className="bg-black p-2 right-4  text-white rounded-full"
    //                 >
    //                   <Radio size={16} />
    //                 </Link>
    //                 <Link
    //                   href={"https://github.com/sachu0dev/Typing_Panda"}
    //                   target="_blank"
    //                   className="bg-black p-2  text-white rounded-full"
    //                 >
    //                   <Github size={16} />
    //                 </Link>
    //               </div>
    //             </div>
    //             <p className="line-clamp-4 text-ellipsis text-start text-lg">
    //               Typing Panda: Interactive game to enhance typing skills with
    //               customizable features for all skill levels.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="grid grid-cols-2 gap-4">
    //           <Image
    //             src="/assets/projects/project3/p1.png"
    //             alt="hero template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project3/p2.png"
    //             alt="feature template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project3/p3.png"
    //             alt="bento template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project3/p4.png"
    //             alt="cards template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //         </div>
    //       </NeonGradientCard>
    //     </motion.div>
    //   ),
    // },
  ];
  return (
    <div className="w-full dark font-DegularBold">
      <Timeline data={data} />
    </div>
  );
}
