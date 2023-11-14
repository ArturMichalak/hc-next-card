import Image from "next/image";
import src from "@/public/cactus_img.jpg";
import { Sora } from "next/font/google";
import classNames from "classnames";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

export default function Card() {
  return (
    <section
      className={classNames(
        "pt-4 rounded-2xl inline-block border max-w-[368px] text-[#6C727F] box-content bg-[#FFFFFF]",
        sora.className
      )}
    >
      <div className="px-4 text-[12px] leading-[0.875rem]">
        <Image className="rounded-2xl" src={src} alt="" />

        <div className="text-[10px] leading-[0.625rem] my-4">
          <Link
            className="inline-block rounded-2xl text-[#883AE1] font-bold bg-[#E6D6FC] px-4 py-[6px]"
            href="#"
          >
            Design
          </Link>
        </div>
        <h2 className="font-bold text-[18px] leading-[1.125rem] mb-[6px] text-[#20293A]">
          Embracing Minimalism
        </h2>
        <p>
          From minimalist sculptures to minimalist paintings, this blog will
          inspire you to appreciate the beauty that lies in simplicity.
        </p>
      </div>
      <small className="text-[12px] leading-[0.75rem] block my-5 border-t px-4">
        <br /><br />
        Annie Spratt
      </small>
    </section>
  );
}
