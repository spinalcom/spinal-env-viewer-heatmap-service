import {
  SPINAL_RELATION_TYPE,
  SpinalGraphService
} from "spinal-env-viewer-graph-service";
import HeatMap from "./heatMapModel";

const RELATION_NAME = "hasHeatMap";

let heatmapService = {
  createHeatMap(nodeId, heatMapName, heatMapMinName, heatMapMinValue,
    heatMapMinColor, heatMapMaxName, heatMapMaxValue, heatMapMaxColor,
    heatMapAverageName = null, heatMapAverageValue = null,
    heatMapAverageColor = null) {

    this.getHeatMap(nodeId, heatMapName).then(heatMapFound => {
      console.log("heatMapFound before condition", heatMapFound);

      if (typeof heatMapFound === "undefined") {
        console.log("heatMapFound inside if condition", heatMapFound);

        let heatMap = new HeatMap(heatMapName, heatMapMinName,
          heatMapMinValue,
          heatMapMinColor, heatMapMaxName, heatMapMaxValue,
          heatMapMaxColor,
          heatMapAverageName, heatMapAverageValue, heatMapAverageColor);

        let heatMapNode = SpinalGraphService.createNode({
          name: heatMapName
        }, heatMap);

        SpinalGraphService.addChild(
          nodeId,
          heatMapNode,
          RELATION_NAME,
          SPINAL_RELATION_TYPE
        );
      } else {
        heatMapFound.element.load().then(el => {
          this.updateHeatMap(el, heatMapMinValue,
            heatMapMinColor,
            heatMapMaxValue, heatMapMaxColor, heatMapAverageColor);
        })

      }
    })



  },
  getHeatMap(dashboardId, heatMapName) {
    return SpinalGraphService.getChildren(dashboardId, [RELATION_NAME]).then(
      heatMaps => {
        if (heatMapName) {
          for (let index = 0; index < heatMaps.length; index++) {
            const heatMap = heatMaps[index];
            if (heatMap.name.get().toLowerCase() === heatMapName.toLowerCase())
              return heatMap;
          }
        } else {
          return heatMaps;
        }

        return;
      }
    );
  },
  updateHeatMap(heatMap, minValue, minColor, maxValue, maxColor, averageColor) {
    minValue && minValue !== heatMap.min.value.get() ?
      heatMap.min.value.set(minValue) :
      "";

    minColor && minColor !== heatMap.min.color.get() ?
      heatMap.min.color.set(minColor) :
      "";

    maxValue && maxValue !== heatMap.max.value.get() ?
      heatMap.max.value.set(maxValue) :
      "";

    maxColor && maxColor !== heatMap.max.color.get() ?
      heatMap.max.color.set(maxColor) :
      "";

    heatMap.average && maxValue && minValue ?
      heatMap.average.value.set((maxValue + minValue) / 2) :
      "";

    heatMap.average && averageColor ?
      heatMap.average.color.set(averageColor) :
      "";
  }
};

export {
  heatmapService
};

export default heatmapService;