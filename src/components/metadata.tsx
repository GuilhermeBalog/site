import React from 'react';

const siteName = "Guilherme Balog Gardino";
const jobTitle = "Desenvolvedor de Software";
const title = `${siteName} | ${jobTitle}`;
const description =
  'Olá! Meu nome é Guilherme Balog Gardino e sou desenvolvedor de software em São Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados.';
const imageUrl = 'https://avatars0.githubusercontent.com/u/38947601?v=4';
const siteUrl = "https://guilhermebalog.github.io";
const imageWidth = 460
const imageHeight = 460

export default function Metadata() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={imageUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}
