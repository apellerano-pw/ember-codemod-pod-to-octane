import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapServices(options: Options): FilePathMapEntries {
  const { pod, projectRoot } = options;

  const podDir = 'addon';

  const filePaths = findFiles(join(podDir, pod, '**/service.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `addon/services/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
