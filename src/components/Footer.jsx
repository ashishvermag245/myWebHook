import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#111] pt-[50px] pb-[20px] md:pt-[80px]">
      <div className="max-w-7xl mx-auto px-4 py-[20px] px-6">
        <div className="top_footer">
          <h2 className="font-spezia font-bold text-[48px] uppercase mb-[50px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">
            Let’s work <br />
            together
          </h2>
          <div className="flex items-center gap-[30px]">
            <button className="bg-[transparent] border border-[#fff] text-[#fff] rounded-[40px] text-[16px] px-[40px] py-[20px] uppercase">
              New Projects
            </button>
            <button className="bg-[transparent] border border-[#fff] text-[#fff] rounded-[40px] text-[16px] px-[40px] py-[20px] uppercase">
              New Careers
            </button>
          </div>
        </div>
        <div className="mid_footer py-[30px] md:py-[80px]">
          <div className="flex gap-3">
            <div className="w-3/4 text-[#fff]">
              <h3 className="font-spezia font-bold text-[32px] mb-[20px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">Join our newsletter</h3>
              <p className="text-[#fff] font-[500] text-[20px] leading-relaxed mt-4">Give yourself the gift of more email with our occasional news, story, and event announcements.</p>
            </div>
            <div className="w-1/4 text-[#fff]">
              <h3 className="font-spezia font-bold text-[32px] uppercase mb-[20px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">Social</h3>
              <ul>
                <li className="mb-[15px]">
                  <Link href="/terms" className="font-spezia font-[400] text-[20px] underline mb-[50px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">
                    Linkedin
                  </Link>
                </li>
                <li className="mb-[15px]">
                  <Link href="/terms" className="font-spezia font-[400] text-[20px] underline mb-[50px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/4 text-[#fff]">
               <h3 className="font-spezia font-bold text-[32px] uppercase mb-[20px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">Contact</h3>
               <ul>
                <li className="mb-[15px]">
                  <Link href="/terms" className="font-spezia font-[400] text-[20px] underline mb-[50px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">
                    Ann Arbor
                  </Link>
                </li>
                <li className="mb-[15px]">
                  <Link href="/terms" className="font-spezia font-[400] text-[20px] underline mb-[50px] leading-tight w-full group-hover:underline decoration-4 underline-offset-4 transition text-[#fff]">
                    Los Angeles
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="pt-[50px] flex items-center justify-center gap-3">
            <p className="text-[#fff] font-[500] text-[16px] leading-relaxed mt-4 uppercase">© 2025 Hook LLC. All rights reserved.</p>
            <Link href="/terms" className="uppercase text-[#fff] font-[500] text-[16px] leading-relaxed mt-4">
              Terms of Use
            </Link>
            <Link href="/privacy" className="uppercase text-[#fff] font-[500] text-[16px] leading-relaxed mt-4">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="uppercase text-[#fff] font-[500] text-[16px] leading-relaxed mt-4">
              Cookie Policy
            </Link>
            <Link href="/privacy-controls" className="uppercase text-[#fff] font-[500] text-[16px] leading-relaxed mt-4">
              Privacy Controls
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
