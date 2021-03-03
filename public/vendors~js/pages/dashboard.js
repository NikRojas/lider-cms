(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~js/pages/dashboard"],{

/***/ "./node_modules/echarts/lib/chart/bar.js":
/*!***********************************************!*\
  !*** ./node_modules/echarts/lib/chart/bar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var echarts = __webpack_require__(/*! ../echarts */ "./node_modules/echarts/lib/echarts.js");

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var _barGrid = __webpack_require__(/*! ../layout/barGrid */ "./node_modules/echarts/lib/layout/barGrid.js");

var layout = _barGrid.layout;
var largeLayout = _barGrid.largeLayout;

__webpack_require__(/*! ../coord/cartesian/Grid */ "./node_modules/echarts/lib/coord/cartesian/Grid.js");

__webpack_require__(/*! ./bar/BarSeries */ "./node_modules/echarts/lib/chart/bar/BarSeries.js");

__webpack_require__(/*! ./bar/BarView */ "./node_modules/echarts/lib/chart/bar/BarView.js");

__webpack_require__(/*! ../component/gridSimple */ "./node_modules/echarts/lib/component/gridSimple.js");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// In case developer forget to include grid component
echarts.registerLayout(echarts.PRIORITY.VISUAL.LAYOUT, zrUtil.curry(layout, 'bar')); // Use higher prority to avoid to be blocked by other overall layout, which do not
// only exist in this module, but probably also exist in other modules, like `barPolar`.

echarts.registerLayout(echarts.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, largeLayout);
echarts.registerVisual({
  seriesType: 'bar',
  reset: function (seriesModel) {
    // Visual coding for legend
    seriesModel.getData().setVisual('legendSymbol', 'roundRect');
  }
});

/***/ }),

/***/ "./node_modules/echarts/lib/chart/bar/BarSeries.js":
/*!*********************************************************!*\
  !*** ./node_modules/echarts/lib/chart/bar/BarSeries.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var BaseBarSeries = __webpack_require__(/*! ./BaseBarSeries */ "./node_modules/echarts/lib/chart/bar/BaseBarSeries.js");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var _default = BaseBarSeries.extend({
  type: 'series.bar',
  dependencies: ['grid', 'polar'],
  brushSelector: 'rect',

  /**
   * @override
   */
  getProgressive: function () {
    // Do not support progressive in normal mode.
    return this.get('large') ? this.get('progressive') : false;
  },

  /**
   * @override
   */
  getProgressiveThreshold: function () {
    // Do not support progressive in normal mode.
    var progressiveThreshold = this.get('progressiveThreshold');
    var largeThreshold = this.get('largeThreshold');

    if (largeThreshold > progressiveThreshold) {
      progressiveThreshold = largeThreshold;
    }

    return progressiveThreshold;
  },
  defaultOption: {
    // If clipped
    // Only available on cartesian2d
    clip: true,
    // If use caps on two sides of bars
    // Only available on tangential polar bar
    roundCap: false,
    showBackground: false,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)',
      borderColor: null,
      borderWidth: 0,
      borderType: 'solid',
      borderRadius: 0,
      shadowBlur: 0,
      shadowColor: null,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1
    }
  }
});

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/bar/BarView.js":
/*!*******************************************************!*\
  !*** ./node_modules/echarts/lib/chart/bar/BarView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var _config = __webpack_require__(/*! ../../config */ "./node_modules/echarts/lib/config.js");

var __DEV__ = _config.__DEV__;

var echarts = __webpack_require__(/*! ../../echarts */ "./node_modules/echarts/lib/echarts.js");

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var _helper = __webpack_require__(/*! ./helper */ "./node_modules/echarts/lib/chart/bar/helper.js");

var setLabel = _helper.setLabel;

var Model = __webpack_require__(/*! ../../model/Model */ "./node_modules/echarts/lib/model/Model.js");

var barItemStyle = __webpack_require__(/*! ./barItemStyle */ "./node_modules/echarts/lib/chart/bar/barItemStyle.js");

var Path = __webpack_require__(/*! zrender/lib/graphic/Path */ "./node_modules/zrender/lib/graphic/Path.js");

var Group = __webpack_require__(/*! zrender/lib/container/Group */ "./node_modules/zrender/lib/container/Group.js");

var _throttle = __webpack_require__(/*! ../../util/throttle */ "./node_modules/echarts/lib/util/throttle.js");

var throttle = _throttle.throttle;

var _createClipPathFromCoordSys = __webpack_require__(/*! ../helper/createClipPathFromCoordSys */ "./node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js");

var createClipPath = _createClipPathFromCoordSys.createClipPath;

var Sausage = __webpack_require__(/*! ../../util/shape/sausage */ "./node_modules/echarts/lib/util/shape/sausage.js");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var BAR_BORDER_WIDTH_QUERY = ['itemStyle', 'barBorderWidth'];
var _eventPos = [0, 0]; // FIXME
// Just for compatible with ec2.

zrUtil.extend(Model.prototype, barItemStyle);

function getClipArea(coord, data) {
  var coordSysClipArea = coord.getArea && coord.getArea();

  if (coord.type === 'cartesian2d') {
    var baseAxis = coord.getBaseAxis(); // When boundaryGap is false or using time axis. bar may exceed the grid.
    // We should not clip this part.
    // See test/bar2.html

    if (baseAxis.type !== 'category' || !baseAxis.onBand) {
      var expandWidth = data.getLayout('bandWidth');

      if (baseAxis.isHorizontal()) {
        coordSysClipArea.x -= expandWidth;
        coordSysClipArea.width += expandWidth * 2;
      } else {
        coordSysClipArea.y -= expandWidth;
        coordSysClipArea.height += expandWidth * 2;
      }
    }
  }

  return coordSysClipArea;
}

