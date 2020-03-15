
const random = function rn(limiter, length) {
    let randomNumber = Math.floor(Math.random() * length) + 1;
    if (randomNumber >= limiter) {
        return randomNumber;
    } else {
        return rn(limiter, length);
    }
}

export function taleParser(storyline, proppFunctions, relation) {
  const convertedStory = JSON.parse(JSON.stringify(storyline));
  const variants = proppFunctions[!!relation ? relation - 1 : 0].variants;
  const variant = variants[Math.floor(Math.random() * variants.length)];
  const newRelation = variant.relationIds[Math.floor(Math.random() *  variant.relationIds.length)];

  if (convertedStory.length > 0 && !relation) {
    return convertedStory;
  } else {
    convertedStory.push(variant);
  }

  return taleParser(convertedStory, proppFunctions, newRelation);
}

export function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}