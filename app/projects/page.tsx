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
            <div className="flex items-center space-x-4">
              <Image
                src={project.image.url}
                alt={project.title}
                width={300}
                height={100}
                className=" ml-4 h-50 object-cover rounded-lg mt-11 "
              />
              <div>
                <h2 className="text-2xl font-bold text-primary mr-4 ml-4">{project.title}</h2>
                <p className="text-muted-foreground mt-4 mr-4 ml-4 ">{project.description}</p>
              </div>
            </div>
            <div className="m-4 flex space-x-4 justify-end ">
              <a href={project.gitlink} className="text-primary hover:text-primary-foreground">
                <FaGithub size={24} />
              </a>
              <a href={project.sitelink} className="text-primary hover:text-primary-foreground">
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
