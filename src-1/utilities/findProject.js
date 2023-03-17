import hyphenate from "./hyphenateWords";
import { projects } from "../data/projects";

function findProject(str) {
  return projects.find((proj) => hyphenate(proj.title) === str);
}

export default findProject