import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  const displayData = results.map((name) => (
    <li key={name} class="hover:bg-gray-200">
      {name}
    </li>
  ));
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} class="rounded" />
        <button
          type="submit"
          class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
        >
          Search
        </button>
      </form>
      <ul>
        { displayData.length > 0 ? displayData : <p><i>no result for: <b>{query}</b></i></p>}
      </ul>
    </div>
  );
}
