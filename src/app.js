import Hero from './components/hero';
import MainContent from './components/main-content';
import Footer from './components/footer';
import PageWrapper from './components/page-wrapper';
import Header from './components/header';

const App = () => (
  <PageWrapper>
    <Header />
    <Hero />
    <MainContent />
    <Footer />
  </PageWrapper>
);

export default App;
