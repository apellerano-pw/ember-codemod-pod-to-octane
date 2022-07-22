import { migrationStrategyForComponentClasses } from '../../../../../src/migration/ember-addon/addon/component-classes.js';
import { inputProject } from '../../../../fixtures/addon-javascript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/addon-javascript';

test('migration | ember-addon | addon | component-classes > JavaScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForComponentClasses(projectRoot), [
    [
      'addon/components/ui/form/checkbox/component.js',
      'addon/components/ui/form/checkbox.js',
    ],
    ['addon/components/ui/form/component.js', 'addon/components/ui/form.js'],
    [
      'addon/components/ui/form/input/component.js',
      'addon/components/ui/form/input.js',
    ],
    [
      'addon/components/ui/form/number/component.js',
      'addon/components/ui/form/number.js',
    ],
    [
      'addon/components/ui/form/select/component.js',
      'addon/components/ui/form/select.js',
    ],
    [
      'addon/components/ui/form/textarea/component.js',
      'addon/components/ui/form/textarea.js',
    ],
  ]);
});