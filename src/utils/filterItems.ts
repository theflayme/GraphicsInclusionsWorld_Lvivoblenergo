import { MenuItem } from "../features/api/api.types";

function filterItems(items: MenuItem[]) {
  return items.filter(
    (item) => item.name === "Today" || item.name === "Tomorrow",
  );
}

export default filterItems;
