import codingPractice from '../assets/images/projects/coding-practice.png';
import hangulPractice from '../assets/images/projects/hangul-practice.png';
import koreanVocab from '../assets/images/projects/korean-vocab.png';
import netflix from '../assets/images/projects/netflix.png';

import { useState } from "react";

function Projects() {
  const projectsList = [
    {
      name: "Coding Practice",
      decsription: "Tool created to practice algorithm problems, featuring an interactive terminal utilizing codemirror and React",
      image: codingPractice
    },
    {
      name: "Korean Vocab",
      decsription: "Flash card-like app to learn the most common words in the Korean language. Features Korean-English toggle and speech for Korean",
      image: koreanVocab
    },
    {
      name: "Netflix Clone",
      decsription: "Netflix clone using themoviedb as an api source for top movies and tv shows, built using Vue",
      image: netflix
    },
    {
      name: "Hangul Practice",
      decsription: "Tool to practice Hangul (Korean writing) utilizing Web Speech API to access text to speech, HTML Canvas to capture user drawn image, and Google Cloud Vision API as an OCR to compare the user drawn image to the correct Korean text",
      image: hangulPractice
    },
  ];

  const [showProjectDetailsList, setShowProjectDetailsList] = useState([]);

  const toggleShowProjectDetail = (projectIndex) => {
    const updatedShowProjectDetailsList = [...showProjectDetailsList];
    const found = updatedShowProjectDetailsList.indexOf(projectIndex);

    if(found !== -1) {
      updatedShowProjectDetailsList.splice(found, 1);
    } else {
      updatedShowProjectDetailsList.push(projectIndex);
    }

    setShowProjectDetailsList(updatedShowProjectDetailsList);
  };

  return (
    <div>
      <div className="font-bold">Eric's Latest Projects</div>
      <div className="flex flex-col justify-between">
        {
          projectsList.map((project, index) => {
            return (
              <div key={index} className="flex flex-row gap-[5px] pb-[5px]">
                <div>
                  <span className="font-bold">{project.name}</span>
                  <span> - {project.decsription}</span>
                  <span className="pl-[10px]">(</span>
                  <span 
                    className="cursor-pointer text-dark-blue hover:text-dark-orange" 
                    onClick={() => toggleShowProjectDetail(index)}
                    >
                    {showProjectDetailsList.includes(index) ? "show less" : "show more"}
                  </span>
                  <span>)</span>
                  {showProjectDetailsList.includes(index) && 
                    <div>
                      <img src={project.image} />
                    </div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;