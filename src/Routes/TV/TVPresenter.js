import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  null;

TVPresenter.Proptypes = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
};

export default TVPresenter;
