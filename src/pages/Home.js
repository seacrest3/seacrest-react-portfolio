import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="../components/Hero/picture-1a">
        <h1>Lee Kwok Leung</h1>
        <h2>Web Developer's work life is amazing. Challenging yet enjoyable...</h2>
        <h2>Work hard and play hard!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>I am a dedicated and organized web developer. I am good in interpersonal skills and excellent as a team worker. For professional development, I am keen and very willing to learn and develop new skills.
              I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done. I am determined and decisive.
              I can identify and develop opportunities.
            </p>
            <p>I'm a friendly and honest person. I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills.
              I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
