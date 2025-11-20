import { HydraCollection, Menu } from "../features/api/api.types";

function extractMenuItems(data: HydraCollection<Menu>) {
  return data["hydra:member"][0]?.menuItems ?? [];
}

export default extractMenuItems;
