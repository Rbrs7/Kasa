import Collapse from "../components/Collapse";
import BannerAbout from "../components/BannerAbout";
import aboutData from "../data/aboutData";

export default function About() {
  return (
    <div className="about">
      <BannerAbout />
      {aboutData.map((data) => {
        return (
          <div key={data.id} className="about_collapse">
            <Collapse
              title={data.title}
              content={data.content}
            />
          </div>
        );
      })}
    </div>
  );
}
