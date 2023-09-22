import { Repository } from './github.js';

export interface Project {
  emoji?: string,
  name: string,
  description: string,
  languages: { name: string }[],
  homepage?: string,
  repo_url: string,
  image?: string,
}

export function convertRepoToProject(repo: Repository): Project {
  const { emoji, description } = getEmojiFromDescription(repo.description);
  const image = getImage(repo.openGraphImageUrl);

  return {
    emoji,
    name: repo.name,
    description,
    languages: repo.languages.nodes,
    homepage: repo.homepageUrl,
    repo_url: repo.url,
    image,
  };
}

function getImage(imageUrl: string) {
  if (!imageUrl) {
    return '';
  }

  const CUSTOM_IMAGES_CDN = 'https://repository-images.githubusercontent.com';

  if (!imageUrl.startsWith(CUSTOM_IMAGES_CDN)) {
    return '';
  }

  return imageUrl;
}

function getEmojiFromDescription(text: string) {
  const [emoji, ...words] = text.split(' ');

  if ((/[A-z]/).test(emoji)) {
    return { emoji: '', description: text };
  }

  return { emoji, description: words.join(' ') };
}
