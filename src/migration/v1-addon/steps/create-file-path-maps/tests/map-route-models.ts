import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteModels(options: Options): FilePathMapEntries {
  const { pod, projectRoot } = options;

  const podDir = 'tests/unit';

  const filePaths = findFiles(join(podDir, pod, '**/model-test.{js,ts}'), {
    ignoreList: ['tests/unit/models/**'],
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `tests/unit/models/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
