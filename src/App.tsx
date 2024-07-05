import "./styles/globas.css";
import "animate.css";

import { Image } from "antd";

import { CopyToClipboard } from "react-copy-to-clipboard";

import SocialMedia from "./components/pages/SocialMedia";
import Lyrics from "./components/pages/Lyrics";
import Tema from "./components/pages/Tema";
import AnimatedSection from "./components/generic/AnimatedSection";
import Footer from "./components/generic/Footer";
import Contributions from "./components/pages/Contributions";

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <Image
            src="/assets/TAMO_JUNTO_LOGO.png"
            alt=""
            className="animate__animated animate__fadeInDown p-10"
            width={375}
            preview={false}
          />
        </div>

        <div className="flex gap-2 pb-4 justify-center">
          <div className="title text-white text-[32px] animate__animated animate__jackInTheBox">
            CONFERÊNCIA LIFE
          </div>
          <div className="title text-[32px] text-[var(--complement)] animate__animated animate__jackInTheBox animate__delay-3s">
            2K24
          </div>
        </div>

        <SocialMedia />
        <Lyrics />
      </div>
      <div>
        <Tema />

        <div className="container flex flex-col gap-4 p-4 pt-8">
          <Contributions />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
