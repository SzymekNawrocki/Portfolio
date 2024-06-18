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
    <div className="container mx-auto py-4 bg-background mt-11">
  <PageTitle> Projekty </PageTitle>
  <div className="space-y-8">
    {allProjectsModels.map((project, index) => (
      <div key={index} className="p-3 border border-border rounded-lg bg-card">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
          <div className=" mt-2 md:mt-6 md:order-1">
            <Image
              src={project.image.url}
              alt={project.title}
              width={300}
              height={100}
              className="md:w-auto h-50 object-cover rounded-lg hidden md:block"
            />
          </div>
          <div className="order-1 md:flex-1 md:mt-6">
            <h2 className="text-2xl font-bold text-primary mt-2 md:ml-4">{project.title}</h2>
            <p className="text-muted-foreground mt-2 md:ml-4">{project.description}</p>
          </div>
        </div>
        <div className="order-4 md:order-none flex space-x-4 justify-center md:justify-end mt-4">
          <a href={project.gitlink} className="text-primary hover:text-primary-foreground" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href={project.sitelink} className="text-primary hover:text-primary-foreground" target="_blank">
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
