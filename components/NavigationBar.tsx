interface Props {
  pathList: { name: string; href: string }[];
}

export function NavigationBar(props: Props) {
  console.log(props.pathList);
  const pathList = props.pathList;
  return (
    <nav class="">
      <ul>
        {pathList.map((x) => {
          return (
            <li>
              <a
                href={x.href}
                class="border-gray-500 border-2 rounded hover:bg-gray-200 transition-colors"
              >
                {x.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
