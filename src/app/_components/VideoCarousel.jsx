"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import styles from "./VideoCarousel.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const videos = [
  {
    id: "711863471",
    title: "Cineprint",
    category: "Belgesel",
    date: "Mayıs 2022",
  },
  {
    id: "478246234",
    title: "Yosemite",
    category: "Bilim Kurgu",
    date: "Haziran 2022",
  },
  {
    id: "387407107",
    title: "Orihima",
    category: "Sanat",
    date: "Temmuz 2022",
  },
  {
    id: "704562417",
    title: "Grace Rutina",
    category: "Doğa",
    date: "Ağustos 2022",
  },
];

const VideoCarousel = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && sliderRef.current) {
      initializeCards();
    }
  }, [isClient]);

  const initializeCards = () => {
    const cards = Array.from(
      sliderRef.current.querySelectorAll("[data-video-card]")
    );

    gsap.to(cards, {
      y: (i) => 0 + 20 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "power3.out",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll("[data-video-card]"));
    const lastCard = cards.pop();

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "power3.inOut",
      onStart: () => {
        setTimeout(() => {
          slider.prepend(lastCard);
          initializeCards();
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        }, 300);
      },
    });
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.slider} ref={sliderRef}>
        {videos.map((video) => (
          <div className={styles.card} data-video-card key={video.id}>
            <div className={styles.cardInfo}>
              <div className={styles.cardItem}>
                <p>{video.date}</p>
              </div>
              <div className={`${styles.cardItem} ${styles.cardItemCenter}`}>
                <p>{video.title}</p>
              </div>
              <div className={`${styles.cardItem} ${styles.cardItemRight}`}>
                <p>{video.category}</p>
              </div>
            </div>

            <div className={styles.videoPlayer}>
              <ReactPlayer
                url={`https://vimeo.com/${video.id}`}
                controls={false}
                autoPlay={true}
                loop={true}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
