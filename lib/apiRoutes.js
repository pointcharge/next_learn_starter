import APIroutes from "../route-desctiption/routes.json";
import mathRoutes from "../route-desctiption/math-routes.json";
import mathConsts from "../route-desctiption/math-consts.json";

export function getAPIRoutes() {
  return APIroutes.routes;
}

export function getMathRoutes() {
  return mathRoutes.routes;
}

export function getMathConst() {
  return mathConsts.routes;
}
