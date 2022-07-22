import { migrationStrategyForComponents } from '../../../../../src/migration/ember-app/tests/components.js';
import { inputProject } from '../../../../fixtures/app-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/app-typescript';

test('migration | ember-app | tests | components > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponents(projectRoot), [
    [
      'tests/integration/components/navigation-menu/component-test.ts',
      'tests/integration/components/navigation-menu-test.ts',
    ],
    [
      'tests/integration/components/product/card/component-test.ts',
      'tests/integration/components/product/card-test.ts',
    ],
    [
      'tests/integration/components/product/details/component-test.ts',
      'tests/integration/components/product/details-test.ts',
    ],
    [
      'tests/integration/components/product/image/component-test.ts',
      'tests/integration/components/product/image-test.ts',
    ],
    [
      'tests/integration/components/ui/form/checkbox/component-test.ts',
      'tests/integration/components/ui/form/checkbox-test.ts',
    ],
    [
      'tests/integration/components/ui/form/component-test.ts',
      'tests/integration/components/ui/form-test.ts',
    ],
    [
      'tests/integration/components/ui/form/field/component-test.ts',
      'tests/integration/components/ui/form/field-test.ts',
    ],
    [
      'tests/integration/components/ui/form/information/component-test.ts',
      'tests/integration/components/ui/form/information-test.ts',
    ],
    [
      'tests/integration/components/ui/form/input/component-test.ts',
      'tests/integration/components/ui/form/input-test.ts',
    ],
    [
      'tests/integration/components/ui/form/number/component-test.ts',
      'tests/integration/components/ui/form/number-test.ts',
    ],
    [
      'tests/integration/components/ui/form/select/component-test.ts',
      'tests/integration/components/ui/form/select-test.ts',
    ],
    [
      'tests/integration/components/ui/form/textarea/component-test.ts',
      'tests/integration/components/ui/form/textarea-test.ts',
    ],
    [
      'tests/integration/components/ui/page/component-test.ts',
      'tests/integration/components/ui/page-test.ts',
    ],
  ]);
});