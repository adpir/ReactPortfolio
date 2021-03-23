import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row/index";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero>
        <h1>ALICE PIAR</h1>
        <h2>Creative, Passionate, Designer, Leader and Software Engineer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              A true creative at heart both on and off of the computer, I have always enjoyed making things work
              and look the way that they should. Born in the U.S. territory of Puerto Rico, I always dreamed of
              coming to the states to immerse myself in the culture and learn English. I moved here 11 years ago
              and have been in Minneapolis ever since. I have a bachelors in Theatre, have always been involved in
              the arts, and love finding new ways to get creative.
              I have been working at a software company for the last five years and recently, I completed a full
              stack advanced coding program at the University of Minnesota that expanded my creative toolbelt
              immensely. I enjoy tackling problems, have a strong range of leadership experience in multiple
              fields of work, and work well with others. Recently I was nominated as a “Transformer” by the team I
              lead for my hard work and dedication within the company. I look forward to opportunities to create
              or augment existing systems in ways that ‘wow’ people and make a real, long lasting impressions.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
