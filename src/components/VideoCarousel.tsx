import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils/images";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videosRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [loadedData, setLoadedData] = useState([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  // console.log(loadedData);

  useGSAP(() => {
    gsap.to("#slider", {
        transform: `translateX(${-100 * videoId}%)`,
        duration: 2,
        ease: "power2.inOut",
    });

    gsap.to("#video", {
        scrollTrigger: {
            trigger: "#video",
            toggleActions: "restart none none none",
        },
        onComplete: () => {
            setVideo((pre) => ({
                ...pre,
                startPlay: true,
                isPlaying: true,
            }));
        },
    });
}, [isEnd, videoId]);

  //progress bar
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current[videoId];
    let div = videoDivRef.current[videoId];
    if (span) {
      let animate = gsap.to(span, {
        onUpdate: () => {
          const progress = Math.ceil(animate.progress() * 100);
          if (progress != currentProgress) currentProgress = progress;

          gsap.to(div, {
            width:
              window.innerWidth < 768
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });

          //change background color
          gsap.to(span, {
            width: `${currentProgress}%`,
            backgroundColor: "white",
          });
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(div, { width: "12px" });
            gsap.to(span, { backgroundColor: "#afafaf" });
          }
        },
      });
      if (videoId === 0) {
        animate.restart();
      }

      const animateUpdate = () => {
        animate.progress(
          videosRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) gsap.ticker.add(animateUpdate);
      else gsap.ticker.remove(animateUpdate);
    }
  }, [videoId, startPlay]);


  useEffect(() => {
    //  console.log(loadedData.length);
      
      console.log(
        "effect video " +
          videoId +
          " isPlaying " +
          isPlaying +
          " isLastVideo " +
          isLastVideo
      );
  
      if (loadedData.length > 3) {
        if (!isPlaying) {
          videosRef.current[videoId].pause();
        } else {
          startPlay && videosRef.current[videoId].play();
        }
      }
  
    },
      [videoId, startPlay, isPlaying, loadedData]);
  

  const handleProgress = (type:string, i = 0) => {
    console.log("handleProcess");
    console.log(type);

    switch (type) {
        case "video-end":
            setVideo((pre) => ({
                ...pre,
                isEnd: true,
                videoId: i + 1,
            }));
            break;

        case "video-last":
            setVideo((pre) => ({
                ...pre,
                isLastVideo: true,
            }));
            break;
        case "video-reset":
            setVideo((pre) => ({
                ...pre,
                isLastVideo: false,
                videoId: 0,
            }));
            break;
        case "video-pause":
            setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
            break;
        case "video-play":
            setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
            break;
        default:
            return video;
    }
};

const handleLoadMetadata = (e) => {
    setLoadedData((pre) => [...pre, e]);
  };

  return (
    <>
      {/* video */}
      <div className="flex items-center  ">
        {hightlightsSlides.map((item, index) => (
          <div id="slider" key={`hightlight-${index}`} className="pr-10">
            <div className="relative sm:w-[70vw] w-[88vw] sm:h-[50vh] md:h-[70vh] h-[35vh] ">
              <div className="w-full h-full rounded-3xl bg-black overflow-hidden">
                <video
                  id="video"
                  playsInline={true}
                                    preload="auto"
                                    muted
                                    className={`${
                                        item.id === 2 && "translate-x-44"
                                    } pointer-events-none`}
                                    ref={(el) => (videosRef.current[index] = el)}
                                    onPlay={() =>
                                        setVideo((preVideo) => ({
                                            ...preVideo,
                                            isPlaying: true,
                                        }))
                                    }
                                    onEnded={() =>
                                        index !== 3
                                            ? handleProgress("video-end", index)
                                            : handleProgress("video-last", index)
                                    }
                                    onLoadedMetadata={(e) =>
                                        handleLoadMetadata(e)
                                    }
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>

              {/* content */}
              <div className="absolute top-12 left-[5%]">
                {item.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium ">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* sliders */}
      <div className="relative flex justify-center items-center mt-10">
        <div className="bg-gray-300 flex justify-center items-center px-7 py-5 rounded-full">
          {videosRef.current.map((item, index) => (
            <div
              key={`slider-${index}`}
              className="relative mx-2 w-3 h-3 bg-gray-200 rounded-full cursor-pointer "
              ref={(el) => (videoDivRef.current[index] = el)}
            >
              <span
                className=" absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[index] = el)}
              ></span>
            </div>
          ))}
        </div>

        {/* button play */}
        <button
          className="ml-3 bg-gray-300 rounded-full p-4 font-extrabold "
          onClick={() =>
            isLastVideo
              ? handleProgress("video-reset")
              : !isPlaying
              ? handleProgress("video-play")
              : handleProgress("video-pause")
          }
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt=""
            className="object-contain"
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
