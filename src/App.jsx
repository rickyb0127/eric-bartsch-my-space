import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="mobile:max-w-[none] tablet:max-w-[none] desktop:max-w-[1200px] mobile:px-none tablet:px-none desktop:px-8 mx-auto">
      <NavBar />
      <Profile />
    </div>
  )
}

export default App;
library.add(fab, fas, far);