var _default = echarts.extendChartView({
  type: 'bar',
  render: function (seriesModel, ecModel, api) {
    this._updateDrawMode(seriesModel);

    var coordinateSystemType = seriesModel.get('coordinateSystem');

    if (coordinateSystemType === 'cartesian2d' || coordinateSystemType === 'polar') {
      this._isLargeDraw ? this._renderLarge(seriesModel, ecModel, api) : this._renderNormal(seriesModel, ecModel, api);
    } else {}

    return this.group;
  },
  incrementalPrepareRender: function (seriesModel, ecModel, api) {
    this._clear();

    this._updateDrawMode(seriesModel);
  },
  incrementalRender: function (params, seriesModel, ecModel, api) {
    // Do not support progressive in normal mode.
    this._incrementalRenderLarge(params, seriesModel);
  },
  _updateDrawMode: function (seriesModel) {
    var isLargeDraw = seriesModel.pipelineContext.large;

    if (this._isLargeDraw == null || isLargeDraw ^ this._isLargeDraw) {
      this._isLargeDraw = isLargeDraw;

      this._clear();
    }
  },
  _renderNormal: function (seriesModel, ecModel, api) {
    var group = this.group;
    var data = seriesModel.getData();
    var oldData = this._data;
    var coord = seriesModel.coordinateSystem;
    var baseAxis = coord.getBaseAxis();
    var isHorizontalOrRadial;

    if (coord.type === 'cartesian2d') {
      isHorizontalOrRadial = baseAxis.isHorizontal();
    } else if (coord.type === 'polar') {
      isHorizontalOrRadial = baseAxis.dim === 'angle';
    }

    var animationModel = seriesModel.isAnimationEnabled() ? seriesModel : null;
    var needsClip = seriesModel.get('clip', true);
    var coordSysClipArea = getClipArea(coord, data); // If there is clipPath created in large mode. Remove it.

    group.removeClipPath(); // We don't use clipPath in normal mode because we needs a perfect animation
    // And don't want the label are clipped.

    var roundCap = seriesModel.get('roundCap', true);
    var drawBackground = seriesModel.get('showBackground', true);
    var backgroundModel = seriesModel.getModel('backgroundStyle');
    var barBorderRadius = backgroundModel.get('barBorderRadius') || 0;
    var bgEls = [];
    var oldBgEls = this._backgroundEls || [];

    var createBackground = function (dataIndex) {
      var bgLayout = getLayout[coord.type](data, dataIndex);
      var bgEl = createBackgroundEl(coord, isHorizontalOrRadial, bgLayout);
      bgEl.useStyle(backgroundModel.getBarItemStyle()); // Only cartesian2d support borderRadius.

      if (coord.type === 'cartesian2d') {
        bgEl.setShape('r', barBorderRadius);
      }

      bgEls[dataIndex] = bgEl;
      return bgEl;
    };

    data.diff(oldData).add(function (dataIndex) {
      var itemModel = data.getItemModel(dataIndex);
      var layout = getLayout[coord.type](data, dataIndex, itemModel);

      if (drawBackground) {
        createBackground(dataIndex);
      } // If dataZoom in filteMode: 'empty', the baseValue can be set as NaN in "axisProxy".


      if (!data.hasValue(dataIndex)) {
        return;
      }

      if (needsClip) {
        // Clip will modify the layout params.
        // And return a boolean to determine if the shape are fully clipped.
        var isClipped = clip[coord.type](coordSysClipArea, layout);

        if (isClipped) {
          group.remove(el);
          return;
        }
      }

      var el = elementCreator[coord.type](dataIndex, layout, isHorizontalOrRadial, animationModel, false, roundCap);
      data.setItemGraphicEl(dataIndex, el);
      group.add(el);
      updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
    }).update(function (newIndex, oldIndex) {
      var itemModel = data.getItemModel(newIndex);
      var layout = getLayout[coord.type](data, newIndex, itemModel);

      if (drawBackground) {
        var bgEl;

        if (oldBgEls.length === 0) {
          bgEl = createBackground(oldIndex);
        } else {
          bgEl = oldBgEls[oldIndex];
          bgEl.useStyle(backgroundModel.getBarItemStyle()); // Only cartesian2d support borderRadius.

          if (coord.type === 'cartesian2d') {
            bgEl.setShape('r', barBorderRadius);
          }

          bgEls[newIndex] = bgEl;
        }

        var bgLayout = getLayout[coord.type](data, newIndex);
        var shape = createBackgroundShape(isHorizontalOrRadial, bgLayout, coord);
        graphic.updateProps(bgEl, {
          shape: shape
        }, animationModel, newIndex);
      }

      var el = oldData.getItemGraphicEl(oldIndex);

      if (!data.hasValue(newIndex)) {
        group.remove(el);
        return;
      }

      if (needsClip) {
        var isClipped = clip[coord.type](coordSysClipArea, layout);

        if (isClipped) {
          group.remove(el);
          return;
        }
      }

      if (el) {
        graphic.updateProps(el, {
          shape: layout
        }, animationModel, newIndex);
      } else {
        el = elementCreator[coord.type](newIndex, layout, isHorizontalOrRadial, animationModel, true, roundCap);
      }

      data.setItemGraphicEl(newIndex, el); // Add back

      group.add(el);
      updateStyle(el, data, newIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
    }).remove(function (dataIndex) {
      var el = oldData.getItemGraphicEl(dataIndex);

      if (coord.type === 'cartesian2d') {
        el && removeRect(dataIndex, animationModel, el);
      } else {
        el && removeSector(dataIndex, animationModel, el);
      }
    }).execute();
    var bgGroup = this._backgroundGroup || (this._backgroundGroup = new Group());
    bgGroup.removeAll();

    for (var i = 0; i < bgEls.length; ++i) {
      bgGroup.add(bgEls[i]);
    }

    group.add(bgGroup);
    this._backgroundEls = bgEls;
    this._data = data;
  },
  _renderLarge: function (seriesModel, ecModel, api) {
    this._clear();

    createLarge(seriesModel, this.group); // Use clipPath in large mode.

    var clipPath = seriesModel.get('clip', true) ? createClipPath(seriesModel.coordinateSystem, false, seriesModel) : null;

    if (clipPath) {
      this.group.setClipPath(clipPath);
    } else {
      this.group.removeClipPath();
    }
  },
  _incrementalRenderLarge: function (params, seriesModel) {
    this._removeBackground();

    createLarge(seriesModel, this.group, true);
  },
  dispose: zrUtil.noop,
  remove: function (ecModel) {
    this._clear(ecModel);
  },
  _clear: function (ecModel) {
    var group = this.group;
    var data = this._data;

    if (ecModel && ecModel.get('animation') && data && !this._isLargeDraw) {
      this._removeBackground();

      this._backgroundEls = [];
      data.eachItemGraphicEl(function (el) {
        if (el.type === 'sector') {
          removeSector(el.dataIndex, ecModel, el);
        } else {
          removeRect(el.dataIndex, ecModel, el);
        }
      });
    } else {
      group.removeAll();
    }

    this._data = null;
  },
  _removeBackground: function () {
    this.group.remove(this._backgroundGroup);
    this._backgroundGroup = null;
  }
});

var mathMax = Math.max;
var mathMin = Math.min;
var clip = {
  cartesian2d: function (coordSysBoundingRect, layout) {
    var signWidth = layout.width < 0 ? -1 : 1;
    var signHeight = layout.height < 0 ? -1 : 1; // Needs positive width and height

    if (signWidth < 0) {
      layout.x += layout.width;
      layout.width = -layout.width;
    }

    if (signHeight < 0) {
      layout.y += layout.height;
      layout.height = -layout.height;
    }

    var x = mathMax(layout.x, coordSysBoundingRect.x);
    var x2 = mathMin(layout.x + layout.width, coordSysBoundingRect.x + coordSysBoundingRect.width);
    var y = mathMax(layout.y, coordSysBoundingRect.y);
    var y2 = mathMin(layout.y + layout.height, coordSysBoundingRect.y + coordSysBoundingRect.height);
    layout.x = x;
    layout.y = y;
    layout.width = x2 - x;
    layout.height = y2 - y;
    var clipped = layout.width < 0 || layout.height < 0; // Reverse back

    if (signWidth < 0) {
      layout.x += layout.width;
      layout.width = -layout.width;
    }

    if (signHeight < 0) {
      layout.y += layout.height;
      layout.height = -layout.height;
    }

    return clipped;
  },
  polar: function (coordSysClipArea, layout) {
    var signR = layout.r0 <= layout.r ? 1 : -1; // Make sure r is larger than r0

    if (signR < 0) {
      var r = layout.r;
      layout.r = layout.r0;
      layout.r0 = r;
    }

    var r = mathMin(layout.r, coordSysClipArea.r);
    var r0 = mathMax(layout.r0, coordSysClipArea.r0);
    layout.r = r;
    layout.r0 = r0;
    var clipped = r - r0 < 0; // Reverse back

    if (signR < 0) {
      var r = layout.r;
      layout.r = layout.r0;
      layout.r0 = r;
    }

    return clipped;
  }
};
var elementCreator = {
  cartesian2d: function (dataIndex, layout, isHorizontal, animationModel, isUpdate) {
    var rect = new graphic.Rect({
      shape: zrUtil.extend({}, layout),
      z2: 1
    });
    rect.name = 'item'; // Animation

    if (animationModel) {
      var rectShape = rect.shape;
      var animateProperty = isHorizontal ? 'height' : 'width';
      var animateTarget = {};
      rectShape[animateProperty] = 0;
      animateTarget[animateProperty] = layout[animateProperty];
      graphic[isUpdate ? 'updateProps' : 'initProps'](rect, {
        shape: animateTarget
      }, animationModel, dataIndex);
    }

    return rect;
  },
  polar: function (dataIndex, layout, isRadial, animationModel, isUpdate, roundCap) {
    // Keep the same logic with bar in catesion: use end value to control
    // direction. Notice that if clockwise is true (by default), the sector
    // will always draw clockwisely, no matter whether endAngle is greater
    // or less than startAngle.
    var clockwise = layout.startAngle < layout.endAngle;
    var ShapeClass = !isRadial && roundCap ? Sausage : graphic.Sector;
    var sector = new ShapeClass({
      shape: zrUtil.defaults({
        clockwise: clockwise
      }, layout),
      z2: 1
    });
    sector.name = 'item'; // Animation

    if (animationModel) {
      var sectorShape = sector.shape;
      var animateProperty = isRadial ? 'r' : 'endAngle';
      var animateTarget = {};
      sectorShape[animateProperty] = isRadial ? 0 : layout.startAngle;
      animateTarget[animateProperty] = layout[animateProperty];
      graphic[isUpdate ? 'updateProps' : 'initProps'](sector, {
        shape: animateTarget
      }, animationModel, dataIndex);
    }

    return sector;
  }
};

function removeRect(dataIndex, animationModel, el) {
  // Not show text when animating
  el.style.text = null;
  graphic.updateProps(el, {
    shape: {
      width: 0
    }
  }, animationModel, dataIndex, function () {
    el.parent && el.parent.remove(el);
  });
}

function removeSector(dataIndex, animationModel, el) {
  // Not show text when animating
  el.style.text = null;
  graphic.updateProps(el, {
    shape: {
      r: el.shape.r0
    }
  }, animationModel, dataIndex, function () {
    el.parent && el.parent.remove(el);
  });
}

var getLayout = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function (data, dataIndex, itemModel) {
    var layout = data.getItemLayout(dataIndex);
    var fixedLineWidth = itemModel ? getLineWidth(itemModel, layout) : 0; // fix layout with lineWidth

    var signX = layout.width > 0 ? 1 : -1;
    var signY = layout.height > 0 ? 1 : -1;
    return {
      x: layout.x + signX * fixedLineWidth / 2,
      y: layout.y + signY * fixedLineWidth / 2,
      width: layout.width - signX * fixedLineWidth,
      height: layout.height - signY * fixedLineWidth
    };
  },
  polar: function (data, dataIndex, itemModel) {
    var layout = data.getItemLayout(dataIndex);
    return {
      cx: layout.cx,
      cy: layout.cy,
      r0: layout.r0,
      r: layout.r,
      startAngle: layout.startAngle,
      endAngle: layout.endAngle
    };
  }
};

