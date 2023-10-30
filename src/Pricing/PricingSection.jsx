import React from "react";
import Pricingtoggle from "./Pricingtoggle";
import { useState } from "react";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);

  const pricingData = [
    {
      title: "Startup",
      price: "$0",
      description:
        "Description of the tier list will go here, copy should be concise and impactful",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
      ],
      buttonText: "Try for free",
      buttonColor: "bg-black text-white border-[#D3E763]",
    },
    {
      title: "Business",
      price: enabled ? "$120" : "$12",
      pricePeriod: enabled ? "/year" : "/month",
      description:
        "Description of the tier list will go here, copy should be concise and impactful",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
        "Calendar View",
        "24/7 Support",
      ],
      extraBenefits: "Everything in free plan, plus",
      buttonText: "Subscribe now",
      buttonColor: "bg-[#45B3BA] text-white border-transparent",
    },
    {
      title: "Agency",
      price: enabled ? "$120" : "$12",
      pricePeriod: enabled ? "/year" : "/month",
      description:
        "Description of the tier list will go here, copy should be concise and impactful",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
        "Calendar View",
        "24/7 Support",
      ],
      extraBenefits: "Everything in free plan, plus",
      buttonText: "Subscribe now",
      buttonColor: "border-[#45B3BA] text-white border-transparent",
    },
  ];

  const renderFeature = (text) => (
    <div className="flex items-center gap-x-3.5">
      <img className="h-6 w-6" src={checked} alt="" />
      <p className="text-base text-white/70 font-[400]">{text}</p>
    </div>
  );

  return (
    <div className="py-10 px-7 max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-y-3.5">
        <div className="flex flex-col gap-y-2">
          <div className="flex w-fit mx-auto items-center justify-center rounded-full bg-[#45B3BA]/20 text-[#45B3BA] border border-[#060606] py-1 px-5 font-bold text-xs">
            <span>PRICING</span>
          </div>

          <div className="flex items-center justify-center gap-x-3 mt-2.5">
            <h2 className="text-white md:text-3xl">Billed Monthly</h2>
            <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
            <span className="text-xs md:text-base text-white font-[400]">
              Billed Yearly (save 15%)
            </span>
          </div>
        </div>
      </div>

      <div className="pricing-card-container py-10 flex flex-col gap-y-5 md:flex-row md:gap-y-0 items-start justify-center gap-x-10 text-white">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="pricing-card pricing-container-dark border border-[#060606] cursor-pointer rounded-3xl p-7"
          >
            <div className="border-b border-[#D9D9D9]/10">
              <div className="pricing-content pb-5 flex flex-col gap-y-3">
                <h2 className="text-4xl">{item.title}</h2>
                <h2 className="text-4xl">
                  {item.price}
                  <span className="ml-1.5 text-xs text-white/50">
                    {item.pricePeriod}
                  </span>
                </h2>
                <p className="text-[#7D7D82] text-sm font-[400]">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col py-7 gap-y-3">
              {item.extraBenefits && (
                <p className="text-[#7D7D82] text-sm font-[400]">
                  {item.extraBenefits}
                </p>
              )}
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-x-3.5">
                  <p className="text-base text-white/70 font-[400]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="pb-3">
              <button
                className={`pricing-card-button border ${item.buttonColor} font-semibold hover:shadow-xl hover:shadow-black/50 text-base py-2.5 rounded-full w-full`}
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
