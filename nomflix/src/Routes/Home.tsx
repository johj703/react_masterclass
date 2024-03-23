import { useQuery } from "react-query";
import { IGetMovieResult, getMovies } from "../api";

function Home() {
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });
  console.log(data, isLoading);
  return <div style={{ backgroundColor: "black", height: "200vh" }}>Home</div>;
}
export default Home;
