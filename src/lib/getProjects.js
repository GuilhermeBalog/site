import { getRepo } from "./github.js";
import { readJson } from "./readJson.js";
import { writeJson } from "./writeJson.js";
import { PROJECTS_PATH } from "./paths.js";

const reposIds = [
  'GuilhermeBalog/tic-tac-toe',
  'GuilhermeBalog/minesweeper',
  'GuilhermeBalog/genius',
  'GuilhermeBalog/js-music-keyboard',
  'GuilhermeBalog/task-list',
  'GuilhermeBalog/my-hello-worlds',
  'GuilhermeBalog/imersao-gamedev',
  'GuilhermeBalog/capivara-chat',
  'GuilhermeBalog/dev-radar',
  'GuilhermeBalog/portfolio-generator',
  // 'GuilhermeBalog/ru-scraping',
  'GuilhermeBalog/mother-weather',
  'GuilhermeBalog/be-the-hero',
]

export function getProjects() {
  if (process.env.USE_CACHE === 'true') {
    return readJson(PROJECTS_PATH);
  }

  return new Promise((resolve, reject) => {
    Promise
      .all(reposIds.map(repo => getRepo(repo)))
      .then(repos => {
        const projects = repos.map(repo => convertRepoToProject(repo));
        writeJson(PROJECTS_PATH, projects);
        resolve(projects);
      })
      .catch(reject);
  })
}

function convertRepoToProject(repo) {
  const { emoji, description } = getEmojiFromDescription(repo.description);

  return {
    emoji,
    name: repo.name,
    description,
    primaryLanguage: repo.primaryLanguage?.name,
    languages: repo.languages.nodes.map(node => node.name),
    homepage: repo.homepageUrl,
    repo_url: repo.url,
    image: repo.openGraphImageUrl,
  }
}

/** @param {string} text */
function getEmojiFromDescription(text) {
  const [emoji, ...words] = text.split(' ');

  return { emoji, description: words.join(' ') }
}
