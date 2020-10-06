import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? null : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => show.name)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => show.name)}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
};

export default TVPresenter;
