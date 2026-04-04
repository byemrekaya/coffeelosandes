import type { TastingLabelKey } from '../data/tastingStructured';

const PATHS: Record<TastingLabelKey, string> = {
  dominantNotes: 'coffee.tastingLabelDominantNotes',
  supportingNotes: 'coffee.tastingLabelSupportingNotes',
  bodyFinish: 'coffee.tastingLabelBodyFinish',
  character: 'coffee.tastingLabelCharacter',
  sweetness: 'coffee.tastingLabelSweetness',
  generalProfile: 'coffee.tastingLabelGeneralProfile',
  finish: 'coffee.tastingLabelFinish',
  body: 'coffee.tastingLabelBody',
  acidity: 'coffee.tastingLabelAcidity',
  structure: 'coffee.tastingLabelStructure',
  note: 'coffee.tastingLabelNote',
  process: 'coffee.tastingLabelProcess',
  experience: 'coffee.tastingLabelExperience',
  acidityBody: 'coffee.tastingLabelAcidityBody',
  fruityTouch: 'coffee.tastingLabelFruityTouch',
  aromaticCharacter: 'coffee.tastingLabelAromaticCharacter',
  usageArea: 'coffee.tastingLabelUsageArea',
};

export function tastingLabelPath(key: TastingLabelKey): string {
  return PATHS[key];
}
