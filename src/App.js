

import Slider from './Components/Carousel/slider';
import "react-id-swiper/src/styles/scss/swiper.scss";
import "./styles.scss";

const App = () => (
  <div style={{
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    margin: "0 auto",
    marginTop: "100px",
    width: "80%",
  }}>
    <Slider />
  </div>
);

export default App;
