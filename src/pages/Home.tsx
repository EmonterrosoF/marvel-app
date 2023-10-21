import umgImage from "../assets/umg.png";

import { Image } from "@nextui-org/react";
import spiderMan from "../assets/spiderMan.png";
import wrapperIronMan from "../assets/wrapperIronMan.jpg";

export const Home = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 opacity-10 rounded-l-full overflow-hidden">
        <img src={wrapperIronMan} alt="wrapper iron man"></img>
      </div>
      <div className="flex justify-between items-center lg:flex-row lg:py-0 md:flex-row md:py-0 flex-col py-14">
        <div className="flex-1 z-10">
          <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text my-4">
            MARVEL APP
          </h1>
          <p className="dark:text-slate-300 text-slate-900 tracking-wide leading-7">
            <span className="font-semibold dark:text-white text-black">
              Marvel APP {""}
            </span>
            es una aplicación emocionante que te sumerge en el vasto universo de
            los personajes de Marvel. Esta aplicación te permite explorar un
            extenso catálogo de héroes y villanos icónicos de Marvel Comics.
            Desde los legendarios Vengadores hasta los intrépidos Guardianes de
            la Galaxia, puedes sumergirte en perfiles detallados que incluyen
            biografías, poderes sobrenaturales, y momentos cruciales en la
            historia de estos personajes.
          </p>
        </div>
        <div className="flex-1">
          <Image
            isBlurred
            width={700}
            src={spiderMan}
            alt="spiderman"
            className="m-5 animate-ping z-10"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        style={{ marginTop: "-130px", paddingBottom: "70px" }}
      >
        <Image
          className="float-right transform hover:scale-110 transition duration-50 py-7"
          isBlurred
          width={400}
          src={umgImage}
          alt="Logo UMG"
        />

        <h2 className="z-10 text-4xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text my-4">
          Universidad Mariano Gálvez de Guatemala
        </h2>
      </div>
    </section>
  );
};
