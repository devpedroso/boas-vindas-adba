"use client";

import { useState } from "react";
import { Button, Image } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AnimatedSection from "../../../components/generic/AnimatedSection";

const Contributions = () => {
  const [value, setValue] = useState("45275005000165");
  const [copied, setCopied] = useState(false);

  const onCopyToClipboard = () => {
    !copied && setTimeout(() => setCopied(false), 2000);
    setCopied(true);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <AnimatedSection animate="animate__bounceInLeft animate__delay-0s">
        <div className="title text-white text-[32px]">Contribua</div>
      </AnimatedSection>

      <div className="text-2xl text-[var(--complement)]">
        <AnimatedSection animate="title animate__bounceInRight animate__delay-0s">
          Dízimos e ofertas
        </AnimatedSection>
        <AnimatedSection animate="animate__zoomIn animate__delay-0s">
          <Image
            src="/assets/QRCODE.jpg"
            className="max-w-96 py-2"
            preview={false}
          />
        </AnimatedSection>
        <AnimatedSection animate="title animate__bounceInRight animate__delay-0s">
          Chave PIX
        </AnimatedSection>
        <AnimatedSection animate="title animate__zoomIn animate__delay-0s">
          <div className="flex flex-col items-center gap-2 justify-around">
            <p className="text-lg">CNPJ: 45.275.005.0001/65</p>
            <CopyToClipboard text={value} onCopy={onCopyToClipboard}>
              <Button className="pulse animate__animated animate__pulse animate__infinite">
                {copied ? (
                  <div className="flex items-center gap-2">
                    <CheckOutlined />
                    <p className="text-sm text-black">Copiado</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CopyOutlined />
                    <p className="text-sm text-black">Copiar</p>
                  </div>
                )}
              </Button>
            </CopyToClipboard>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contributions;
