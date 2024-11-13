import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapUnitComponents(options: Options): FilePathMapEntries {
  const { pod, projectRoot } = options;

  const podDir = 'tests/unit/components';

  const filePaths = findFiles(join(podDir, pod, '**/component-test.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `tests/unit/components/${key}-test`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