function isZeroOnPolar(layout) {
  return layout.startAngle != null && layout.endAngle != null && layout.startAngle === layout.endAngle;
}

function updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontal, isPolar) {
  var color = data.getItemVisual(dataIndex, 'color');
  var opacity = data.getItemVisual(dataIndex, 'opacity');
  var stroke = data.getVisual('borderColor');
  var itemStyleModel = itemModel.getModel('itemStyle');
  var hoverStyle = itemModel.getModel('emphasis.itemStyle').getBarItemStyle();

  if (!isPolar) {
    el.setShape('r', itemStyleModel.get('barBorderRadius') || 0);
  }

  el.useStyle(zrUtil.defaults({
    stroke: isZeroOnPolar(layout) ? 'none' : stroke,
    fill: isZeroOnPolar(layout) ? 'none' : color,
    opacity: opacity
  }, itemStyleModel.getBarItemStyle()));
  var cursorStyle = itemModel.getShallow('cursor');
  cursorStyle && el.attr('cursor', cursorStyle);
  var labelPositionOutside = isHorizontal ? layout.height > 0 ? 'bottom' : 'top' : layout.width > 0 ? 'left' : 'right';

  if (!isPolar) {
    setLabel(el.style, hoverStyle, itemModel, color, seriesModel, dataIndex, labelPositionOutside);
  }

  if (isZeroOnPolar(layout)) {
    hoverStyle.fill = hoverStyle.stroke = 'none';
  }

  graphic.setHoverStyle(el, hoverStyle);
} // In case width or height are too small.


