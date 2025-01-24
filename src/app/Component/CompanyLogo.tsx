import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  // Array of logos
  const logos = [
    { id: 0, src: "/Logo.png", alt: "Logo" },
    { id: 1, src: "/Logo1.png", alt: "Logo 1" },
    { id: 2, src: "/Logo2.png", alt: "Logo 2" },
    { id: 3, src: "/Logo3.png", alt: "Logo 3" },
    { id: 4, src: "/Logo4.png", alt: "Logo 4" },
    { id: 5, src: "/Logo5.png", alt: "Logo 5" },
    { id: 6, src: "/Logo6.png", alt: "Logo 6" },
  ];

  return (
    <div className=" mt-14">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {logos.map((logo) => (
          <div key={logo.id} className="w-32 h-20 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
