import React from "react";
import integrateImg from "../assets/integrationimg.svg";

export default function IntegrationSection() {
  return (
    <section className="integrate__section max-w-5xl mx-auto py-10">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-5">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-sm mx-auto text-center">
            Most popular integration apps{" "}
          </h2>
          <button className="rounded-full border border-white px-5 py-2 text-white">
            View all apps
          </button>
        </div>
        <div className="flex items-center justify-center overflow-hidden py-10">
          <img className="w-full h-full" src={integrateImg} alt="" />
        </div>
      </div>
    </section>
  );
}
