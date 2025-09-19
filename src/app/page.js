"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay blocked:", err);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const whatWeMakeSections = [
    {
      title: "A Branding Toolkit",
      heading: "Branding the <br /> 20th Anniversary <br /> of Google Maps",
      description:
        "To celebrate the 20th anniversary of Google Maps, we developed a creative toolkit that would define the launch of every Google Geo anniversary campaign in 2025 and celebrate a global community of billions.",
      footer: "— Made with Google",
      imgSrc:
        "https://cdn.sanity.io/images/qckremhp/production/26525a8de5df4ce277f11a31db933041ae596b74-1200x1200.png?w=1440&q=95&fit=clip&auto=format",
      alt: "Google Maps 20th Anniversary",
    },
    {
      title: "A research hub",
      heading: "Building a<br /> Website for <br /> Language <br/> Inclusivity",
      description:
        "Most websites about AI initiatives put technology front and center, but we designed this site with focus on humanity and the accessibility this technology provides.",
      footer: "— Made with Google",
      imgSrc:
        "https://cdn.sanity.io/images/qckremhp/production/c55bfd0639d8a0beb7b78a236cf7d45271286200-4800x4800.png?w=1440&q=95&fit=clip&auto=format",
      alt: "Language Inclusivity Website",
    },
    {
      title: "A product launch",
      heading: "Bringing Ideas to<br /> Life with Google <br /> Labs",
      description:
        "We created a launch video that taps into that moment in the creative process when inspiration clicks into place, and made it accessible to anyone who wants to try it.",
      footer: "— Made with Google",
      imgSrc:
        "https://cdn.sanity.io/images/qckremhp/production/c4516464cf2c650f567440ec411424a7b8c98867-3600x3600.png?w=1440&q=95&fit=clip&auto=format",
      alt: "Google Labs Launch",
    },
  ];

  const artCraftSections = [
    {
      title: "Honors",
      heading: "Hook Wins Three Webbys for Amplifying Language Inclusion",
      description:
        "We’re celebrating the internet’s highest honor with wins in Accessible Technology and Responsible AI.",
      footer: "From The Webby Awards",
      imgSrc:
        "https://cdn.sanity.io/images/qckremhp/production/d5f6ebacc4d6d1bddb4a8a461468dd300c008e12-1200x1200.png?w=1440&q=95&fit=clip&auto=format",
      alt: "Google Maps 20th Anniversary",
      duration: "2 minute read",
    },
    {
      title: "Production Tools",
      heading: "Creative Content at Scale with Gen AI",
      description:
        "How we're combining new generative AI tools with existing automation tools to produce large amounts of bespoke creative content.",
      footer: "— Made at look",
      imgSrc:
        "https://cdn.sanity.io/images/qckremhp/production/afce8bb5268111e900fb2a70d6a007af71cb6fb7-1200x1200.png?w=1440&q=95&fit=clip&auto=format",
      alt: "Language Inclusivity Website",
      duration: "3 minute read",
    },
    {
      title: "Ideas",
      heading: "Ad Age — How Hook Keeps Clients Long-Term",
      description:
        "Our ECD outlines our approach to agency retainers and shares ten tips for building retained teams that keep long-term clients and creatives happy.",
      footer: "feat. Ryan Michlitsch, Executive Creative Director",
      imgSrc:
        "https://cdn.sanity.io/images/qckremhp/production/8b144b522f140cd4399464f97752b59713cc5542-1200x1200.jpg?w=1440&q=95&fit=clip&auto=format",
      alt: "Google Labs Launch",
      duration: "2 minute read",
    },
  ];

  return (
    <>
      <div className="banner_section py-[100px] max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1
          className="h-full visible relative block top-0 mb-[20px]
        [transform:translate(0px,0px)]
        [perspective:1000px]
        font-sans font-bold
        max-w-[clamp(50rem,37.5rem+22.2222vw,75rem)]
        text-[clamp(5.3125rem,3.98438rem+2.36111vw,7.96875rem)]
        leading-[0.889] tracking-[-0.05em]"
        >
          The Creative Production Agency
        </h1>

        {/* Subtitle */}
        <p
          className="h-full visible relative block top-0
        [transform:translate(0px,0px)]
        [perspective:1000px]
        font-sans font-bold
        text-[clamp(1.125rem,0.84375rem+0.5vw,1.6875rem)]
        leading-[1]
        tracking-[0px]
        mt-[40px]"
        >
          An Ad Age Small Agency of the Year & Best Place to Work
        </p>

        {/* Video Section */}
        <div className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg mt-[50px]">
          <video
            ref={videoRef}
            className="w-full h-auto"
            autoPlay
            muted={isMuted}
            playsInline
            controls={false}
          >
            <source
              src="https://cdn.sanity.io/files/qckremhp/production/07ea12026ef2198c52150d41ef07bc64cb52d6a3.webm"
              type="video/webm"
            />
            <source
              src="https://cdn.sanity.io/files/qckremhp/production/939f08899bc5a7b2739fb6d8a557268a915ed66c.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center transition"
          >
            {isPlaying ? (
              <Pause className="w-16 h-16 text-white drop-shadow-lg" />
            ) : (
              <Play className="w-16 h-16 text-white drop-shadow-lg" />
            )}
          </button>

          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="what_we_do_section bg-[#111]">
        <div className="what_we_do py-[100px] max-w-7xl mx-auto px-4">
          <div className="py-[50px] max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <h5 className="font-spezia font-bold text-[#fff]
                text-[clamp(1.25rem,0.9375rem+0.333333vw,1.875rem)] 
                tracking-[0.115em] 
                uppercase">What We Do
              </h5>
              <button className="bg-[#fff] rounded-[30px] text-[#111] text-[16px] px-[25px] py-[10px]" >See All Service</button>
            </div>
            <div className="bg-[#f5f5f5]">

            </div>
          </div>
          <div className="content_section">
            <h1
              className="h-full visible relative block top-0 mb-[20px]
        [transform:translate(0px,0px)]
        [perspective:1000px]
        font-sans font-bold
        max-w-[clamp(50rem,37.5rem+22.2222vw,75rem)]
        text-[clamp(5.3125rem,3.98438rem+2.36111vw,7.96875rem)]
        leading-[0.889] tracking-[-0.05em] text-[#fff]"
            >
              Craft & <br />Creative
            </h1>

            {/* Subtitle */}
            <p
              className="h-full visible relative block top-0
            [transform:translate(0px,0px)]
            [perspective:1000px]
            font-sans font-[600]
            w-[50%]
            text-[16px]
            leading-[22px]
            tracking-[0px] text-[#fff]
            mt-[30px]"
            >
              We are the people who make things—the artists and engineers behind some of the most influential ad campaigns on the internet.
            </p>
            <p
              className="h-full visible relative block top-0
            [transform:translate(0px,0px)]
            [perspective:1000px]
            font-sans font-[600]
            w-[50%]
            text-[16px]
            leading-[22px]
            tracking-[0px] text-[#fff]
            mt-[30px]"
            >
              Known for our expertise in digital production, we like to think of ourselves as the new ideal in creative partnership for growing brands and products.
            </p>
            <p
              className="h-full visible relative block top-0
            [transform:translate(0px,0px)]
            [perspective:1000px]
            font-sans font-[600]
            w-[50%]
            text-[16px]
            leading-[22px]
            tracking-[0px] text-[#fff]
            mt-[30px]"
            >
              From ads and content to experiences and experiments, our production-led approach to creative development has made us friends with many of the world’s leading brand teams.
            </p>

          </div>
        </div>
      </div>
      <div className="py-[50px] max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h5 className="font-spezia font-bold 
         text-[clamp(1.25rem,0.9375rem+0.333333vw,1.875rem)] 
         tracking-[0.115em] 
         uppercase">What We Make</h5>
          <button className="bg-[#111] rounded-[30px] text-[#fff] text-[16px] px-[25px] py-[10px]" >See All Work</button>
        </div>
        <div className="bg-[#f5f5f5]">
          {whatWeMakeSections.map((section, index) => (
            <div
              key={index}
              className="group cursor-pointer container mx-auto flex flex-col md:flex-row items-center md:items-center px-6 py-16 min-h-screen"
            >
              <div className="w-full md:w-2/5 space-y-6 text-left flex flex-col justify-center h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#111]">
                  {section.title}
                </p>

                <h2
                  className="font-spezia font-bold text-[clamp(1.75rem,1rem+2vw,3rem)] leading-tight 
                   group-hover:underline decoration-4 underline-offset-4 transition"
                  dangerouslySetInnerHTML={{ __html: section.heading }}
                ></h2>

                <p className="text-[#111] font-[600] text-lg leading-relaxed">
                  {section.description}
                </p>

                <p className="font-semibold uppercase text-sm tracking-[0.15em]">
                  {section.footer}
                </p>
              </div>

              <div className="w-full md:w-3/5 mt-10 md:mt-0 md:pl-12">
                <img
                  src={section.imgSrc}
                  alt={section.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[50px] max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h5 className="font-spezia font-bold 
         text-[clamp(1.25rem,0.9375rem+0.333333vw,1.875rem)] 
         tracking-[0.115em] 
         uppercase">Arts & Craft</h5>
          <button className="bg-[#111] rounded-[30px] text-[#fff] text-[16px] px-[25px] py-[10px]" >Read More</button>
        </div>
        <div className="bg-[#f5f5f5]">
          {artCraftSections.map((section, index) => (
            <div
              key={index}
              className="group cursor-pointer container mx-auto flex flex-col md:flex-row items-center md:items-center px-6 py-16 min-h-screen"
            >
              <div className="w-full md:w-1/3 space-y-6 text-left flex flex-col justify-center h-full">
                <img
                  src={section.imgSrc}
                  alt={section.alt}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#111]">
                  {section.title}
                </p>

                <h2
                  className="font-spezia font-bold text-[clamp(1.75rem,1rem+2vw,3rem)] leading-tight w-full
                   group-hover:underline decoration-4 underline-offset-4 transition"
                  dangerouslySetInnerHTML={{ __html: section.heading }}
                ></h2>

                <p className="text-[#111] font-[500] text-lg leading-relaxed mt-4">
                  {section.description}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <p className="font-[500] uppercase text-sm tracking-[0.15em]">
                    {section.footer}
                  </p>
                  <p className="font-[500] uppercase text-sm tracking-[0.15em]">
                    {section.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
