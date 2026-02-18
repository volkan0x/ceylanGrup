import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";

const ProjectsMasonry = dynamic( () => import("@components/ProjectsMasonry"), { ssr: false } );

import { getSortedProjectsData } from "@library/projects";

export const metadata = {
  title: {
    default: "Projeler",
	},
  description: AppData.settings.siteDescription,
}

async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <PageBanner pageTitle={"Projeler"} breadTitle={"Projeler"} bgImage={"/img/photo/12.jpg"} />

      {/* portfolio */}
      <section>
        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />
          
          <div className="mil-center">
            <p className="mil-text-lg mil-up mil-mb-90">Projelerimiz, tasarım ve teknolojiyi bir araya getirerek insanların yaşadığı, çalıştığı ve iyileştiği mekânlar oluşturur.</p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <ProjectsMasonry projects={projects} categories={AppData.projects.categories} />
          </Suspense>
        </div>
      </section>
      {/* portfolio end */}
      
    </>
  );
};
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}