import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
}) => null;

SearchPresenter.Proptypes = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
  searchTerm: Proptypes.string,
  handleSubmit: Proptypes.func.isRequired,
};

export default SearchPresenter;
