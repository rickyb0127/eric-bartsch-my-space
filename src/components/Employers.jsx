function Employers() {
  const employersList = [
    {
      name: "DMC Global",
      jobTitle: "Full Stack Developer",
      dates: "August 2022 - April 2023",
      description: "Worked to port existing quoting tool built in vbscript into a modern web application using React as a frontend framework"
    },
    {
      name: "Nerkle",
      jobTitle: "Software Systems Engineer II",
      dates: "January 2019 - August 2022",
      description: "Worked remotely with a small team to develop applications, using various technologies"
    },
    {
      name: "American Express",
      jobTitle: "Software Engineer III",
      dates: "July 2015 - January 2017",
      description: "Worked on automated testing framework utilizing Selenium's interface, implemented to test and deploy applications within GCAP division"
    }
  ];

  return (
    <div>
      <div className="bg-light-orange py-[1px] text-dark-orange font-bold">
        <span className="pl-[15px]">Eric's Employers Space</span>
      </div>
      <div className="flex flex-col pt-[10px] justify-between">
        {
          employersList.map((employer, index) => {
            return (
              <div key={index} className="flex flex-row h-[160px] gap-[5px] pb-[5px]">
                <div className="flex flex-col text-center items-center bg-dark-orange w-[30%] p-[5px]">
                  <div className="text-dark-blue font-bold">{employer.name}</div>
                  <div>{employer.jobTitle}</div>
                </div>
                <div className="bg-light-orange w-[70%] p-[5px]">
                  <div className="font-bold">{employer.dates}</div>
                  <div>{employer.description}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Employers;