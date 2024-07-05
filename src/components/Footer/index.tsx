import { Image } from "antd";

const Footer = () => (
  <div className="flex items-center justify-center gap-16 h-24">
    <Image
      src="/assets/ADBA_BRANCO1.png"
      alt=""
      width={72}
      preview={false}
      className="-mt-[12px]"
    />
    <Image
      src="/assets/geração-life-BRANCO1.png"
      alt=""
      width={72}
      preview={false}
    />
  </div>
);

export default Footer;
