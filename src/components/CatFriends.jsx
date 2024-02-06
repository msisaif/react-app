import { useRef } from "react";

const catList = [];

for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

export default function CatFriends() {
  const itemsRef = useRef(null);

  function handleScrollToId(itemId) {
    const map = getMap();

    const node = map.get(itemId);

    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  return (
    <>
      <nav className="flex gap-4 p-4">
        <button
          className="border px-2 py-1"
          onClick={() => handleScrollToId(0)}
        >
          Tom
        </button>
        <button
          className="border px-2 py-1"
          onClick={() => handleScrollToId(55)}
        >
          Maru
        </button>
        <button
          className="border px-2 py-1"
          onClick={() => handleScrollToId(9)}
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul className="grid gap-6 h-96 overflow-y-auto">
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();

                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img
                className="w-svw"
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
