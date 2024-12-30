import { FreshContext } from "$fresh/server.ts";
import { NavigationBar } from "../components/NavigationBar.tsx";
async function getRoutes(): Promise<{ name: string; href: string }[]> {
  const routes: { name: string; href: string }[] = [];

  for await (const entry of Deno.readDir("./routes")) {
    if (entry.isFile && entry.name.endsWith(".tsx")) {
      const route = entry.name.replace(".tsx", ""); // Remove extension
      const name = route === "index"
        ? "Home"
        : route.charAt(0).toUpperCase() + route.slice(1);
      const href = route === "index" ? "/" : `/${route}`;
      routes.push({ name, href });
    }
  }

  return routes;
}

export default async function Layout(req: Request, ctx: FreshContext) {
  // do something with state here
  const routes = await getRoutes();
  const pathList = routes.filter(x=>x.href.startsWith('/_')===false);
  console.log(routes, pathList);
  
  const url = new URL(req.url);
  return (
    <>
      <NavigationBar pathList={pathList}></NavigationBar>
      <h1>hello at: <span>{url.pathname}</span></h1>
      <main class="layout bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <ctx.Component />
        </div>
      </main>
    </>
  );
}
