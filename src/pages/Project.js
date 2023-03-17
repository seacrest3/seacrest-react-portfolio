import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import ProjectGallery from "../ProjectGallery.json";

function Project() {
  return (
    <Wrapper>
      <Title>Project Portfolio</Title>
      {ProjectGallery.map((ProjectGallery) => {
        return (
          <ProjectCard
            name={ProjectGallery.name}
            image={ProjectGallery.image}
            website={ProjectGallery.website}
            github={ProjectGallery.github}
          />
        );
      })}
</Wrapper>
  );
}

export default Project;
