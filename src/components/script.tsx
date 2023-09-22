import React from 'react';
import { readFileSync } from 'node:fs';

import { JS_PATH } from '../lib/paths.js';

const js = readFileSync(JS_PATH).toString();

export default function Script(props: React.ScriptHTMLAttributes<HTMLScriptElement>) {
  return (
    <script {...props} dangerouslySetInnerHTML={{ __html: js }} />
  );
}