function getLineWidth(itemModel, rawLayout) {
  var lineWidth = itemModel.get(BAR_BORDER_WIDTH_QUERY) || 0; // width or height may be NaN for empty data

  var width = isNaN(rawLayout.width) ? Number.MAX_VALUE : Math.abs(rawLayout.width);
  var height = isNaN(rawLayout.height) ? Number.MAX_VALUE : Math.abs(rawLayout.height);
  return Math.min(lineWidth, width, height);
}

var LargePath = Path.extend({
  type: 'largeBar',
  shape: {
    points: []
  },
  buildPath: function (ctx, shape) {
    // Drawing lines is more efficient than drawing
    // a whole line or drawing rects.
    var points = shape.points;
    var startPoint = this.__startPoint;
    var baseDimIdx = this.__baseDimIdx;

    for (var i = 0; i < points.length; i += 2) {
      startPoint[baseDimIdx] = points[i + baseDimIdx];
      ctx.moveTo(startPoint[0], startPoint[1]);
      ctx.lineTo(points[i], points[i + 1]);
    }
  }
});

function createLarge(seriesModel, group, incremental) {
  // TODO support polar
  var data = seriesModel.getData();
  var startPoint = [];
  var baseDimIdx = data.getLayout('valueAxisHorizontal') ? 1 : 0;
  startPoint[1 - baseDimIdx] = data.getLayout('valueAxisStart');
  var largeDataIndices = data.getLayout('largeDataIndices');
  var barWidth = data.getLayout('barWidth');
  var backgroundModel = seriesModel.getModel('backgroundStyle');
  var drawBackground = seriesModel.get('showBackground', true);

  if (drawBackground) {
    var points = data.getLayout('largeBackgroundPoints');
    var backgroundStartPoint = [];
    backgroundStartPoint[1 - baseDimIdx] = data.getLayout('backgroundStart');
    var bgEl = new LargePath({
      shape: {
        points: points
      },
      incremental: !!incremental,
      __startPoint: backgroundStartPoint,
      __baseDimIdx: baseDimIdx,
      __largeDataIndices: largeDataIndices,
      __barWidth: barWidth,
      silent: true,
      z2: 0
    });
    setLargeBackgroundStyle(bgEl, backgroundModel, data);
    group.add(bgEl);
  }

  var el = new LargePath({
    shape: {
      points: data.getLayout('largePoints')
    },
    incremental: !!incremental,
    __startPoint: startPoint,
    __baseDimIdx: baseDimIdx,
    __largeDataIndices: largeDataIndices,
    __barWidth: barWidth
  });
  group.add(el);
  setLargeStyle(el, seriesModel, data); // Enable tooltip and user mouse/touch event handlers.

  el.seriesIndex = seriesModel.seriesIndex;

  if (!seriesModel.get('silent')) {
    el.on('mousedown', largePathUpdateDataIndex);
    el.on('mousemove', largePathUpdateDataIndex);
  }
} // Use throttle to avoid frequently traverse to find dataIndex.


