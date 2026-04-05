import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);

  const { name, imageKey, description, gradient, url, tech } = project;

  const image = PROJECT_IMAGES[imageKey];

  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <a
      href={url || undefined}
      className={`overflow-hidden rounded-3xl snap-start link ${additionalClasses}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative max-w-full overflow-hidden`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={styles.projectImage}
        />
        {/* dark gradient overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-2/3 z-10 rounded-b-3xl"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          }}
        />
        {/* title top-left */}
        <h3
          className="absolute top-4 left-5 font-semibold text-sm z-20 transform-gpu px-3 py-1 rounded-full"
          style={{
            transform: "translateZ(3rem)",
            background: "rgba(10,10,10,0.75)",
            color: "#c4b5fd",
            backdropFilter: "blur(6px)",
          }}
        >
          {name}
        </h3>
        {/* description pinned to bottom */}
        <p
          className="absolute bottom-5 left-5 right-5 text-sm sm:text-base z-20 tracking-wide font-medium transform-gpu"
          style={{
            transform: "translateZ(0.8rem)",
            color: "rgba(200,200,200,0.9)",
          }}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectTile;
