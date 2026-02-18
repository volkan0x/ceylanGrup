"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import styles from "./VideoCarousel.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const videos = [
  {
    id: "1",
    url: "/img/1.mp4",
    title: "Time Özlüce",
    category: "Belgesel",
    date: "Mayıs 2022",
  },
  {
    id: "2",
    url: "/img/2.mp4",
    title: "Ceylan Plus",
    category: "Bilim Kurgu",
    date: "Haziran 2022",
  },
  {
    id: "3",
    url: "/img/3.mp4",
    title: "Ceylan Plaza",
    category: "Sanat",
    date: "Temmuz 2022",
  },
  {
    id: "4",
    url: "/img/4.mp4",
    title: "Ceylan Barış Sitesi",
    category: "Doğa",
    date: "Ağustos 2022",
  },
];

const VideoCarousel = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const getVideoIndex = (video) =>
    video ? videos.findIndex((item) => item.id === video.id) : -1;

  const handlePrevVideo = (event) => {
    event.stopPropagation();
    const currentIndex = getVideoIndex(activeVideo);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex - 1 + videos.length) % videos.length;
    setActiveVideo(videos[nextIndex]);
  };

  const handleNextVideo = (event) => {
    event.stopPropagation();
    const currentIndex = getVideoIndex(activeVideo);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % videos.length;
    setActiveVideo(videos[nextIndex]);
  };

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

  const handleOpenVideo = (event, video) => {
    event.stopPropagation();
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.slider} ref={sliderRef}>
        {videos.map((video) => (
          <div
            className={styles.card}
            data-video-card
            key={video.id}
            role="button"
            tabIndex={0}
            onClick={(event) => handleOpenVideo(event, video)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleOpenVideo(event, video);
              }
            }}
          >
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

            <div className={styles.cardPreview}>
              <video
                src={video.url}
                autoPlay
                muted
                loop
                playsInline
                className={styles.cardPreviewVideo}
              />
            </div>

            <div className={styles.videoPlayer}>
              <ReactPlayer
                url={video.url}
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
      {activeVideo && (
        <div className={styles.modal} onClick={handleCloseVideo}>
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleCloseVideo}
              aria-label="Kapat"
            >
              ×
            </button>
            <div className={styles.modalTitleBar}>
              <p className={styles.modalTitle}>{activeVideo.title}</p>
            </div>
            <div className={styles.modalPlayer}>
              <video
                src={activeVideo.url}
                controls
                autoPlay
                muted
                playsInline
                className={styles.modalVideo}
              />
            </div>
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.modalNavButton}
                onClick={handlePrevVideo}
                aria-label="Önceki video"
              >
                <span className={styles.navIcon} aria-hidden="true">
                  ‹
                </span>
              </button>
              <button
                type="button"
                className={styles.modalNavButton}
                onClick={handleNextVideo}
                aria-label="Sonraki video"
              >
                <span className={styles.navIcon} aria-hidden="true">
                  ›
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
