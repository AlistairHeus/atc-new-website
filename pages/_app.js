import "../styles/index.css";
import Nav from "../components/Navbar";
import Footer from "../components/footer";

import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
