# Guilherme Balog's website

![Thumbnail](thumbnail.png)

## How it works?

For **markup**, it uses React just as a simple template engine. The code is converted to static HTML using the [`renderToStaticMarkup` API](https://react.dev/reference/react-dom/server/renderToStaticMarkup), so there is no state, context, virtual DOM, nothing, just the RAW HTML. Why? This page is pretty simple and it doesn't need all the code needed to make React work on the client, and could be served as a static page (no SSR then). The resulting HTML is minified using [`html-minifier`](https://www.npmjs.com/package/html-minifier).

For **styling** it uses [`sass`](https://sass-lang.com/), compiled with [`sass.compile`](https://www.npmjs.com/package/sass#usage) and embedded in the HTML wrapped by a [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) tag (one request less to the client).

For **client js** it uses simple vanilla JS, also minified by `html-minifier` and embedded with a [`script`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag (again, one request less).