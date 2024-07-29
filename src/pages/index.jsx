import About from "../components/about";
import Categories from "../components/categories";
import Contact from "../components/contact";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Home from "../components/home";
import Navbar from "../components/navbar";
import Project from "../components/project";
import Main from "../layout/main";

function Index() {
  return (
    <Main>
      <Navbar />
      <Home />
      <Categories />
      <About />
      <Gallery />
      <Contact />
      <Project />
      <Faq />
      <Footer />
    </Main>
  );
}

export default Index;
