import hyphenate from "./hyphenateWords";

function findProject(arr, str) {
  console.log(arr.filter((proj) => hyphenate(proj.title) === str));
}

export default findProject