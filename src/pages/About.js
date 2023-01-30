import { ChangeProfile } from "../components/ChangeProfile";

import { useContext } from "react";
import { AppContext } from "../App";

export const About = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      THIS THE ABOUT PAGE: {username}
      <ChangeProfile />
    </div>
  );
};

export default About;
