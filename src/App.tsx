import "./styles/globas.css";
import "animate.css";

import { Image } from "antd";

import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import WorshipDate from "./components/WorshipDate";

const App = () => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <Image
          src="/assets/TAMO_JUNTO_LOGO.png"
          alt=""
          className="animate__animated animate__fadeInDown p-6"
          width={92}
          preview={false}
        />
      </div>

      <div className="flex gap-2 justify-center">
        <div className="title text-white text-[24px] animate__animated animate__jackInTheBox">
          Seja bem-vindo à familia
        </div>
        <div className="title text-[24px] text-[var(--complement)] animate__animated animate__jackInTheBox animate__delay-3s">
          ADBA!
        </div>
      </div>


      <div className="title-secondary text-white text-base text-center p-2 animate__animated animate__jackInTheBox">
        Temos uma mensagem para seu <span>coração</span>
      </div>

      <div className="title text-center h-64 bg-white">VIDEO</div>

      <WorshipDate />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default App;
