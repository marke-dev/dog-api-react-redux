import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import BreedContainer from "./containers/BreedContainer";
import BreedsContainer from "./containers/BreedsContainer";
import SubBreedContainer from "./containers/SubBreedContainer";
import { getBreeds } from "./redux/actions/breeds";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);
  return (
    <Router>
      <ScrollToTop/>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<BreedsContainer />} />

        <Route path="/breed/:id" element={<BreedContainer />} />

        <Route path="/breed/:breed/sub-breed/:sub" element={<SubBreedContainer />} />
      </Routes>
    </Router>
  );
}
export default App;
