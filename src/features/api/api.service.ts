import { api__url } from "../../configs/constant";
import fetchResponse from "../middlewares/fetchResponse";
import extractMenuItems from "../utils/extractMenuItems";
import filterItems from "../utils/filterItems";
import parseRawHtml from "../utils/parseRawHtml";

if (!api__url) throw new Error("API_URL is not defined");

export const fetchMenus = async () => {
  try {
    const res = await fetchResponse(api__url!);
    const data = await res.json();

    const filteredItems = filterItems(extractMenuItems(data));

    const result = filteredItems.map((item) => ({
      name: item.name,
      rawHtml: parseRawHtml(item.rawHtml),
    }));

    console.info(`Status 200 ${new Date().toLocaleString()}`);
    return result;
  } catch (err) {
    console.info("Status 500");
    console.error(err);
    return [];
  }
};
