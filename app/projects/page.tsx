import { gql } from "graphql-request";
import { gqlClient } from "@/lib/gqlClient";
import Link from "next/link";
import Image from "next/image";

interface IProjectsModel {
  title: string;
  image: {
    url: string;
  }
  description: string;
  links:string;
}

export default async function ProjectsModelsPage() {
  const query = gql`
    { 
      allProjectsModels {
        title
        image {
          url
        } 
        description
        links
      }	
    }
  `;
  
  const { allProjectsModels }: { allProjectsModels: IProjectsModel[] } = await gqlClient.request(query);

  return (
    <div className="h-screen container mb-24 mt-24 flex-grow">
      <h1 className="text-4xl font-semibold mb-8 text-center">Projekty</h1>
      <div className="grid grid-cols-1 gap-8">
        {allProjectsModels.map((project: IProjectsModel, index: number) => (
          <Link key={index} href={project.links}>
            <div className="relative flex items-center cursor-pointer">
              <div className="relative mr-4">
                <Image
                  src={project.image.url}
                  alt={project.title}
                  height={300}
                  width={300}
                  className="rounded-md"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <div className="project-hover-effect absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-10 rounded-md"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