var largePathUpdateDataIndex = throttle(function (event) {
  var largePath = this;
  var dataIndex = largePathFindDataIndex(largePath, event.offsetX, event.offsetY);
  largePath.dataIndex = dataIndex >= 0 ? dataIndex : null;
}, 30, false);

function largePathFindDataIndex(largePath, x, y) {
  var baseDimIdx = largePath.__baseDimIdx;
  var valueDimIdx = 1 - baseDimIdx;
  var points = largePath.shape.points;
  var largeDataIndices = largePath.__largeDataIndices;
  var barWidthHalf = Math.abs(largePath.__barWidth / 2);
  var startValueVal = largePath.__startPoint[valueDimIdx];
  _eventPos[0] = x;
  _eventPos[1] = y;
  var pointerBaseVal = _eventPos[baseDimIdx];
  var pointerValueVal = _eventPos[1 - baseDimIdx];
  var baseLowerBound = pointerBaseVal - barWidthHalf;
  var baseUpperBound = pointerBaseVal + barWidthHalf;

  for (var i = 0, len = points.length / 2; i < len; i++) {
    var ii = i * 2;
    var barBaseVal = points[ii + baseDimIdx];
    var barValueVal = points[ii + valueDimIdx];

    if (barBaseVal >= baseLowerBound && barBaseVal <= baseUpperBound && (startValueVal <= barValueVal ? pointerValueVal >= startValueVal && pointerValueVal <= barValueVal : pointerValueVal >= barValueVal && pointerValueVal <= startValueVal)) {
      return largeDataIndices[i];
    }
  }

  return -1;
}

function setLargeStyle(el, seriesModel, data) {
  var borderColor = data.getVisual('borderColor') || data.getVisual('color');
  var itemStyle = seriesModel.getModel('itemStyle').getItemStyle(['color', 'borderColor']);
  el.useStyle(itemStyle);
  el.style.fill = null;
  el.style.stroke = borderColor;
  el.style.lineWidth = data.getLayout('barWidth');
}

function setLargeBackgroundStyle(el, backgroundModel, data) {
  var borderColor = backgroundModel.get('borderColor') || backgroundModel.get('color');
  var itemStyle = backgroundModel.getItemStyle(['color', 'borderColor']);
  el.useStyle(itemStyle);
  el.style.fill = null;
  el.style.stroke = borderColor;
  el.style.lineWidth = data.getLayout('barWidth');
}

function createBackgroundShape(isHorizontalOrRadial, layout, coord) {
  var coordLayout;
  var isPolar = coord.type === 'polar';

  if (isPolar) {
    coordLayout = coord.getArea();
  } else {
    coordLayout = coord.grid.getRect();
  }

  if (isPolar) {
    return {
      cx: coordLayout.cx,
      cy: coordLayout.cy,
      r0: isHorizontalOrRadial ? coordLayout.r0 : layout.r0,
      r: isHorizontalOrRadial ? coordLayout.r : layout.r,
      startAngle: isHorizontalOrRadial ? layout.startAngle : 0,
      endAngle: isHorizontalOrRadial ? layout.endAngle : Math.PI * 2
    };
  } else {
    return {
      x: isHorizontalOrRadial ? layout.x : coordLayout.x,
      y: isHorizontalOrRadial ? coordLayout.y : layout.y,
      width: isHorizontalOrRadial ? layout.width : coordLayout.width,
      height: isHorizontalOrRadial ? coordLayout.height : layout.height
    };
  }
}

function createBackgroundEl(coord, isHorizontalOrRadial, layout) {
  var ElementClz = coord.type === 'polar' ? graphic.Sector : graphic.Rect;
  return new ElementClz({
    shape: createBackgroundShape(isHorizontalOrRadial, layout, coord),
    silent: true,
    z2: 0
  });
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/bar/BaseBarSeries.js":
/*!*************************************************************!*\
  !*** ./node_modules/echarts/lib/chart/bar/BaseBarSeries.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var SeriesModel = __webpack_require__(/*! ../../model/Series */ "./node_modules/echarts/lib/model/Series.js");

