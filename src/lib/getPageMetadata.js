const siteName = "Guilherme Balog Gardino";
const jobTitle = "Desenvolvedor de Software";
const title = `${siteName} | ${jobTitle}`;
const description =
  'Olá! Meu nome é Guilherme Balog Gardino e sou desenvolvedor de software em São Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados.';
const imageUrl = 'https://avatars0.githubusercontent.com/u/38947601?v=4';
const siteUrl = "https://guilhermebalog.github.io";
const imageWidth = 460
const imageHeight = 460

export async function getPageMetadata() {
  return  {
    title,
    description,
    siteName,
    siteUrl,
    imageUrl,
    imageWidth,
    imageHeight,
  }
}
