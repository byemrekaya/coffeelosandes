import type { FarmMapLotInput } from './coffeeLots';
import type { VenezuelaCoffeeMasterItem } from './venezuelaCoffeeMaster';

export function farmMapLotFromMasterItem(item: VenezuelaCoffeeMasterItem): FarmMapLotInput {
  const ciftlik = item.ciftlik?.trim() ?? '';
  const farm = ciftlik || item.bolge;
  const farmMapQuery = ciftlik ? `${ciftlik}, ${item.bolge}, Venezuela` : `${item.bolge}, Venezuela`;
  return {
    farmMapQuery,
    farm,
    region: item.bolge,
    country: 'Venezuela',
    farmCategory: item.segment,
  };
}