var createListFromArray = __webpack_require__(/*! ../helper/createListFromArray */ "./node_modules/echarts/lib/chart/helper/createListFromArray.js");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var _default = SeriesModel.extend({
  type: 'series.__base_bar__',
  getInitialData: function (option, ecModel) {
    return createListFromArray(this.getSource(), this, {
      useEncodeDefaulter: true
    });
  },
  getMarkerPosition: function (value) {
    var coordSys = this.coordinateSystem;

    if (coordSys) {
      // PENDING if clamp ?
      var pt = coordSys.dataToPoint(coordSys.clampData(value));
      var data = this.getData();
      var offset = data.getLayout('offset');
      var size = data.getLayout('size');
      var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
      pt[offsetIndex] += offset + size / 2;
      return pt;
    }

    return [NaN, NaN];
  },
  defaultOption: {
    zlevel: 0,
    // 一级层叠
    z: 2,
    // 二级层叠
    coordinateSystem: 'cartesian2d',
    legendHoverLink: true,
    // stack: null
    // Cartesian coordinate system
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    // 最小高度改为0
    barMinHeight: 0,
    // 最小角度为0，仅对极坐标系下的柱状图有效
    barMinAngle: 0,
    // cursor: null,
    large: false,
    largeThreshold: 400,
    progressive: 3e3,
    progressiveChunkMode: 'mod',
    // barMaxWidth: null,
    // In cartesian, the default value is 1. Otherwise null.
    // barMinWidth: null,
    // 默认自适应
    // barWidth: null,
    // 柱间距离，默认为柱形宽度的30%，可设固定值
    // barGap: '30%',
    // 类目间柱形距离，默认为类目间距的20%，可设固定值
    // barCategoryGap: '20%',
    // label: {
    //      show: false
    // },
    itemStyle: {},
    emphasis: {}
  }
});

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/bar/barItemStyle.js":
/*!************************************************************!*\
  !*** ./node_modules/echarts/lib/chart/bar/barItemStyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var makeStyleMapper = __webpack_require__(/*! ../../model/mixin/makeStyleMapper */ "./node_modules/echarts/lib/model/mixin/makeStyleMapper.js");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var getBarItemStyle = makeStyleMapper([['fill', 'color'], ['stroke', 'borderColor'], ['lineWidth', 'borderWidth'], // Compatitable with 2
['stroke', 'barBorderColor'], ['lineWidth', 'barBorderWidth'], ['opacity'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['shadowColor']]);
var _default = {
  getBarItemStyle: function (excludes) {
    var style = getBarItemStyle(this, excludes);

    if (this.getBorderLineDash) {
      var lineDash = this.getBorderLineDash();
      lineDash && (style.lineDash = lineDash);
    }

    return style;
  }
};
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/bar/helper.js":
/*!******************************************************!*\
  !*** ./node_modules/echarts/lib/chart/bar/helper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var _labelHelper = __webpack_require__(/*! ../helper/labelHelper */ "./node_modules/echarts/lib/chart/helper/labelHelper.js");

var getDefaultLabel = _labelHelper.getDefaultLabel;

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
function setLabel(normalStyle, hoverStyle, itemModel, color, seriesModel, dataIndex, labelPositionOutside) {
  var labelModel = itemModel.getModel('label');
  var hoverLabelModel = itemModel.getModel('emphasis.label');
  graphic.setLabelStyle(normalStyle, hoverStyle, labelModel, hoverLabelModel, {
    labelFetcher: seriesModel,
    labelDataIndex: dataIndex,
    defaultText: getDefaultLabel(seriesModel.getData(), dataIndex),
    isRectText: true,
    autoColor: color
  });
  fixPosition(normalStyle);
  fixPosition(hoverStyle);
}

function fixPosition(style, labelPositionOutside) {
  if (style.textPosition === 'outside') {
    style.textPosition = labelPositionOutside;
  }
}

exports.setLabel = setLabel;

/***/ }),

/***/ "./node_modules/echarts/lib/util/shape/sausage.js":
/*!********************************************************!*\
  !*** ./node_modules/echarts/lib/util/shape/sausage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var _graphic = __webpack_require__(/*! ../graphic */ "./node_modules/echarts/lib/util/graphic.js");

var extendShape = _graphic.extendShape;

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * Sausage: similar to sector, but have half circle on both sides
 * @public
 */
var _default = extendShape({
  type: 'sausage',
  shape: {
    cx: 0,
    cy: 0,
    r0: 0,
    r: 0,
    startAngle: 0,
    endAngle: Math.PI * 2,
    clockwise: true
  },
  buildPath: function (ctx, shape) {
    var x = shape.cx;
    var y = shape.cy;
    var r0 = Math.max(shape.r0 || 0, 0);
    var r = Math.max(shape.r, 0);
    var dr = (r - r0) * 0.5;
    var rCenter = r0 + dr;
    var startAngle = shape.startAngle;
    var endAngle = shape.endAngle;
    var clockwise = shape.clockwise;
    var unitStartX = Math.cos(startAngle);
    var unitStartY = Math.sin(startAngle);
    var unitEndX = Math.cos(endAngle);
    var unitEndY = Math.sin(endAngle);
    var lessThanCircle = clockwise ? endAngle - startAngle < Math.PI * 2 : startAngle - endAngle < Math.PI * 2;

    if (lessThanCircle) {
      ctx.moveTo(unitStartX * r0 + x, unitStartY * r0 + y);
      ctx.arc(unitStartX * rCenter + x, unitStartY * rCenter + y, dr, -Math.PI + startAngle, startAngle, !clockwise);
    }

    ctx.arc(x, y, r, startAngle, endAngle, !clockwise);
    ctx.moveTo(unitEndX * r + x, unitEndY * r + y);
    ctx.arc(unitEndX * rCenter + x, unitEndY * rCenter + y, dr, endAngle - Math.PI * 2, endAngle - Math.PI, !clockwise);

    if (r0 !== 0) {
      ctx.arc(x, y, r0, endAngle, startAngle, clockwise);
      ctx.moveTo(unitStartX * r0 + x, unitEndY * r0 + y);
    }

    ctx.closePath();
  }
});

module.exports = _default;

/***/ }),

