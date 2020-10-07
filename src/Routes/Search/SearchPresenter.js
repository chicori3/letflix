import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  updateTerm,
  searchTerm,
  error,
  loading,
  handleSubmit,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="검색"
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="영화">
            {movieResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV 프로그램">
            {tvResults.map((show) => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
  updateTerm: Proptypes.func.isRequired,
  searchTerm: Proptypes.string,
  handleSubmit: Proptypes.func.isRequired,
};

export default SearchPresenter;
