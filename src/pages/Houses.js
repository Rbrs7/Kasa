import { useParams } from "react-router-dom";

export default function Houses() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Description du logement..</h1>
    </div>
  );
}
