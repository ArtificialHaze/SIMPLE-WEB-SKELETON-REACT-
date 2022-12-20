import Company from "./Company";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Courses from "./Courses";
import Choose from "./Choose";
import Features from "./Features";
import FreeCourse from "./FreeCourse";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection/>
      <Company/>
      <About/>
      <Courses/>
      <Choose/>
      <Features/>
      <FreeCourse/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default Home;
