
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import LocaleComponent from "@/components/LocaleComponent";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

// export const revalidate = 500;

export default async function Page(props: PageProps) {
  
  const builderModelName = "page";
  let localeNow = Intl.NumberFormat().resolvedOptions().locale;

  //localeNow='rn-US'

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
      options: {
         locale: localeNow
      }
    })
    // Convert the result to a promise
    .toPromise();

    console.log ("localenow 2 - "+localeNow)
    console.log ("localenow 6 - "+Intl.NumberFormat().resolvedOptions().locale)
    
    //console.log ("localeSelecetd 1 - "+localeSelected)
  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} options={{ enrich: true }} />
    </>
  );
}
