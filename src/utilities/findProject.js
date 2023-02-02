import hyphenate from "./hyphenateWords";

function findProject(arr, str) {
  return arr.filter((proj) => hyphenate(proj.title) === str);
}

export default findProject