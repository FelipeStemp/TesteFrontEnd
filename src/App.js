import './App.css';
import ClassGet from './Page/classPage/class';
import Comments from './Page/comments/coment';
import Footer from './Page/footer/footer';
import Home from './Page/home/home';
import JoinUs from './Page/joinUs/join';
import PricePlans from './Page/pricePlans/price';
import Program from './Page/programs/program';

function App() {
  return (
    <>
      <Home />
      <Program />
      <ClassGet />
      <JoinUs />
      <PricePlans />
      <Comments />
      <Footer />
    </>
  );
}

export default App;
