"use client";

import SocialMediaItem from "../SocialMediaItem";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-5 text-white p-4">
      <div className="animate__animated animate__bounceInLeft leading-[18px] ">
        <div className="title text-[18px]">Siga nossas</div>
        <div className="title text-[24px] text-[var(--complement)]">
          Redes Sociais
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 max-w-[416px] animate__animated animate__bounceInRight">
        <SocialMediaItem
          href="https://www.instagram.com/geracaolife/"
          src="/assets/icons/instagram_icon.png"
          text="@geracaolife"
        />

        <SocialMediaItem
          href="https://www.instagram.com/adbaoficial/"
          src="/assets/icons/instagram_icon.png"
          text="@adbaoficial"
        />

        <SocialMediaItem
          href="https://www.facebook.com/geracaolifeAdba"
          src="/assets/icons/face_icon.png"
          text="geracaolife"
        />

        <SocialMediaItem
          href="https://www.facebook.com/ADBAararaquara"
          src="/assets/icons/face_icon.png"
          text="ADBA Oficial"
        />

        <SocialMediaItem
          href="https://www.youtube.com/@ADBAOFICIAL"
          src="/assets/icons/youtube_icon.png"
          text="ADBA Oficial"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
