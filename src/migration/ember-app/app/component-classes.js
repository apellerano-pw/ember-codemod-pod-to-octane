import glob from 'glob';
import { join } from 'node:path';

import { mapPaths } from '../../../utils/map-paths.js';

export function migrationStrategyForComponentClasses(options) {
  const { podPath, projectRoot } = options;

  const oldPaths = glob.sync(
    join('app', podPath, 'components', '**', 'component.{d.ts,js,ts}'),
    {
      cwd: projectRoot,
    }
  );

  return oldPaths.map((oldPath) => {
    if (oldPath.endsWith('.d.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath, 'components'),
          file: 'component.d.ts',
        },
        replace(key) {
          return `app/components/${key}.d.ts`;
        },
      });
    }

    if (oldPath.endsWith('.ts')) {
      return mapPaths(oldPath, {
        find: {
          directory: join('app', podPath, 'components'),
          file: 'component.ts',
        },
        replace(key) {
          return `app/components/${key}.ts`;
        },
      });
    }

    return mapPaths(oldPath, {
      find: {
        directory: join('app', podPath, 'components'),
        file: 'component.js',
      },
      replace(key) {
        return `app/components/${key}.js`;
      },
    });
  });
}
