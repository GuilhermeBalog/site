import React from "react";

import { renderToStaticMarkup } from "react-dom/server";

function EmojiSvgIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <text y=".9em" fontSize="90">✌🏾</text>
    </svg>
  );
}

export function emojiFavicon() {
  const content = renderToStaticMarkup(<EmojiSvgIcon />);
  const mimeType = 'image/svg+xml';

  return `data:${mimeType},${content.replace(/"/g, "%22")}`;
}