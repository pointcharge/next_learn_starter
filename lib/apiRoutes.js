import APIroutes from "../route-desctiption/routes.json";
import mathRoutes from "../route-desctiption/math-routes.json";

export function getAPIRoutes() {
  return APIroutes.routes;
}

export function getMathRoutes() {
  return mathRoutes.routes;
}
