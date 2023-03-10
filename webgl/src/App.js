// import { Main } from "./ModalRouter/Main";
// import { Modal } from "./ModalRouter/Modal";
// import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import Data from "./JohnSmilga/Birthday/Tourist/Data";
// import Home from "./Home";
// import Birthday from "./JohnSmilga/Birthday/Birthday";
// import Create from "./JohnSmilga/Birthday/Create";
// import AppMain from "./JohnSmilga/Birthday/Tourist/AppMain";
// import Question from "./JohnSmilga/Questions/Question";
// import Reviews from "./JohnSmilga/Reviews/Reviews";
// import Slider from "./Slider/Slider";
// import Data from "./FanShop/Data";
// import Context from "./JohnSmilga/Context";
// import Form from "./JohnSmilga/Form";
// import Tourist from "./JohnSmilga/Tourist/Tourist";
import FoodBud from "./JohnSmilga/FoodBud/FoodBud";
import HomeQuestion from "./JohnSmilga/Questions/HomeQuestion";
import HomeReview from "./JohnSmilga/Reviews/HomeReview";
import Tab from "./JohnSmilga/Tabs.jsx/Tab";
import Navbar from "./JohnSmilga/Navbar/Navbar";
import Hero from "./JohnSmilga/Submenu/Hero";
function App() {
  // const location = useLocation();
  // const background = location.state && location.state.background;
  return (
    <div className="App">
      {/* <Routes location={background || location}>
        <Route path="/" element={<Main />}>
          <Route path="modal" element={<Modal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
        </Routes>
      )} */}
      {/* <Home /> */}
      {/* <AppMain /> */}

      {/* <Data /> */}
      {/* <Form /> */}
      {/* <Tourist /> */}
      <Navbar />
      <Hero />
      <HomeQuestion />
      <HomeReview />
      <Tab />
      {/* <Slider /> */}
      <FoodBud />
      {/* <Birthday /> */}
    </div>
  );
}

export default App;
