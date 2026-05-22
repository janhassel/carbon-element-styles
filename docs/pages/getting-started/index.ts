/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { parse } from 'marked';

import readme from '../../../README.md?raw';
import type { Demo } from '../../js/_types';

const html = /* html */`
<abbr title="Abbreviation">abbr</abbr>
`;

export const meta: Demo = {
  id: 'getting-started',
  name: 'Getting started',
  html: {
    raw: await parse(readme),
  },
}
