import {
  EnvelopeSimple,
  MapPinSimple,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <div className="w-full bg-slate-100">
      <MaxWidthWrapper className="flex flex-col md:flex-row gap-4 p-4 md:p-8 lg:p-16 md:justify-evenly max-w-max">
        <div className="flex flex-col gap-8">
          {/* LOGO  */}
          <Image
            src="/logo.png"
            alt=""
            className="w-36 h-12"
            width={300}
            height={300}
          />
          {/* TEXT  */}
          <span className="text-gray-500 text-base w-80">
            BlueBerry is the biggest market of grocery products. Get your daily
            needs from our store.
          </span>
          {/* STORE  */}
          <div className="flex gap-2">
            <Image
              src="/playstore.png"
              alt=""
              width={200}
              height={200}
              className="w-32 h-10"
            />
            <Image
              src="/apple.png"
              alt=""
              width={200}
              height={200}
              className="w-32 h-10"
            />
          </div>
        </div>

        {/* CONTENT  */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold tracking-wide">Category</h3>
            <div className="flex flex-col gap-1 text-gray-400 text-base">
              <span>Dairy & Milk</span>
              <span>Snack & Spice</span>
              <span>Fast Food</span>
              <span>Juice & Drinks</span>
              <span>Bakery</span>
              <span>Seafood</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold tracking-wide">Company</h3>
            <div className="flex flex-col gap-1 text-gray-400 text-base">
              <span>About us</span>
              <span>Delivery</span>
              <span>Legal Notice</span>
              <span>Term & conditions</span>
              <span>Secure payment</span>
              <span>Contact us</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3  className="text-lg font-semibold tracking-wide">Account</h3>
            <div className="flex flex-col gap-1 text-gray-400 text-base">
              <span>Sign in</span>
              <span>View Cart</span>
              <span>Return Policy</span>
              <span>Becoma a vendor</span>
              <span>Affiliate Program</span>
              <span>Payments</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold tracking-wide">Contact</h3>
            <div className="flex flex-col gap-1 text-gray-400 text-base">
              <div className="flex gap-2 ">
                <MapPinSimple size={25} />
                <span className="w-60">
                  971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.
                </span>
              </div>
              <div className="flex gap-2">
                <WhatsappLogo size={22} />
                <span>+00 9876543210</span>
              </div>
              <div className="flex gap-2">
                <EnvelopeSimple size={22} />
                <span>example@email.com</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
