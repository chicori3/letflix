import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading }) => null;

DetailPresenter.Proptypes = {
  result: Proptypes.object,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
};

export default DetailPresenter;
