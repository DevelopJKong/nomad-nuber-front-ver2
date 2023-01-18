import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
   ${tw`min-h-full bg-red-500 h-full`}
`;

const Content = styled.div`
   ${tw`text-xl text-white`}
`;

function App() {
   return (
      <Container>
         <Content>123</Content>
      </Container>
   );
}

export default App;
