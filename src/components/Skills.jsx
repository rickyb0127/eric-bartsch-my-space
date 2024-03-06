import awsLambda from '../assets/images/logos/aws-lambda-logo.png';
import graphQL from '../assets/images/logos/graphql-logo.svg/';
import javaScript from '../assets/images/logos/javascript-logo.png';
import react from '../assets/images/logos/react-logo.svg';
import swift from '../assets/images/logos/swift-logo.svg';
import tailwindCSS from '../assets/images/logos/tailwind-logo.png';
import typescript from '../assets/images/logos/typescript-logo.svg';
import vue from '../assets/images/logos/vue-logo.svg';
import bootstrap from '../assets/images/logos/bootstrap-logo.png';
import css from '../assets/images/logos/css-logo.png';
import html from '../assets/images/logos/html-logo.png';
import mongo from '../assets/images/logos/mongo-logo.png';
import node from '../assets/images/logos/node-logo.png';
import postgres from '../assets/images/logos/postgresql-logo.png';
import ruby from '../assets/images/logos/ruby-logo.png';
import sequelize from '../assets/images/logos/sequelize-logo.png';

import { useEffect, useState } from 'react';

function Skills() {
  const skillsList = [
    {
      name: "JavaScript",
      image: javaScript
    },
    {
      name: "React.js",
      image: react
    },
    {
      name: "Vue.js",
      image: vue
    },
    {
      name: "HTML",
      image: html
    },
    {
      name: "CSS",
      image: css
    },
    {
      name: "Swift",
      image: swift
    },
    {
      name: "TailwindCSS",
      image: tailwindCSS
    },
    {
      name: "GraphQL",
      image: graphQL
    },
    {
      name: "Typescript",
      image: typescript
    },
    {
      name: "AWS Lambda",
      image: awsLambda
    },
    {
      name: "Node.js",
      image: node
    },
    {
      name: "Bootstrap",
      image: bootstrap
    },
    {
      name: "Sequelize",
      image: sequelize
    },
    {
      name: "PostgreSQL",
      image: postgres
    },
    {
      name: "MongoDB",
      image: mongo
    },
    {
      name: "Ruby",
      image: ruby
    }
  ];

  const getDisplayedSkills = () => {
    if(window.innerWidth < 800) {
      return skillsList.slice(0, 9);
    } else {
      return skillsList.slice(0, 8);
    }
  }

  const initialDisplayedSkills = getDisplayedSkills();
  const [displayedSkillsList, setDisplayedSkillsList] = useState(initialDisplayedSkills);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const toggleShowAllSkills = () => {
    if(showAllSkills) {
      setDisplayedSkillsList(initialDisplayedSkills);
      setShowAllSkills(false);
    } else {
      setDisplayedSkillsList(skillsList);
      setShowAllSkills(true);
    }
  };

  return (
    <div>
      <div className="flex bg-light-orange justify-between items-center py-[1px]">
        <div className="pl-[15px] text-dark-orange font-bold">Eric's Skills Space</div>
        <div className="pr-[15px] text-xs">
          <span>[</span>
          <span 
            className="cursor-pointer text-dark-blue hover:text-dark-orange" 
            onClick={() => toggleShowAllSkills()}
            >
            {showAllSkills ? "view less" : "view all"}
          </span>
          <span>]</span>
        </div>
      </div>
      <div className="grid mobile:grid-cols-3 tablet:grid-cols-4 desktop:grid-cols-4 gap-[20px] items-center py-[10px] justify-between">
        {
          displayedSkillsList.map((skill, index) => {
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div>{skill.name}</div>
                <div className="flex w-[95px] h-[95px] items-center justify-center">
                  <img className="max-h-full max-w-full" src={skill.image} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills;