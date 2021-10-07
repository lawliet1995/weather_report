import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  background-color: #fde2e4;
  font-family: arial,sans-serif;
  font-size: 24px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  color: #f286ae;
  text-align: center;
  border-radius: 6px;
  margin: 0 18px;
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
