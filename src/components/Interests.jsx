function Interests() {
  const interestsList = [
    {
      category: "General",
      values: "Technology, Cooking, Video Games, Fitness, Pyschology, Golf, Dogs, Learning new things"
    },
    {
      category: "Music",
      values: "Crywolf, Anberlin, Taylor Swift, The Weeknd, Nas, JID, SZA, TWICE"
    },
    {
      category: "Movies",
      values: "Back to the Future, Inception, Mission Impossible"
    },
    {
      category: "Television",
      values: "Breaking Bad, The Office, I Think You Should Leave, Nathan for You"
    },
    {
      category: "Books",
      values: "Dune, The Count of Monte Cristo"
    }
  ];

  return (
    <div className="border-[2px] border-main-blue">
      <div className="bg-main-blue py-[1px] text-white font-bold">
        <span className="pl-[15px]">Eric's Interests</span>
      </div>
      <div className="flex flex-col justify-between p-[5px]">
        {
          interestsList.map((interest, index) => {
            return (
              <div key={index} className={`flex flex-row gap-[5px] ${index !== interestsList.length - 1 ? 'pb-[5px]' : ''}`}>
                <div className="w-[30%] bg-light-blue p-[5px] text-dark-blue font-bold">{interest.category}</div>
                <div className="w-[70%] bg-lightest-blue p-[5px]">{interest.values}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Interests;