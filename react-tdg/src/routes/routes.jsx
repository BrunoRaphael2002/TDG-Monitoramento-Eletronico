import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home/home'
import AppMorador from "../pages/morador/morador";
import AppSindico from "../pages/sindico/sindico";
import ScrollToTop from "../componentes/scrolltotop/scroll"; 

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/morador" element={<AppMorador/>}/>
        <Route path="/sindico" element={<AppSindico />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
