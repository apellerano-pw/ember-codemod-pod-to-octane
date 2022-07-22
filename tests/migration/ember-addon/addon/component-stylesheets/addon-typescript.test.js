import { migrationStrategyForComponentStylesheets } from '../../../../../src/migration/ember-addon/addon/component-stylesheets.js';
import { inputProject } from '../../../../fixtures/addon-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/addon-typescript';

test('migration | ember-addon | addon | component-stylesheets > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(
    migrationStrategyForComponentStylesheets(projectRoot),
    [
      [
        'addon/components/ui/form/checkbox/styles.css',
        'addon/components/ui/form/checkbox.css',
      ],
      [
        'addon/components/ui/form/field/styles.css',
        'addon/components/ui/form/field.css',
      ],
      [
        'addon/components/ui/form/information/styles.css',
        'addon/components/ui/form/information.css',
      ],
      [
        'addon/components/ui/form/input/styles.css',
        'addon/components/ui/form/input.css',
      ],
      [
        'addon/components/ui/form/number/styles.css',
        'addon/components/ui/form/number.css',
      ],
      [
        'addon/components/ui/form/select/styles.css',
        'addon/components/ui/form/select.css',
      ],
      ['addon/components/ui/form/styles.css', 'addon/components/ui/form.css'],
      [
        'addon/components/ui/form/textarea/styles.css',
        'addon/components/ui/form/textarea.css',
      ],
      ['addon/components/ui/page/styles.css', 'addon/components/ui/page.css'],
    ]
  );
});