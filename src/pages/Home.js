import { useQuery } from "@tanstack/react-query";
import Axios from "axios"

export const Home = () =>
{
    const {data:catData,isLoading,isError,refetch } = useQuery(["cat"], () =>
    {
       return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
        return <h1> Sorry, there was error;</h1>
    }

    if (isLoading) {
        return <h1>Lording...</h1>
    }


    return (
      <h1>
        This is the Home page and user is:<p>{catData?.fact}</p>
        <button onClick={refetch}>Update</button>
      </h1>
    );
  
};

export default Home
