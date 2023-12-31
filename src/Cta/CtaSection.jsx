import React from "react";

export default function CtaSection() {
  return (
    <section className="cta__section max-w-5xl bg-[#45B3BA]/20 lg:rounded-lg mx-auto py-14 lg:pb-20 px-5 lg:px-0">
      <div className="rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-white text-center">
          The online safe deposit box for your clients digital assets
        </h3>
        <p className="text-sm text-white max-w-lg mx-auto text-center">
          BePrepared is a secure, white-labelled digital vault used to
          confidentially store and distribute your clients' cryptocurrency,
          passwords
        </p>
        <button className="bg-[#45B3BA] w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-white font-semibold text-sm lg:text-base rounded px-4 py-2">
          Register for free
        </button>
      </div>
    </section>
  );
}
