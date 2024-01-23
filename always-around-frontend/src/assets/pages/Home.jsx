import Category from "../components/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import VideoGallery from "../components/VideoGallery";

const Home = () => {
  const [category, setCategory] = useState("");

  const playAllVideos = () => {
   setCategory("Alla videos");
  };

  const goBack = () => {
    setCategory("");
  };
  return (
    <section className="home-content">
      {category == "" ? (
        <div className="my-categories">
          <h1>Mina videos</h1>
          <div className="categories">
            <Category categoryName={"Good times"} setCategory={setCategory} />
            <Category categoryName={"Hälsningar"} setCategory={setCategory} />
          </div>
        </div>
      ) : (
        <div className="chosen-category">
          <div className="chosen-category-header">
            <FontAwesomeIcon
              icon={faPersonWalkingArrowRight}
              flip="horizontal"
              onClick={goBack}
            />
            <h1>{category}</h1>
          </div>
          <VideoGallery category={category} setCategory={setCategory}/>
        </div>
      )}
      <button className="play-all-videos" onClick={playAllVideos}type="button">
        <FontAwesomeIcon
          icon={faCirclePlay}
          size="2xl"
          style={{ color: "#468ec3" }}
        />
        Spela upp alla
      </button>
    </section>
  );
};

export default Home;
