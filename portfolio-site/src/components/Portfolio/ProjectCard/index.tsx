import React from "react";
import "./index.scss";
import { Card } from "primereact/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  description: string;
  cover: string;
  hover: string;
  url: string;
  stack: string[];
  github: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  cover,
  hover,
  stack,
  url,
  github,
}) => {
  const header = <img alt="Card" src={hover} />;

  return (
    <Card
      className="project-card"
      title={title}
      style={{ width: "25em" }}
      header={header}
    >
      <p className="m-0" style={{ lineHeight: "2.5", color: "#003049" }}>
        {description}
      </p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="ffd700" />
        </a>
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLink} color="ffd700" />
          </a>
        ) : (
          <></>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
