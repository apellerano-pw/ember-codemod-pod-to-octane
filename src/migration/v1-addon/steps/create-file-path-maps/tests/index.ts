import type { FilePathMap, Options } from '../../../../../types/index.js';
import { mapComponents } from './map-components.js';
import { mapRouteAdapters } from './map-route-adapters.js';
import { mapRouteControllers } from './map-route-controllers.js';
import { mapRouteModels } from './map-route-models.js';
import { mapRouteRoutes } from './map-route-routes.js';
import { mapRouteSerializers } from './map-route-serializers.js';
import { mapServices } from './map-services.js';
import { mapUnitComponents } from './map-unit-components.js';

export function mapTestsFolder(options: Options): FilePathMap {
  return new Map([
    ...mapComponents(options),
    ...mapRouteAdapters(options),
    ...mapRouteControllers(options),
    ...mapRouteModels(options),
    ...mapRouteRoutes(options),
    ...mapRouteSerializers(options),
    ...mapServices(options),
    ...mapUnitComponents(options),
  ]);
}
