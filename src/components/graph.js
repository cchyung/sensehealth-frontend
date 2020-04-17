import React from 'react';
import styled from 'styled-components';

function Graph({src}) {
    return(
        <GraphImage src={src}></GraphImage>
    )
}

const GraphImage = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
`;

export default Graph;