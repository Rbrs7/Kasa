import "../styles/houses.scss";
import { useParams } from "react-router-dom";
import React from "react";
import datas from "../data/data";
import Error from "./NotFound";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";
import redStar from "../assets/red_star.png";
import greyStar from "../assets/grey_star.png";

export default function Houses() {
  const currentId = useParams("id").id;
  console.log(currentId);

  const house = datas.filter((d) => d.id === currentId);

  if (house.length === 0) {
    // erreur
    return <Error />;
  }
  const currentData = house;
  console.log(currentData);

  const description = currentData[0].description;
  const equipments = currentData[0].equipments;
  const rating = currentData[0].rating;
  const name = currentData[0].host.name;
  console.log(name);
  const hostPic = currentData[0].host.picture;

  return (
    <main className="house">
      <Carrousel pictures={currentData[0].pictures} />
      <div className="house_content">
        <div className="house_flex">
          <div className="house_infos">
            <h1>{currentData[0].title}</h1>
            <p>{currentData[0].location}</p>
            {currentData[0].tags.map((tag, index) => {
              return <button key={index}>{tag}</button>;
            })}
          </div>

          <div className="house_autor">
            <div className="house_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
            <div className="house_hostPic_name">
              <span>{name}</span>
              <img
                className="house_hostPic"
                src={hostPic}
                alt="house's host"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <section className="house_collapse">
        <div className="house_collapse_item">
          <Collapse title={"Description"} content={description} />
        </div>
        <div className="house_collapse_item">
          <Collapse title={"Équipements"} content={equipments} />
        </div>
      </section>
    </main>
  );
}
