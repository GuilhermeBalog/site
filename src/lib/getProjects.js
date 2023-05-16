import { getRepo } from "./github.js";

// import projects from './projects.json' assert { type: 'json' };

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
  // return Promise.resolve(projects);
  return new Promise((resolve, reject) => {
    Promise
      .all(reposIds.map(repo => getRepo(repo)))
      .then(repos => resolve(repos.map(repo => convertRepoToProject(repo))))
      .catch(reject);
  })
}

function convertRepoToProject(repo) {
  const { emoji, description } = getEmojiFromDescription(repo.description);

  return {
    emoji,
    name: repo.name,
    description,
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
