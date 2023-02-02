import hyphenate from "./hyphenateWords";

function findProject(arr, str) {
  return arr.find((proj) => hyphenate(proj.title) === str);
}

export default findProject