/***/ "./node_modules/v-charts/lib/bar.common.js":
/*!*************************************************!*\
  !*** ./node_modules/v-charts/lib/bar.common.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var constants = __webpack_require__(/*! ./constants */ "./node_modules/v-charts/lib/constants.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/v-charts/lib/utils.js");
var utilsLite = __webpack_require__(/*! utils-lite */ "./node_modules/utils-lite/lib/index.es.js");
__webpack_require__(/*! echarts/lib/chart/bar */ "./node_modules/echarts/lib/chart/bar.js");
var Core = _interopDefault(__webpack_require__(/*! ./core */ "./node_modules/v-charts/lib/core.js"));

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// default opacity of bar while dim-axis type is 'value'
var VALUE_AXIS_OPACITY = 0.5;

function getBarDimAxis(args) {
  var innerRows = args.innerRows,
      dimAxisName = args.dimAxisName,
      dimension = args.dimension,
      axisVisible = args.axisVisible,
      dimAxisType = args.dimAxisType,
      dims = args.dims;

  return dimension.map(function (item) {
    return {
      type: 'category',
      name: dimAxisName,
      nameLocation: 'middle',
      nameGap: 22,
      data: dimAxisType === 'value' ? getValueAxisData(dims) : innerRows.map(function (row) {
        return row[item];
      }),
      axisLabel: {
        formatter: function formatter(v) {
          return String(v);
        }
      },
      show: axisVisible
    };
  });
}

