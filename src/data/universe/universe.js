import { universeMeta } from "./universeMeta";
import { universeJustice } from "./universeJustice";
import { universeCommerce } from "./universeCommerce";
import { universeZones } from "./universeZones";

export const universeData = {
  ...universeMeta,
  justice: universeJustice,
  commerce: universeCommerce,
  zones: universeZones,
};
