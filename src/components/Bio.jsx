import headshot from '../assets/images/headshot.jpeg';

function Bio() {
  const getAge = () => { 
    const dob = new Date("12-29-1985");
    const diffInMs = Date.now() - dob.getTime();
    const ageDateTime = new Date(diffInMs); 
    const age = Math.abs(ageDateTime.getUTCFullYear() - 1970);

    return age;
  };

  const address = {
    state: "COLORADO",
    city: "Arvada",
    country: "United States"
  };

  return (
    <div>
      <h3 className="text-xl font-bold">Eric</h3>
      <div className="flex mobile:flex-col tablet:flex-col desktop:flex-row py-4 gap-[20px]">
        <div className="mobile:w-full tablet:w-full desktop:w-[60%]">
          <img className="min-w-[200px] max-w-[240px]" src={headshot} />
        </div>
        <div className="flex flex-col mobile:w-full tablet:w-full desktop:w-[40%] justify-around gap-[15px]">
          <div>"I enjoy learning and building cool things. I value personal growth, integrity and open communication."</div>
          <div>
            {/* TODO find fix for parsing date issue with ios */}
            {/* <div>{getAge()} years old</div> */}
            <div>38 years old</div>
            <div>{address.city},</div>
            <div>{address.state},</div>
            <div>{address.country}</div>
          </div>
          <div>Last Login: 05/01/2004</div>
        </div>
      </div>
      <div>
        <span className="font-bold">Mood:</span> productive
      </div>
    </div>
  )
}

export default Bio;