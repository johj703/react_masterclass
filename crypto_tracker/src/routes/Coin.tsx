import { useParams } from "react-router";

function Coin() {
  const {params} = useParams();
  console.log(params)
  return <h1>Coin</h1>
}
export default Coin;