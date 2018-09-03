import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from './components/hero';
import MainContent from './components/main-content';
// import PageContent from './components/page-content';
import Footer from './components/footer';
import PageWrapper from './components/page-wrapper';
import Header from './components/header';
/* import Descriptions from './components/descriptions';
import BottomContent from './components/bottom-content';
import Testimonials from './components/testimonials';
import Gallery from './components/gallery';
import TransparentContent from './components/transparent-content'; */
// import Intro from './components/intro';

const App = () => (
  <PageWrapper>
    <Header />
    <Hero />
    <MainContent />
    <Footer />

    {/*      <Descriptions />
    <TransparentContent />
    <Gallery />
    <Testimonials />
    <BottomContent />
     */}
  </PageWrapper>
);

export default App;
