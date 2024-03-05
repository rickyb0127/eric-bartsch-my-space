function Schools() {
  const schoolsList = [
    {
      name: "Galvanize",
      location: "Boulder, CO",
      graduatedYear: 2015,
      areaOfStudy: "6 month coding bootcamp"
    },
    {
      name: "Johnson & Wales University",
      location: "Providence, RI",
      graduatedYear: 2009,
      major: "Hospitality Management"
    },
    {
      name: "Apponequet High School",
      location: "Lakeville, MA",
      graduatedYear: 2004
    }
  ];

  return (
    <div className="border-[2px] border-main-blue">
      <div className="bg-main-blue py-[1px] text-white font-bold">
        <span className="pl-[15px]">Eric's Schools</span>
      </div>
      <div className="flex flex-col justify-between p-[5px]">
        {
          schoolsList.map((school, index) => {
            return (
              <div key={index} className={`flex flex-row gap-[5px] ${index !== schoolsList.length - 1 ? 'pb-[5px]' : ''}`}>
                <div className="w-full bg-light-blue p-[5px]">
                  <div className="text-dark-blue font-bold">{school.name}</div>
                  <div>{school.location}</div>
                  <div>Graduated: {school.graduatedYear}</div>
                  {school.major && <div>Major: {school.major}</div>}
                  {school.areaOfStudy && <div>Area of Study: {school.areaOfStudy}</div>}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Schools;