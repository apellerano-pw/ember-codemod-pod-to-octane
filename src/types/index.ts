import type { FilePath, FilePathMap } from '@codemod-utils/files';

type CodemodOptions = {
  pod: string;
  podPath: string;
  projectRoot: string;
  projectType: 'app' | 'v1-addon';
  testRun: boolean;
};

type FilePathMapEntries = [FilePath, FilePath][];

type Options = {
  pod: string;
  podPath: string;
  projectRoot: string;
  projectType: 'app' | 'v1-addon';
  testRun: boolean;
};

export type { CodemodOptions, FilePathMap, FilePathMapEntries, Options };
