import { gql } from "graphql-request";
import { gqlClient } from "@/lib/gqlClient";
import PageTitle from "@/components/PageTitle";
import Link from "next/link"
import Image from "next/image"


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
    <div className="min-h-screen max-w-3xl mx-auto pt-8 mt-8 mb-12 bg-background text-foreground dark:text-foreground-dark ">
    <PageTitle>Projekty</PageTitle>
    <div className="grid grid-cols-1 gap-20 mt-20 md:mx-4 lg:mx-8 "> 
      {allProjectsModels.map((project: IProjectsModel, index: number) => (
        <Link key={index} href={project.links}>
          <div className="relative flex flex-col items-center md:flex-row cursor-pointer mb-8 md:mb-0 md:w-full md:mx-auto md:max-w-3xl max-md:ml-4 max-md:mr-4 ">
            <h2 className="text-xl text-primary font-semibold mb-4 md:ml-5 md:mt-2 md:w-1/3 ">{project.title}</h2>
            <p className="mb-4 md:mb-0 md:w-3/4 max-md:text-center">{project.description}</p>
            <div className="relative max-md:mb-2 ">
              <Image
                src={project.image.url}
                alt={project.title}
                height={300}
                width={180}
                className="rounded-md"
              />
            </div>
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-10 rounded-md"></div>
          </div>
        </Link>
      ))}
    </div>
</div>

  );
}
