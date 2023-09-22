import { Project } from "./convertRepoToProject.js";
import { getRepo } from "./github.js";
import { readJson, writeJson } from "./jsonUtils.js";
import { PROJECTS_PATH } from "./paths.js";

const reposIds = [
  'GuilhermeBalog/tic-tac-toe',
  'GuilhermeBalog/minesweeper',
  'GuilhermeBalog/genius',
  'GuilhermeBalog/js-music-keyboard',
  'GuilhermeBalog/task-list',
  'GuilhermeBalog/portfolio-generator',
  'GuilhermeBalog/music-tape',
  'GuilhermeBalog/mother-weather',
  'GuilhermeBalog/qwerty-play',
  'GuilhermeBalog/my-hello-worlds',
  'GuilhermeBalog/imersao-gamedev',
  'GuilhermeBalog/capivara-chat',
];

export async function getProjects() {
  if (process.env.USE_CACHE === 'true') {
    return readJson<Project[]>(PROJECTS_PATH);
  }

  const projects = await Promise.all(reposIds.map(repo => getRepo(repo)));

  await writeJson(PROJECTS_PATH, projects);

  return projects;
}
