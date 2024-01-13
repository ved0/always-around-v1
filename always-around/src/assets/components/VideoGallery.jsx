import { useEffect, useRef, useState} from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoGallery = (props) => {
  const videoElements = useRef([]);
  const galleryRef = useRef(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video URLs from your Express server
    fetch('http://localhost:5080/api/videos') // Update the URL accordingly
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  const IamPlayed = (index) => {
    console.log("video being played with index " + (index + 1));
    const currentVideo = videoElements.current[index];
    if (currentVideo) {
      currentVideo.requestFullscreen().then(() => {
        currentVideo.play();
        currentVideo.controls = false;
      });
    }
  };

  const handleScroll = (direction) => {
    const scrollAmount = 200; // Adjust as needed
    const scrollDirection = direction === "up" ? -scrollAmount : scrollAmount;
    galleryRef.current.scrollBy({
      top: scrollDirection,
      behavior: "smooth",
    });
  };

  let data = [
    {
      id: 1,
      title: "Video One",
      video_thumbnail_image: "http://i3.ytimg.com/vi/r8nXMA_pf0w/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 2,
      title: "Video Two",
      video_thumbnail_image: "http://i3.ytimg.com/vi/wm5gMKuwSYk/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 3,
      title: "Video One",
      video_thumbnail_image: "http://i3.ytimg.com/vi/r8nXMA_pf0w/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 4,
      title: "Video Two",
      video_thumbnail_image: "http://i3.ytimg.com/vi/wm5gMKuwSYk/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 5,
      title: "Video One",
      video_thumbnail_image: "http://i3.ytimg.com/vi/r8nXMA_pf0w/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 6,
      title: "Video Two",
      video_thumbnail_image: "http://i3.ytimg.com/vi/wm5gMKuwSYk/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 8,
      title: "Video One",
      video_thumbnail_image: "http://i3.ytimg.com/vi/r8nXMA_pf0w/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
    {
      id: 7,
      title: "Video One",
      video_thumbnail_image: "http://i3.ytimg.com/vi/r8nXMA_pf0w/hqdefault.jpg",
      video_url: "https://vimeo.com/900643328",
    },
  ];
  return (
    <div className="gallery-container">
      <div className="video-gallery" ref={galleryRef}>
        {videos.map((item, index) => {
          return (
            <div className="video" key={index}>
              <video
                ref={(el) => (videoElements.current[index] = el)}
                onPlay={() => IamPlayed(index)}
                src={item}
                width={"180px"}
                height={"150px"}
                controls
              ></video>
            </div>
          );
        })}
      </div>
      <div className="scrolling">
        <div className="scroll-up" onClick={() => handleScroll("up")}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        <div className="scroll-down" onClick={() => handleScroll("down")}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
};
export default VideoGallery;
