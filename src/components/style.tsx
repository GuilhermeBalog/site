import React from 'react';
import sass from 'sass';
import { SASS_PATH } from '../lib/paths.js';

const { css } = sass.compile(SASS_PATH, { style: 'compressed' });

export default function Style(props: React.StyleHTMLAttributes<HTMLStyleElement>) {
  return (
    <style {...props} dangerouslySetInnerHTML={{ __html: css }} />
  );
}