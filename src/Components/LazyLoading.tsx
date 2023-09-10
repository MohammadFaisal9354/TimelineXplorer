import styled, { keyframes } from "styled-components";

// Define the keyframes for animations
const loadingBounce = keyframes`
  0% { transform: scale(1, 0.7); background: #0dc8f4; }
  40% { transform: scale(0.8, 1.2); background: #0dc8f4; }
  60% { transform: scale(1, 1); background: #0dc8f4; }
  100% { bottom: 140px; background: #0dc8f4; }
`;

const loadingStep = keyframes`
  0% {
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                0 10px 0 #fff,
                -35px 50px 0 #fff,
                -70px 90px 0 #fff;
  }
  100% {
    box-shadow: 0 10px 0 #fff,
                -35px 50px 0 #fff,
                -70px 90px 0 #fff,
                -70px 90px 0 rgba(0, 0, 0, 0);
  }
`;

// Styled components for the loader
const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  width: 120px;
  height: 90px;
  z-index: 999; /* Ensure the loader appears on top of other content */
  overflow: hidden; /* Block scroll */
`;

const LoaderBefore = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #0dc8f4; /* Change the background color to blue */
  animation: ${loadingBounce} 0.5s ease-in-out infinite alternate;
`;

const LoaderAfter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 7px;
  width: 45px;
  border-radius: 4px;
  box-shadow: 0 5px 0 #fff, -35px 50px 0 #fff, -70px 95px 0 #fff;
  animation: ${loadingStep} 1s ease-in-out infinite;
`;

const LazyLoading = () => {
  return (
    <LoaderContainer>
      <LoaderBefore />
      <LoaderAfter />
    </LoaderContainer>
  );
};

export default LazyLoading;