function getValueAxisData(dims) {
  var max = Math.max.apply(null, dims);
  var min = Math.min.apply(null, dims);
  var result = [];
  for (var i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

function getBarMeaAxis(args) {
  var meaAxisName = args.meaAxisName,
      meaAxisType = args.meaAxisType,
      axisVisible = args.axisVisible,
      digit = args.digit,
      scale = args.scale,
      min = args.min,
      max = args.max;

  var meaAxisBase = {
    type: 'value',
    axisTick: {
      show: false
    },
    show: axisVisible
  };
  var meaAxis = [];

  var _loop = function _loop(i) {
    if (meaAxisType[i]) {
      meaAxis[i] = _extends({}, meaAxisBase, {
        axisLabel: {
          formatter: function formatter(val) {
            return utils.getFormated(val, meaAxisType[i], digit);
          }
        }
      });
    } else {
      meaAxis[i] = _extends({}, meaAxisBase);
    }
    meaAxis[i].name = meaAxisName[i] || '';
    meaAxis[i].scale = scale[i] || false;
    meaAxis[i].min = min[i] || null;
    meaAxis[i].max = max[i] || null;
  };

  for (var i = 0; i < 2; i++) {
    _loop(i);
  }

  return meaAxis;
}

function getBarTooltip(args) {
  var axisSite = args.axisSite,
      isHistogram = args.isHistogram,
      meaAxisType = args.meaAxisType,
      digit = args.digit,
      labelMap = args.labelMap;

  var secondAxis = isHistogram ? axisSite.right || [] : axisSite.top || [];
  if (labelMap) {
    secondAxis = secondAxis.map(function (item) {
      return labelMap[item] === undefined ? item : labelMap[item];
    });
  }
  return {
    trigger: 'axis',
    formatter: function formatter(items) {
      var tpl = [];
      tpl.push(items[0].name + '<br>');
      items.forEach(function (item) {
        var seriesName = item.seriesName;
        var type = ~secondAxis.indexOf(seriesName) ? meaAxisType[1] : meaAxisType[0];
        tpl.push(constants.itemPoint(item.color));
        tpl.push(seriesName + ': ');
        tpl.push(utils.getFormated(item.value, type, digit));
        tpl.push('<br>');
      });

      return tpl.join('');
    }
  };
}

function getValueData(seriesTemp, dims) {
  var max = Math.max.apply(null, dims);
  var min = Math.min.apply(null, dims);
  var result = [];
  for (var i = min; i <= max; i++) {
    var index = dims.indexOf(i);
    if (~index) {
      result.push(seriesTemp[index]);
    } else {
      result.push(null);
    }
  }
  return result;
}

function getBarSeries(args) {
  var innerRows = args.innerRows,
      metrics = args.metrics,
      stack = args.stack,
      axisSite = args.axisSite,
      isHistogram = args.isHistogram,
      labelMap = args.labelMap,
      itemStyle = args.itemStyle,
      label = args.label,
      _args$showLine = args.showLine,
      showLine = _args$showLine === undefined ? [] : _args$showLine,
      dimAxisType = args.dimAxisType,
      barGap = args.barGap,
      opacity = args.opacity,
      dims = args.dims;

  var series = [];
  var seriesTemp = {};
  var secondAxis = isHistogram ? axisSite.right || [] : axisSite.top || [];
  var secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex';
  var stackMap = stack && utils.getStackMap(stack);
  metrics.forEach(function (item) {
    seriesTemp[item] = [];
  });
  innerRows.forEach(function (row) {
    metrics.forEach(function (item) {
      seriesTemp[item].push(row[item]);
    });
  });
  series = Object.keys(seriesTemp).map(function (item, index) {
    var data = dimAxisType === 'value' ? getValueData(seriesTemp[item], dims) : seriesTemp[item];
    var seriesItem = defineProperty({
      name: labelMap[item] != null ? labelMap[item] : item,
      type: ~showLine.indexOf(item) ? 'line' : 'bar',
      data: data
    }, secondDimAxisIndex, ~secondAxis.indexOf(item) ? '1' : '0');

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item];

    if (label) seriesItem.label = label;
    if (itemStyle) seriesItem.itemStyle = itemStyle;

    var itemOpacity = opacity || utilsLite.get(seriesItem, 'itemStyle.normal.opacity');
    if (dimAxisType === 'value') {
      seriesItem.barGap = barGap;
      seriesItem.barCategoryGap = '1%';
      if (itemOpacity == null) itemOpacity = VALUE_AXIS_OPACITY;
    }

    if (itemOpacity != null) {
      utilsLite.set(seriesItem, 'itemStyle.normal.opacity', itemOpacity);
    }

    return seriesItem;
  });

  return series.length ? series : false;
}

function getLegend(args) {
  var metrics = args.metrics,
      labelMap = args.labelMap,
      legendName = args.legendName;

  if (!legendName && !labelMap) return { data: metrics };
  var data = labelMap ? metrics.map(function (item) {
    return labelMap[item] == null ? item : labelMap[item];
  }) : metrics;
  return {
    data: data,
    formatter: function formatter(name) {
      return legendName[name] != null ? legendName[name] : name;
    }
  };
}

function getDims(rows, dimension) {
  return rows.map(function (row) {
    return row[dimension[0]];
  });
}

var bar$1 = function bar$$1(columns, rows, settings, extra) {
  var innerRows = utilsLite.cloneDeep(rows);
  var _settings$axisSite = settings.axisSite,
      axisSite = _settings$axisSite === undefined ? {} : _settings$axisSite,
      _settings$dimension = settings.dimension,
      dimension = _settings$dimension === undefined ? [columns[0]] : _settings$dimension,
      _settings$stack = settings.stack,
      stack = _settings$stack === undefined ? {} : _settings$stack,
      _settings$axisVisible = settings.axisVisible,
      axisVisible = _settings$axisVisible === undefined ? true : _settings$axisVisible,
      _settings$digit = settings.digit,
      digit = _settings$digit === undefined ? 2 : _settings$digit,
      _settings$dataOrder = settings.dataOrder,
      dataOrder = _settings$dataOrder === undefined ? false : _settings$dataOrder,
      _settings$scale = settings.scale,
      scale = _settings$scale === undefined ? [false, false] : _settings$scale,
      _settings$min = settings.min,
      min = _settings$min === undefined ? [null, null] : _settings$min,
      _settings$max = settings.max,
      max = _settings$max === undefined ? [null, null] : _settings$max,
      _settings$legendName = settings.legendName,
      legendName = _settings$legendName === undefined ? {} : _settings$legendName,
      _settings$labelMap = settings.labelMap,
      labelMap = _settings$labelMap === undefined ? {} : _settings$labelMap,
      label = settings.label,
      itemStyle = settings.itemStyle,
      showLine = settings.showLine,
      _settings$barGap = settings.barGap,
      barGap = _settings$barGap === undefined ? '-100%' : _settings$barGap,
      opacity = settings.opacity;
  var tooltipVisible = extra.tooltipVisible,
      legendVisible = extra.legendVisible;

  var metrics = columns.slice();
  if (axisSite.top && axisSite.bottom) {
    metrics = axisSite.top.concat(axisSite.bottom);
  } else if (axisSite.bottom && !axisSite.right) {
    metrics = axisSite.bottom;
  } else if (settings.metrics) {
    metrics = settings.metrics;
  } else {
    metrics.splice(columns.indexOf(dimension[0]), 1);
  }
  var meaAxisType = settings.xAxisType || ['normal', 'normal'];
  var dimAxisType = settings.yAxisType || 'category';
  var meaAxisName = settings.xAxisName || [];
  var dimAxisName = settings.yAxisName || '';
  var isHistogram = false;

  if (dataOrder) {
    var _label = dataOrder.label,
        order = dataOrder.order;

    if (!_label || !order) {
      console.warn('Need to provide name and order parameters');
    } else {
      innerRows.sort(function (a, b) {
        if (order === 'desc') {
          return a[_label] - b[_label];
        } else {
          return b[_label] - a[_label];
        }
      });
    }
  }
  var dims = getDims(innerRows, dimension);

  var legend = legendVisible && getLegend({ metrics: metrics, labelMap: labelMap, legendName: legendName });
  var yAxis = getBarDimAxis({
    innerRows: innerRows,
    dimAxisName: dimAxisName,
    dimension: dimension,
    axisVisible: axisVisible,
    dimAxisType: dimAxisType,
    dims: dims
  });
  var xAxis = getBarMeaAxis({
    meaAxisName: meaAxisName,
    meaAxisType: meaAxisType,
    axisVisible: axisVisible,
    digit: digit,
    scale: scale,
    min: min,
    max: max
  });
  var series = getBarSeries({
    innerRows: innerRows,
    metrics: metrics,
    stack: stack,
    axisSite: axisSite,
    isHistogram: isHistogram,
    labelMap: labelMap,
    itemStyle: itemStyle,
    label: label,
    showLine: showLine,
    dimAxisType: dimAxisType,
    dimension: dimension,
    barGap: barGap,
    opacity: opacity,
    dims: dims
  });
  var tooltipParams = { axisSite: axisSite, isHistogram: isHistogram, meaAxisType: meaAxisType, digit: digit, labelMap: labelMap };
  var tooltip = tooltipVisible && getBarTooltip(tooltipParams);
  var options = { legend: legend, yAxis: yAxis, series: series, xAxis: xAxis, tooltip: tooltip };
  return options;
};

var index = _extends({}, Core, {
  name: 'VeBar',
  data: function data() {
    this.chartHandler = bar$1;
    return {};
  }
});

module.exports = index;


/***/ })

}]);