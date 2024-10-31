import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteAdapters(options: Options): FilePathMapEntries {
  const { pod, projectRoot } = options;

  const podDir = 'tests/unit';

  const filePaths = findFiles(join(podDir, pod, '**/adapter-test.{js,ts}'), {
    ignoreList: ['tests/unit/adapters/**'],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `tests/unit/adapters/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
