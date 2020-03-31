import { storyState } from '../stores/stores.js';

export function taleParser(storyline, proppFunctions, relation) {
  let tpObj = getTaleParserObj(storyline, proppFunctions, relation);

  if (tpObj.convertedStory.length > 0 && !relation) {
    return tpObj.convertedStory;
  } else {
    if (checkMaxRepeats(tpObj.variant)) {
      tpObj.convertedStory.push(tpObj.variant);
      ++tpObj.variant.repeated;
    }
  }

  return taleParser(tpObj.convertedStory, tpObj.safeFunctions, tpObj.newRelation);
}

function checkMaxRepeats(variant) {
  return variant.maxRepeat >= variant.repeated;
}

function cleanStoryState() {
  storyState.set(0);
}

function getTaleParserObj(storyline, proppFunctions, relation) {
  const convertedStory = JSON.parse(JSON.stringify(storyline));
  const safeFunctions = JSON.parse(JSON.stringify(proppFunctions));
  const variants = safeFunctions[!!relation ? relation - 1 : 0].variants;
  const variant = variants[Math.floor(Math.random() * variants.length)];
  const newRelation = variant.relationIds[Math.floor(Math.random() *  variant.relationIds.length)];

  return {
    convertedStory,
    safeFunctions,
    variants,
    variant,
    newRelation
  }
}