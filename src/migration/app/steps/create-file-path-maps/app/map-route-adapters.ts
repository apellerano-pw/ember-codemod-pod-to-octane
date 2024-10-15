import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  FilePathMapEntries,
  Options,
} from '../../../../../types/index.js';
import { renamePodPath } from '../../../../../utils/files/index.js';

export function mapRouteAdapters(options: Options): FilePathMapEntries {
  const { pod, podPath, projectRoot } = options;

  const podDir = join('app', podPath);

  const filePaths = findFiles(join(podDir, pod, '**/adapter.{js,ts}'), {
    projectRoot,
  });

  return filePaths.map((oldFilePath) => {
    const newFilePath = renamePodPath(oldFilePath, {
      podDir,
      replace: (key: string) => {
        return `app/adapters/${key}`;
      },
    });

    return [oldFilePath, newFilePath];
  });
}
