"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { myProjects } from "@/lib/constants";
import Link from "next/link";
import { WindowContent } from "../window/window-content";
import { WindowSidebar } from "../window/window-sidebar";
import { WindowIcon } from "../window/window-icon";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function Portfolio() {
  const [project, setProject] = useState<typeof myProjects[0]>(myProjects[0]);

  return (
    <div className="absolute inset-x-0 top-0 flex flex-col h-full bottom-6 lg:p-0 lg:flex-row gap-y-2 justify-evenly">
      <WindowSidebar className="flex flex-col justify-center w-full p-2 lg:p-2 md:justify-start gap-y-2 lg:w-1/3 lg:justify-evenly lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
        <div className="flex items-center lg:flex-col justify-evenly md:justify-start gap-y-1">
          <figure className="flex flex-col items-center w-1/2 lg:flex-row lg:justify-between lg:w-full">
            <span className="w-1/3 mx-auto lg:w-2/5">{project.icon}</span>
            <figcaption className="w-full text-sm font-semibold text-center uppercase truncate md:text-lg">
              {project.title}
            </figcaption>
          </figure>

          <div className="flex flex-col justify-around w-1/2 text-sm md:text-lg gap-y-2 lg:w-full lg:text-base lg:flex-row">
            <Link
              target="_blank"
              href={project.live}
              className="flex items-center underline underline-offset-2 text-windows-blue/70 hover:text-windows-blue"
            >
              <ExternalLink className="w-4 h-4" /> {project.title}
            </Link>
            <Link
              target="_blank"
              href={project.repoURL}
              className="flex items-center underline underline-offset-2 text-windows-blue/70 hover:text-windows-blue"
            >
              <ExternalLink className="w-4 h-4" /> Github
            </Link>
          </div>
        </div>

        <p className="prose-sm md:prose-base md:w-3/4 md:mx-auto lg:w-5/6">
          {project.id === 1 ? (
            <>
              {project.desc}
              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                className="underline text-windows-blue"
              >
                shadcn-ui.
              </Link>
            </>
          ) : (
            project.desc
          )}
        </p>
        {/* <p className="prose-sm md:prose-base md:w-3/4 md:mx-auto lg:w-5/6">
          {project.title === "Portfolio" ? (
            <>
              {project.desc}{" "}
              <Link href="https://ui.shadcn.com/" target="_blank">
                shadcn-ui.
              </Link>
            </>
          ) : (
            project.desc
          )}
          {project.desc}
        </p> */}

        <ScrollArea className="w-full">
          <div className="flex h-5 gap-1 lg:flex-wrap md:justify-center lg:h-auto">
            {project.tech.map((item) => (
              <Badge
                key={item}
                className="truncate break-keep md:text-base bg-windows-blue"
              >
                {item}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </WindowSidebar>

      <WindowContent className="h-1/2 md:h-2/5 lg:h-full lg:w-2/3 lg:shadow-inner lg:shadow-windows-dark">
        <ScrollArea className="w-full h-full">
          <div className="grid h-full grid-cols-2 p-2 overflow-scroll place-items-center lg:grid-cols-12">
            {myProjects.map((proj) => (
              <WindowIcon
                key={proj.id}
                topStyle={
                  proj === project
                    ? `border border-dashed border-windows-dark`
                    : ``
                }
                bottomStyle={
                  proj === project ? `bg-windows-blue text-windows-white` : ``
                }
                handleClick={() => {
                  proj !== project && setProject(proj);
                }}
                icon={proj.icon}
                title={proj.title}
              />
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </WindowContent>
    </div>
  );
}
