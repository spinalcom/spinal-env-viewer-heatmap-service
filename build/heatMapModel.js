"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const spinalCore = require("spinal-core-connectorjs");

class HeatMap extends window.Model {
  constructor(name, minName, minValue, minColor, maxName, maxValue, maxColor, averageName = null, averageValue = null, averageColor = null) {
    super();
    this.add_attr({
      name: name,
      min: {
        name: minName,
        value: minValue,
        color: minColor
      },
      average: averageName && averageValue && averageColor ? {
        name: averageName,
        value: averageValue,
        color: averageColor
      } : null,
      max: {
        name: maxName,
        value: maxValue,
        color: maxColor
      }
    });
  }
}

exports.default = HeatMap;

spinalCore.register_models([HeatMap]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWF0TWFwTW9kZWwuanMiXSwibmFtZXMiOlsic3BpbmFsQ29yZSIsInJlcXVpcmUiLCJIZWF0TWFwIiwid2luZG93IiwiTW9kZWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtaW5OYW1lIiwibWluVmFsdWUiLCJtaW5Db2xvciIsIm1heE5hbWUiLCJtYXhWYWx1ZSIsIm1heENvbG9yIiwiYXZlcmFnZU5hbWUiLCJhdmVyYWdlVmFsdWUiLCJhdmVyYWdlQ29sb3IiLCJhZGRfYXR0ciIsIm1pbiIsInZhbHVlIiwiY29sb3IiLCJhdmVyYWdlIiwibWF4IiwicmVnaXN0ZXJfbW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLGFBQWFDLFFBQVEseUJBQVIsQ0FBbkI7O0FBR0EsTUFBTUMsT0FBTixTQUFzQkMsT0FBT0MsS0FBN0IsQ0FBbUM7QUFDakNDLGNBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxRQUEzQixFQUFxQ0MsUUFBckMsRUFBK0NDLE9BQS9DLEVBQXdEQyxRQUF4RCxFQUFrRUMsUUFBbEUsRUFDRUMsY0FBYyxJQURoQixFQUNzQkMsZUFBZSxJQURyQyxFQUVFQyxlQUFlLElBRmpCLEVBRXVCO0FBQ3JCO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ1pWLFlBQU1BLElBRE07QUFFWlcsV0FBSztBQUNIWCxjQUFNQyxPQURIO0FBRUhXLGVBQU9WLFFBRko7QUFHSFcsZUFBT1Y7QUFISixPQUZPO0FBT1pXLGVBQVVQLGVBQWVDLFlBQWYsSUFBK0JDLFlBQWhDLEdBQWdEO0FBQ3ZEVCxjQUFNTyxXQURpRDtBQUV2REssZUFBT0osWUFGZ0Q7QUFHdkRLLGVBQU9KO0FBSGdELE9BQWhELEdBSUwsSUFYUTtBQVlaTSxXQUFLO0FBQ0hmLGNBQU1JLE9BREg7QUFFSFEsZUFBT1AsUUFGSjtBQUdIUSxlQUFPUDtBQUhKO0FBWk8sS0FBZDtBQW1CRDtBQXhCZ0M7O2tCQTJCcEJWLE87O0FBQ2ZGLFdBQVdzQixlQUFYLENBQTJCLENBQUNwQixPQUFELENBQTNCIiwiZmlsZSI6ImhlYXRNYXBNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNwaW5hbENvcmUgPSByZXF1aXJlKFwic3BpbmFsLWNvcmUtY29ubmVjdG9yanNcIik7XG5cblxuY2xhc3MgSGVhdE1hcCBleHRlbmRzIHdpbmRvdy5Nb2RlbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1pbk5hbWUsIG1pblZhbHVlLCBtaW5Db2xvciwgbWF4TmFtZSwgbWF4VmFsdWUsIG1heENvbG9yLFxuICAgIGF2ZXJhZ2VOYW1lID0gbnVsbCwgYXZlcmFnZVZhbHVlID0gbnVsbCxcbiAgICBhdmVyYWdlQ29sb3IgPSBudWxsKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFkZF9hdHRyKHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBtaW46IHtcbiAgICAgICAgbmFtZTogbWluTmFtZSxcbiAgICAgICAgdmFsdWU6IG1pblZhbHVlLFxuICAgICAgICBjb2xvcjogbWluQ29sb3JcbiAgICAgIH0sXG4gICAgICBhdmVyYWdlOiAoYXZlcmFnZU5hbWUgJiYgYXZlcmFnZVZhbHVlICYmIGF2ZXJhZ2VDb2xvcikgPyB7XG4gICAgICAgIG5hbWU6IGF2ZXJhZ2VOYW1lLFxuICAgICAgICB2YWx1ZTogYXZlcmFnZVZhbHVlLFxuICAgICAgICBjb2xvcjogYXZlcmFnZUNvbG9yXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG1heDoge1xuICAgICAgICBuYW1lOiBtYXhOYW1lLFxuICAgICAgICB2YWx1ZTogbWF4VmFsdWUsXG4gICAgICAgIGNvbG9yOiBtYXhDb2xvclxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWF0TWFwO1xuc3BpbmFsQ29yZS5yZWdpc3Rlcl9tb2RlbHMoW0hlYXRNYXBdKTsiXX0=