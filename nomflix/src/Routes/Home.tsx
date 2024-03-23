import { useQuery } from "react-query";
import { IGetMovieResult, getMovies } from "../api";
import styled from "styled-components";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });
  console.log(data, isLoading);
  return <Wrapper>{isLoading ? <Loader>Loading</Loader> : null}</Wrapper>;
}
export default Home;
