import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerImage from "../../../public/images/logo/footer-logo.png";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import FacebookIcon from "../icons/FacebookIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="flex justify-center items-end bg-gray-800">
      <div className="flex w-full max-w-7xl flex-col text-white px-6 py-10 md:flex-row md:justify-between lg:px-0">
        <div className="grid grid-cols-1 grid-rows-1 justify-center gap-2">
          <div className="logo">
            <Image
              src={footerImage}
              width="170"
              height="32"
              alt="Keystone logo"
              loading="lazy"
            />
          </div>
          <div className="max-w-[800px] mr-auto py-4">
            <div
              className="max-w-[800px] text-sm pb-0
             simple-block-content"
            >
              <p className="pb-3">
                <strong>
                  Browse thousands of graduate degrees from around the world.
                </strong>
              </p>
              <p>
                MASTERSTUDIES makes it easy for graduate students to find the
                right degree. Use our website to find information about degrees
                and career paths from around the world and speak directly with
                admissions officers at the schools and universities that
                interest you.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start md:flex-row md:items-center">
            <div className="flex flex-col items-center md:flex-row md:gap-4">
              <ul className="flex flex-col items-start md:flex-row md:gap-4">
                <li className="!text-sm underline decoration-gray-500 my-2 hover:text-secondary-light md:text-lg">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="!text-sm underline decoration-gray-500 my-2 hover:text-secondary-light md:text-lg">
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li className="!text-sm underline decoration-gray-500 my-2 hover:text-secondary-light md:text-lg">
                  <Link href="/about-us">About us</Link>
                </li>
                <li className="!text-sm underline decoration-gray-500 my-2 hover:text-secondary-light md:text-lg">
                  <Link href="/promote-your-program">Promote your program</Link>
                </li>
              </ul>
              <ul className="flex flex-col items-start md:flex-row md:gap-4">
                <li className="text-sm text-white underline decoration-gray-500 my-4 first-of-type:ml-0 hover:text-secondary-light md:m-4">
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center justify-center">
            <li className="mr-4 last-of-type:mr-0">
              <Link href="#">
                <LinkedinIcon />
              </Link>
            </li>
            <li className="mr-4 last-of-type:mr-0">
              <Link href="#">
                <InstagramIcon />
              </Link>
            </li>
            <li className="mr-4 last-of-type:mr-0">
              <Link href="#">
                <FacebookIcon />
              </Link>
            </li>
            <li className="mr-4 last-of-type:mr-0">
              <Link href="#">
                <YoutubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
