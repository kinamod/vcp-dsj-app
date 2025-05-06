import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Homepage(props: PageProps) {
  const builderModelName = "page";
  // let localeNow = new Intl.DateTimeFormat().resolvedOptions().locale;
  let localeNow = 'fr';
  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/",
        options: {
          enrich: true
        }
      },
      options: {
        locale: localeNow
      }
    })
    // Convert the result to a promise
    .toPromise(); 
    console.log ("localenow 1 - "+localeNow)
  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} options={{ enrich: true }} />
    </>
  );
}

