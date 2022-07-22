import { migrationStrategyForRouteTemplates } from '../../../../../src/migration/ember-engine/addon/route-templates.js';
import { inputProject } from '../../../../fixtures/engine-typescript.js';
import { assert, loadFixture, test } from '../../../../test-helpers.js';

const projectRoot = 'tmp/engine-typescript';

test('migration | ember-engine | addon | route-templates > TypeScript', function () {
  loadFixture(projectRoot, inputProject);

  assert.deepStrictEqual(migrationStrategyForRouteTemplates(projectRoot), [
    [
      'addon/product-details/template.hbs',
      'addon/templates/product-details.hbs',
    ],
    [
      'addon/products/product/template.hbs',
      'addon/templates/products/product.hbs',
    ],
    ['addon/products/template.hbs', 'addon/templates/products.hbs'],
  ]);
});
