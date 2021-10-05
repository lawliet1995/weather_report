import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  background-color: gainsboro;
  font-family: arial,sans-serif;
  font-size: 24px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  color: darkslategray;
  text-align: center;
`;

const formatTime = (s: string) => {
  return s.length === 1 ? '0' + s: s;
};

const getTime = () => {
  let result = "";
  const d = new Date();
  result += formatTime(d.getHours().toString())+" : "
          + formatTime(d.getMinutes().toString());

  //d.getFullYear() + "/" + (d.getMonth()+1) + "/" +d.getDate() + 
  return result;
}

class TimeBar extends React.Component {
  render() {
    return (
      <Time>
          {getTime()}
      </Time>
    );
  }
}


export default TimeBar;
