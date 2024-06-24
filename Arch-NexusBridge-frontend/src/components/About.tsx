import ComponentLayout from "@/pages/layout/ComponentLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
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
      <div className="md:pb-12 pb-8">
        <div
          className=" w-full bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url('/circular.gif')",
          }}
        >
         
        </div>
        <div className="w-full md:px-4 px-10 pb-0 mb-8 max-w-2xl mx-auto mt-4">
          <div className="flex mb-6 items-center">
            <p className="md:text-base text-xs font-medium text-white text-center">
              <span className="text-pink-400 font-bold">NexusBridge</span> 
              Our mission is to expose the centralized aspects of many blockchain projects that prioritize profit and convenience. We are committed to creating a range of decentralized applications, blockchain protocols, and open-source libraries to advance the principles of decentralization and innovation.
            </p>
          </div>

          <div className="mb-6 items-center">
            <p className="md:text-lg text-sm font-medium text-white text-center">
              Interested in learning more about NexusBridge or working with{" "}
              <span className=" text-pink-400 font-bold">NexusBridge</span>?
            </p>
            <p className="md:text-base text-xs font-medium text-white text-center">
            Feel free to reach out to us through our contact form or connect with us on our social media channels.
            </p>
          </div>

          <div className="flex mb-6 items-start justify-between">
            <p className="md:text-lg text-sm text-white text-left">
              <span className="text-pink-400 font-bold">E-mail :</span>{" "}
              NexusBridgedao.@gmail.com
            </p>
            <div className="flex">
              {logoConfig.map((item, index) => (
                <Link key={index} href={item.href} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    src={item.image}
                    alt="LOGO"
                    className="mr-3 hover:opacity-60"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default About;
