import HeaderTop from "./components/layouts/header-top";
import Header from "./components/layouts/header";
import Hero from "./components/landing-page/hero";
import Products from "./components/landing-page/products";
import Infrastructure from "./components/landing-page/infrastructure";
import Clients from "./components/landing-page/clients";
import ContactUs from "./components/landing-page/contact-us";
import Footer from "./components/layouts/footer";
import Bottomnav from "./components/layouts/bottom-nav";
import FloatIcon from "./components/common/float-icon";
import SEO from "./components/seo";

function App() {
  // Scroll to section handler
  const handleMenuClick = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="App">

      {/* SEO */}
      <SEO />

      <HeaderTop />

      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="infrastructure">
          <Infrastructure />
        </section>

        <section id="clients">
          <Clients />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </main>

      <Footer />

      <Bottomnav onMenuClick={handleMenuClick} />

      <FloatIcon />

    </div>
  );
}

export default App;