import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import ProjectGallery from "../ProjectGallery.json";

function Project() {
  return (
    <Wrapper>
      <Title>Project Portfolio</Title>
      {ProjectGallery.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            website={project.website}
            github={project.github}
          />
        );
      })}
</Wrapper>
  );
}

export default Project;
