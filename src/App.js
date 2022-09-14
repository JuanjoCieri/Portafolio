import foto from "./foto.png";
import js from "./icons/jss.png";
import node from "./icons/node.png";
import postgres from "./icons/postgress.png";
import react from "./icons/react.svg";
import redux from "./icons/reduxx.png";
import sequelize from "./icons/sequelize.svg";
import html from "./icons/html.png";
import css from "./icons/css.png";
import tailwind from "./icons/tailwind.svg";
import crypto from "./proyectimage/crypto.png";
import cv from "./icons/cv.png";
import linkedin from "./icons/linkedin.png";
import github from "./icons/github.png";
import cvv from "./juanjosecieri.pdf";
import dogs from "./proyectimage/dogsPI.jpeg";
import happytails from "./proyectimage/happytails.jpeg";
import { domMax, motion } from "framer-motion";
import { useRef } from "react";

import "./App.css";

function App() {
  const constraintsRef = useRef(null);
  const constraintsRefPro = useRef(null);
  return (
    <div className="App">
      <motion.div ref={constraintsRef}>
        <section className="flex justify-center h-14">
          <div className="flex justify-around border-b-4 border-white w-full lg:w-1/2 justify-center content-around items-center pt-4">
            <motion.h2
              className="text-white text-xl"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              Sobre mi
            </motion.h2>
            <motion.h2
              className="text-white text-xl"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
            >
              Proyectos
            </motion.h2>
            <motion.h2
              className="text-white text-xl"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Contactame
            </motion.h2>
          </div>
        </section>
        <section className="lg:flex pt-20">
          <div className="lg:w-1/2 h-96 flex flex-wrap items-center justify-around border-r-2 border-black">
            <div className="">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={foto}
                  alt="profile"
                  class="mx-auto object-cover rounded-full h-56 w-56 "
                />
              </motion.div>
              <div className="flex justify-center gap-5 mt-4">
                <a href={cvv} download="cvCieri.pdf">
                  <img src={cv} alt="cv" width="25px" />
                </a>
                <a href="https://www.linkedin.com/in/juan-jos%C3%A9-cieri-8900a8234/">
                  <img src={linkedin} alt="lin" width="25px" />
                </a>
                <a href="https://github.com/JuanjoCieri">
                  <img src={github} alt="git" width="25px" />
                </a>
              </div>
            </div>
            <div className="">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, type: "spring", stiffness: 50 }}
                className="flex flex-col items-center lg:flex lg:flex-col lg:items-start mt-10 lg:mt-0"
              >
                <h3 className="flex text-white text-2xl font-mono">
                  Hola!, soy
                </h3>
                <h1 className="text-white text-5xl font-mono">
                  Juan José Cieri
                </h1>
                <h3 className="flex justify-end text-white text-3xl pt-4 font-mono">
                  Full Stack Developer
                </h3>
              </motion.div>
            </div>
          </div>
          <div className="lg:w-1/2 h-96 flex justify-center items-center border-l-2 border-black mt-16 lg:mt-0">
            <div className="flex flex-col items-center lg:items-stretch lg:w-1/2">
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, type: "spring" }}
              >
                <div className="flex justify-center lg:justify-start lg:pl-5 pb-3 border-b-2 border-white">
                  <h1 className="text-white text-2xl">Sobre mí</h1>
                </div>
                <div className="pt-3">
                  <p className="text-white text-lg">
                    Desarrollador Full-Stack con orientación en Front-End. Soy
                    una persona muy curiosa y creativa, me gusta encontrarle
                    varias soluciones a los problemas y proponer ideas para
                    poder solucionarlas en grupo.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="pt-28">
          <div className="flex flex-col">
            <div className="flex justify-center flex-col">
              <h1 className="text-white text-5xl font-mono">Skills</h1>
              <h2 className="text-gray-300 text-xl font-semibold mt-10">
                Arrastralos!
              </h2>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-center items-center p-24 pl-48 pr-48 gap-14">
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={js} alt="js" width="150px" />
                  <h2 className="text-white text-xl">JavaScript</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={node} alt="js" width="150px" />
                  <h2 className="text-white text-xl">Node</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={postgres} alt="js" width="150px" />
                  <h2 className="text-white text-xl">PostgreSQL</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={react} alt="js" width="150px" />
                  <h2 className="text-white text-xl">React</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={redux} alt="js" width="150px" />
                  <h2 className="text-white text-xl">Redux</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={sequelize} alt="js" width="150px" />
                  <h2 className="text-white text-xl">Sequelize</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={html} alt="js" width="150px" />
                  <h2 className="text-white text-xl">Html</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={css} alt="js" width="150px" />
                  <h2 className="text-white text-xl">Css</h2>
                </motion.div>
              </div>
              <div>
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileDrag={{ scale: 2 }}
                >
                  <img src={tailwind} alt="js" width="150px" />
                  <h2 className="text-white text-xl">Tailwind</h2>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="bt-96">
          <motion.div ref={constraintsRefPro}>
            <div className="h-screen">
              <div className="flex justify-center">
                <motion.h2
                  className="text-white text-5xl font-mono"
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  onAnimationEnd={constraintsRefPro}
                  transition={{ duration: 2, type: "spring" }}
                >
                  Proyectos
                </motion.h2>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center pt-32 justify-around">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, type: "spring", stiffness: 50 }}
                    className="flex flex-col items-center lg:flex lg:flex-col lg:items-start mt-10 lg:mt-0"
                  >
                    <h3 className="text-white text-2xl pb-3 font-semibold">
                      Cripto Proyect
                    </h3>
                    <img src={crypto} alt="" width="250px" />
                    <a href="https://github.com/JuanjoCieri/CryptoProyect">
                      <h3 className="text-white pt-3 font-semibold">
                        Repositorio
                      </h3>
                    </a>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, type: "spring", stiffness: 50 }}
                    className="flex flex-col items-center lg:flex lg:flex-col lg:items-start mt-10 lg:mt-0"
                  >
                    <h3 className="text-white text-2xl pb-3 font-semibold">
                      Dogs SPA
                    </h3>
                    <a href="https://pi-dogs-main-ten.vercel.app/">
                      <img src={dogs} alt="" width="350px" />
                    </a>
                    <a href="https://github.com/JuanjoCieri/PI-Dogs-main">
                      <h3 className="text-white pt-3 font-semibold">
                        Repositorio
                      </h3>
                    </a>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, type: "spring", stiffness: 50 }}
                    className="flex flex-col items-center lg:flex lg:flex-col lg:items-start mt-10 lg:mt-0"
                  >
                    <h3 className="text-white text-2xl pb-3 font-semibold">
                      Happy Tails
                    </h3>
                    <a href="https://happytails.vercel.app/">
                      <img src={happytails} alt="" width="350px" />
                    </a>
                    <a href="https://github.com/Final-Proyect-PETS/Front-End">
                      <h3 className="text-white pt-3 font-semibold">
                        Repositorio
                      </h3>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section>
          <div className="pt-96 lg:pt-0">
            <div className="flex justify-center">
              <h1 className="text-white text-5xl font-mono">Contactame!</h1>
            </div>
            <div className="flex flex-col gap-10 pt-10">
              <div>
                <input className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nombre"></input>
              </div>
              <div>
                <input className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"></input>
              </div>
              <div>
                <textarea className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Mensaje"></textarea>
              </div>
              <div>
                <button className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Enviar!</button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default App;
