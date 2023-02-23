import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="home">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"></link>
      <Banner />
      <Gallery />
    </div>
  );
}
