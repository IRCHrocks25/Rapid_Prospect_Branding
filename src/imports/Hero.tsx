"use client";

import * as React from "react";
import imgHero from "figma:asset/91adc766b1205f595aa50f4db3f2b02a40094294.png";
import { useWorkshopForm } from "./WorkshopFormContext";

function HeadlineContainer() {
  return (
    <div className="flex items-center justify-center w-full" data-name="Headline Container">
      <div className="w-full text-center tracking-[-0.03em]">
        <p className="mb-0">
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.24] text-[#0d1353] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[37.789px]">
            {"How to Position Yourself as the  "}
          </span>
          <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] italic leading-[1.24] text-[#0d1353] text-[23px] sm:text-[30px] md:text-[36px] lg:text-[40px]">
            {"AI Adoption Specialist "}
          </span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.24] text-[#0d1353] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[37.789px]">
            {"That Enterprises Are Desperately Seeking "}
          </span>
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.24] text-[#aa45e8] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[37.789px]">
          (And Willing to Pay $15K-$50K Per Engagement)
        </p>
      </div>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div
      className="w-full max-w-[640px] lg:max-w-[900px] mx-auto h-[176px] sm:h-[272px] md:h-[360px] lg:h-[540px] relative rounded-[12px] overflow-hidden"
      style={{
        boxShadow: "0 8px 40px rgba(107,36,160,0.25)",
      }}
    >
      <iframe
        src="https://drive.google.com/file/d/1wBzB2g5TP3kXI11Kw7SMCl9Mhyo4bIrL/preview"
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="AI Change Management Workshop"
      />
    </div>
  );
}

function BelowVideoContent() {
  const { openForm } = useWorkshopForm();

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[900px] mx-auto text-center">
      <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353]">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-2 text-[17px] sm:text-[19px] md:text-[22px] leading-[1.4]">
          {"Free 2-hour executive workshop reveals why 95% of AI implementations fail,"}
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#0d1353]/70">
          {"and how YOU can become the consultant who fixes what $500M in technology spending couldn't."}
        </p>
      </div>
      {/* CTA Button */}
      <div
        onClick={openForm}
        className="flex items-center justify-center px-6 md:px-[43px] py-[11px] rounded-[27px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          backgroundImage: "linear-gradient(161.704deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)",
        }}
      >
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.25] text-[13px] sm:text-[15px] md:text-[16.567px] text-center text-white uppercase tracking-wide whitespace-nowrap">
          RESERVE MY FREE WORKSHOP SEAT
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full min-h-[480px] md:min-h-[580px]" data-name="hero">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgHero}
      />
      <div className="relative w-full">
        <div className="max-w-[1728px] mx-auto flex flex-col items-center justify-center w-full pt-12 pb-12 md:pt-20 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-[120px] gap-8 md:gap-10">
          <HeadlineContainer />
          <VideoPlaceholder />
          <BelowVideoContent />
        </div>
      </div>
    </div>
  );
}