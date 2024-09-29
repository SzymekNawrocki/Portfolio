import { gql } from "graphql-request";
import { gqlClient } from "@/lib/gqlClient";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface IProjectsModel {
  title: string;
  image: {
    url: string;
  };
  description: string;
  gitlink: string;
  sitelink: string;
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
        gitlink
        sitelink
      }
    }
  `;

  const { allProjectsModels }: { allProjectsModels: IProjectsModel[] } = await gqlClient.request(query);

  return (
    <div className="container mx-auto py-11 mt-11">
  <PageTitle> Projekty </PageTitle>
  <div className="space-y-20">
    {allProjectsModels.map((project, index) => (
      <div key={index} className="p-8 border-border rounded-lg bg-secondary">
        <div className="flex flex-col items-center">
          <div className="md:mt-4">
            <h2 className="text-2xl font-bold text-primary text-center">{project.title}</h2>
            <p className="text-foreground mt-4 text-center">{project.description}</p>
          </div>
          <div className="mt-9">
            <Image
              src={project.image.url}
              alt={project.title}
              width={300}
              height={100}
              className="w-full h-50 object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-4 justify-center mt-9">
            <a href={project.gitlink} className="text-primary hover:text-primary-foreground" target="_blank">
              <FaGithub size={24} />
            </a>
            <a href={project.sitelink} className="text-primary hover:text-primary-foreground" target="_blank">
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
