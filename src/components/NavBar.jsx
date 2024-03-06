import myspace from '../assets/images/myspace.png';

function NavBar() {
  const menuItems = [
    {
      name: "Home",
      link: null
    },
    {
      name: "Browse",
      link: null
    },
    {
      name: "Search",
      link: null
    },
    {
      name: "Invite",
      link: null
    },
    {
      name: "Film",
      link: null
    },
    {
      name: "Mail",
      link: null
    },
    {
      name: "Blog",
      link: null
    },
    {
      name: "Favorites",
      link: null
    },
    {
      name: "Forum",
      link: null
    },
    {
      name: "Groups",
      link: null
    },
    {
      name: "Events",
      link: null
    },
    {
      name: "Videos",
      link: null
    },
    {
      name: "Music",
      link: null
    },
    {
      name: "Comedy",
      link: null
    },
    {
      name: "Classifieds",
      link: null
    }
  ];
  
  return (
    <nav className="w-[100%]">
      <div className="flex items-center h-[64px] bg-dark-blue">
        <img className="pl-[20px] h-[40px]" src={myspace} />
        <h1 className="text-2xl font-medium text-white">Inspired by myspace</h1>
      </div>
      <div className="h-[32px] bg-main-blue">
        {/* <div className="flex justify-center gap-[5px]">
          {
            menuItems.map((item, index) => {
              return (
                <div key={index} className="flex gap-[5px]">
                  <span className={`text-white ${item.link ? 'cursor-pointer' : ''}`}>{item.name}</span>
                  {index !== menuItems.length - 1 &&
                    <span>|</span>
                  }
                </div>
              )
            })
          }
        </div> */}
      </div>
    </nav>
  )
}

export default NavBar;