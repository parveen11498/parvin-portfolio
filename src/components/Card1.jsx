import React from "react";
import { motion } from "framer-motion";
import { projects1 } from '../constants/constants';
import { ExternalLinks, Tag, TagList, UtilityList, } from './ProjectsStyles';

const Card1 = () => {
  return (
    <div> {projects1.map((p, i) => {
      return (

        <motion.div key={i}
          initial={"hidden"}
          whileInView={"visible"}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
        >

          <a href="hello">


            <img style={{ height: "250px" }}
              class="rounded-t-lg w-full"
              src={p.image}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="helo">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {p.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {p.description}
            </p>
            <div>
              <h6 style={{ textAlign: "center" }} class="mb-2 text-2xl font-bold textAlign-center text-gray-900 ">Stack</h6>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.frontend} target="_blank" rel="noopener noreferrer">Frontend</ExternalLinks>
              <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">visit</ExternalLinks>
              <ExternalLinks href={p.backend} target="_blank" rel="noopener noreferrer">backend</ExternalLinks>
            </UtilityList>
          </div>
        </motion.div>
      );
    })}</div>


  )
};

export default Card1;
