
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = (props) =>
{
    const { username } = useContext(AppContext)
    
    return <h1>This is the Home page and user is:{username }</h1>
  
};

export default Home
