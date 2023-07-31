export function convertRepoToProject(repo) {
  const { emoji, description } = getEmojiFromDescription(repo.description);
  const image = getImage(repo.openGraphImageUrl);

  return {
    emoji,
    name: repo.name,
    description,
    languages: repo.languages.nodes.map(node => node.name),
    homepage: repo.homepageUrl,
    repo_url: repo.url,
    image,
  };
}
function getImage(imageUrl) {
  if (!imageUrl) {
    return '';
  }

  const CUSTOM_IMAGES_CDN = 'https://repository-images.githubusercontent.com';

  if (!imageUrl.startsWith(CUSTOM_IMAGES_CDN)) {
    return '';
  }

  return imageUrl;
}
/** @param {string} text */

function getEmojiFromDescription(text) {
  const [emoji, ...words] = text.split(' ');

  if ((/[A-z]/).test(emoji)) {
    return { emoji: '', description: text };
  }

  return { emoji, description: words.join(' ') };
}
