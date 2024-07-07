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
          width={128}
          preview={false}
        />
      </div>

      <div className="flex gap-2 justify-center animate__animated animate__zoomIn animate__delay-0">
        <div className="title text-white text-[24px] ">
          Seja bem-vindo à familia
        </div>
        <div className="title text-[24px] text-[var(--complement)]">ADBA!</div>
      </div>

      <div className="title-secondary text-white text-base text-center p-2 animate__animated animate__zoomIn animate__delay-0">
        Temos uma mensagem para seu <span>coração</span>
      </div>

      <video
        id="video"
        width="100%"
        controls
        controlsList="nodownload"
        disablePictureInPicture
        preload="auto"
        playsInline
        poster="/assets/BG_VIDEO.png"
      >
        <source src="/assets/VIDEO_PASTOR.mov" type="video/webm" />
        <source src="/assets/VIDEO_PASTOR.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      <WorshipDate />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default App;
