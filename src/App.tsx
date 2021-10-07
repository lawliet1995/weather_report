import React from 'react';
import Title from './components/Title/Title';
import TimeBar from './components/TimeBar/TimeBar';
import Weather from './components/Weather/Weather';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFF1E6;
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  height: 400px;
  padding: 8px;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 15px #d2bfb0;
`;

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };

  render() {
    return (
      <Container>
          <Title>  
            台北市
          </Title>
          <TimeBar />
          <Weather />
        </Container>
    );
  }
}


export default App;
