import ComponentLayout from "@/pages/layout/ComponentLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  const logoConfig = [
    {
      image: "/github_logo.svg",
      href: "",
    },
    {
      image: "/youtube_logo.svg",
      href: "",
    },
    {
      image: "/medium_logo.svg",
      href: "",
    },
  ];

  return (
    <ComponentLayout>
      <div className="md:pb-12 pb-8 bg-dark text-white">
        <div
          className="w-full bg-center bg-contain bg-no-repeat h-[300px]"
          style={{
            
          }}
        ></div>
        <div className="w-full md:px-4 px-10 pb-0 mb-8 max-w-4xl mx-auto mt-4">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-mintGreen mb-4">
              NexusBridge
            </h2>
            <p className="md:text-base text-xs font-medium text-center mb-4">
              Our mission is to expose the centralized aspects of many blockchain projects that prioritize profit and convenience. We are committed to creating a range of decentralized applications, blockchain protocols, and open-source libraries to advance the principles of decentralization and innovation.
            </p>
            <p className="md:text-lg text-sm font-medium text-center mb-2">
              Interested in learning more about NexusBridge or working with{" "}
              <span className="text-mintGreen font-bold">NexusBridge</span>?
            </p>
            <p className="md:text-base text-xs font-medium text-center">
              Feel free to reach out to us through our contact form or connect with us on our social media channels.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            {logoConfig.map((item, index) => (
              <Link key={index} href={item.href} target="_blank">
                <Image
                  width={40}
                  height={40}
                  src={item.image}
                  alt="LOGO"
                  className="hover:opacity-60"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default About;
