"use client";

import { Image } from "antd";

const SocialMediaItem = ({ href, src, text }) => {
  return (
    <div>
      <a href={href}>
        <div className="flex gap-2 items-center">
          <Image preview={false} src={src} width={32} height={32} />
          <div className="title text-base ">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaItem;
