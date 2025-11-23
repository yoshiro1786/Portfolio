"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Turu.
      </>
    ),
    description: "Landing Page",
    shortDescription: "Plataforma para potenciar la atención al cliente con chatbots.",
    link: "https://turu.proefexperu.com/",
    imageLink: "/img/projects/turu.png",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: (
      <>
        TitiGO
      </>
    ),
    description: "Landing Page",
    shortDescription: "Landing page moderna y atractiva para servicios de transporte.",
    link: "https://titigo.netlify.app/",
    imageLink: "/img/projects/titiGo.png",
    tags: ["Astro", "Tailwind CSS"],
  },
  {
    title: (
      <>
        Proefex
      </>
    ),
    description: "Landing Page",
    shortDescription: "Sitio web corporativo con diseño profesional y optimizado.",
    link: "https://proefexperu.com/",
    imageLink: "/img/projects/proefex.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: (
      <>
        Egregor
      </>
    ),
    description: "Plataforma Educativa",
    shortDescription: "Plataforma integral para la gestión y aprendizaje educativo.",
    link: "https://app.egregor.io/",
    imageLink: "/img/projects/egregor.png",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
  },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
