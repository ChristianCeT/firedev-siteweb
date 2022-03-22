import Footer from "../components/Layout/Footer/Footer";
import Main from "../components/Main/Main";
import CarouselPersonalized from "../components/CarouselPersonalized/CarouselPersonalized"
import Services from "../components/ServicesComponent/Services"

export default function Home() {
  return (
    <>
      <Main></Main>
      <CarouselPersonalized></CarouselPersonalized>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}
