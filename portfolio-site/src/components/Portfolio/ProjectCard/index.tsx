import React from "react";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface Props {
  title: string;
  description: string;
  cover: string;
  hover: string;
  url: string;
  stack: string[];
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  cover,
  hover,
  stack,
  url,
}) => {
  const header = <img alt="Card" src={hover} />;
  const footer = (
    <span>
      <Button label="Save" />
      <Button label="Cancel" />
    </span>
  );

  return (
    <div>
      <Card
        title={title}
        subTitle={stack}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "2.5" }}>
          {description}
        </p>
      </Card>
    </div>
  );
};

export default ProjectCard;
