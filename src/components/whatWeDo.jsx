import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <div>
        <motion.div
            initial={{ opacity: 0, y: 100 }} // Start hidden
            whileInView={{ opacity: 1, y: 0 }} // Animate on scroll
            transition={{ duration: 1, ease: "easeOut" }} // Smoothness
            viewport={{ once: true }} // Run once
            className="content_section mt-[80px]"
          >
    <div className="what_we_do_section bg-[#111]">
      <div className="what_we_do py-[100px] max-w-7xl mx-auto px-4">
        <div className="py-[50px] max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h5
              className="font-spezia font-bold text-[#fff]
                text-[clamp(1.25rem,0.9375rem+0.333333vw,1.875rem)] 
                tracking-[0.115em] 
                uppercase"
            >
              What We Do
            </h5>
            <button className="bg-[#fff] rounded-[30px] text-[#111] text-[16px] px-[25px] py-[10px]">
              See All Service
            </button>
          </div>

          {/* 👇 Transition Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Start hidden
            whileInView={{ opacity: 1, y: 0 }} // Animate on scroll
            transition={{ duration: 1, ease: "easeOut" }} // Smoothness
            viewport={{ once: true }} // Run once
            className="content_section mt-[80px]"
          >
            <h1
              className="h-full visible relative block top-0 mb-[20px]
              font-sans font-bold
              max-w-[clamp(50rem,37.5rem+22.2222vw,75rem)]
              text-[clamp(5.3125rem,3.98438rem+2.36111vw,7.96875rem)]
              leading-[0.889] tracking-[-0.05em] text-[#fff]"
            >
              Craft & <br /> Creative
            </h1>

            <p className="font-sans font-[600] w-[50%] text-[16px] leading-[22px] text-[#fff] mt-[30px]">
              We are the people who make things—the artists and engineers behind
              some of the most influential ad campaigns on the internet.
            </p>

            <p className="font-sans font-[600] w-[50%] text-[16px] leading-[22px] text-[#fff] mt-[30px]">
              Known for our expertise in digital production, we like to think of
              ourselves as the new ideal in creative partnership for growing
              brands and products.
            </p>

            <p className="font-sans font-[600] w-[50%] text-[16px] leading-[22px] text-[#fff] mt-[30px]">
              From ads and content to experiences and experiments, our
              production-led approach to creative development has made us friends
              with many of the world’s leading brand teams.
            </p>


          </motion.div>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
}
