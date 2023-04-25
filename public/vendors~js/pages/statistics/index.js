(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~js/pages/statistics/index"],{

/***/ "./node_modules/echarts/lib/action/createDataSelectAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/echarts/lib/action/createDataSelectAction.js ***!
  \*******************************************************************/
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
function _default(seriesType, actionInfos) {
  zrUtil.each(actionInfos, function (actionInfo) {
    actionInfo.update = 'updateView';
    /**
     * @payload
     * @property {string} seriesName
     * @property {string} name
     */

    echarts.registerAction(actionInfo, function (payload, ecModel) {
      var selected = {};
      ecModel.eachComponent({
        mainType: 'series',
        subType: seriesType,
        query: payload
      }, function (seriesModel) {
        if (seriesModel[actionInfo.method]) {
          seriesModel[actionInfo.method](payload.name, payload.dataIndex);
        }

        var data = seriesModel.getData(); // Create selected map

        data.each(function (idx) {
          var name = data.getName(idx);
          selected[name] = seriesModel.isSelected(name) || false;
        });
      });
      return {
        name: payload.name,
        selected: selected,
        seriesId: payload.seriesId
      };
    });
  });
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/helper/createListSimply.js":
/*!*******************************************************************!*\
  !*** ./node_modules/echarts/lib/chart/helper/createListSimply.js ***!
  \*******************************************************************/
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

var createDimensions = __webpack_require__(/*! ../../data/helper/createDimensions */ "./node_modules/echarts/lib/data/helper/createDimensions.js");

var List = __webpack_require__(/*! ../../data/List */ "./node_modules/echarts/lib/data/List.js");

var _util = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var extend = _util.extend;
var isArray = _util.isArray;

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
 * [Usage]:
 * (1)
 * createListSimply(seriesModel, ['value']);
 * (2)
 * createListSimply(seriesModel, {
 *     coordDimensions: ['value'],
 *     dimensionsCount: 5
 * });
 *
 * @param {module:echarts/model/Series} seriesModel
 * @param {Object|Array.<string|Object>} opt opt or coordDimensions
 *        The options in opt, see `echarts/data/helper/createDimensions`
 * @param {Array.<string>} [nameList]
 * @return {module:echarts/data/List}
 */
function _default(seriesModel, opt, nameList) {
  opt = isArray(opt) && {
    coordDimensions: opt
  } || extend({}, opt);
  var source = seriesModel.getSource();
  var dimensionsInfo = createDimensions(source, opt);
  var list = new List(dimensionsInfo, seriesModel);
  list.initData(source, nameList);
  return list;
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/pie.js":
/*!***********************************************!*\
  !*** ./node_modules/echarts/lib/chart/pie.js ***!
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

__webpack_require__(/*! ./pie/PieSeries */ "./node_modules/echarts/lib/chart/pie/PieSeries.js");

__webpack_require__(/*! ./pie/PieView */ "./node_modules/echarts/lib/chart/pie/PieView.js");

var createDataSelectAction = __webpack_require__(/*! ../action/createDataSelectAction */ "./node_modules/echarts/lib/action/createDataSelectAction.js");

var dataColor = __webpack_require__(/*! ../visual/dataColor */ "./node_modules/echarts/lib/visual/dataColor.js");

var pieLayout = __webpack_require__(/*! ./pie/pieLayout */ "./node_modules/echarts/lib/chart/pie/pieLayout.js");

var dataFilter = __webpack_require__(/*! ../processor/dataFilter */ "./node_modules/echarts/lib/processor/dataFilter.js");

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
createDataSelectAction('pie', [{
  type: 'pieToggleSelect',
  event: 'pieselectchanged',
  method: 'toggleSelected'
}, {
  type: 'pieSelect',
  event: 'pieselected',
  method: 'select'
}, {
  type: 'pieUnSelect',
  event: 'pieunselected',
  method: 'unSelect'
}]);
echarts.registerVisual(dataColor('pie'));
echarts.registerLayout(zrUtil.curry(pieLayout, 'pie'));
echarts.registerProcessor(dataFilter('pie'));

/***/ }),

/***/ "./node_modules/echarts/lib/chart/pie/PieSeries.js":
/*!*********************************************************!*\
  !*** ./node_modules/echarts/lib/chart/pie/PieSeries.js ***!
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

var echarts = __webpack_require__(/*! ../../echarts */ "./node_modules/echarts/lib/echarts.js");

var createListSimply = __webpack_require__(/*! ../helper/createListSimply */ "./node_modules/echarts/lib/chart/helper/createListSimply.js");

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var modelUtil = __webpack_require__(/*! ../../util/model */ "./node_modules/echarts/lib/util/model.js");

var _number = __webpack_require__(/*! ../../util/number */ "./node_modules/echarts/lib/util/number.js");

var getPercentWithPrecision = _number.getPercentWithPrecision;

var dataSelectableMixin = __webpack_require__(/*! ../../component/helper/selectableMixin */ "./node_modules/echarts/lib/component/helper/selectableMixin.js");

var _dataProvider = __webpack_require__(/*! ../../data/helper/dataProvider */ "./node_modules/echarts/lib/data/helper/dataProvider.js");

var retrieveRawAttr = _dataProvider.retrieveRawAttr;

var _sourceHelper = __webpack_require__(/*! ../../data/helper/sourceHelper */ "./node_modules/echarts/lib/data/helper/sourceHelper.js");

var makeSeriesEncodeForNameBased = _sourceHelper.makeSeriesEncodeForNameBased;

var LegendVisualProvider = __webpack_require__(/*! ../../visual/LegendVisualProvider */ "./node_modules/echarts/lib/visual/LegendVisualProvider.js");

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
var PieSeries = echarts.extendSeriesModel({
  type: 'series.pie',
  // Overwrite
  init: function (option) {
    PieSeries.superApply(this, 'init', arguments); // Enable legend selection for each data item
    // Use a function instead of direct access because data reference may changed

    this.legendVisualProvider = new LegendVisualProvider(zrUtil.bind(this.getData, this), zrUtil.bind(this.getRawData, this));
    this.updateSelectedMap(this._createSelectableList());

    this._defaultLabelLine(option);
  },
  // Overwrite
  mergeOption: function (newOption) {
    PieSeries.superCall(this, 'mergeOption', newOption);
    this.updateSelectedMap(this._createSelectableList());
  },
  getInitialData: function (option, ecModel) {
    return createListSimply(this, {
      coordDimensions: ['value'],
      encodeDefaulter: zrUtil.curry(makeSeriesEncodeForNameBased, this)
    });
  },
  _createSelectableList: function () {
    var data = this.getRawData();
    var valueDim = data.mapDimension('value');
    var targetList = [];

    for (var i = 0, len = data.count(); i < len; i++) {
      targetList.push({
        name: data.getName(i),
        value: data.get(valueDim, i),
        selected: retrieveRawAttr(data, i, 'selected')
      });
    }

    return targetList;
  },
  // Overwrite
  getDataParams: function (dataIndex) {
    var data = this.getData();
    var params = PieSeries.superCall(this, 'getDataParams', dataIndex); // FIXME toFixed?

    var valueList = [];
    data.each(data.mapDimension('value'), function (value) {
      valueList.push(value);
    });
    params.percent = getPercentWithPrecision(valueList, dataIndex, data.hostModel.get('percentPrecision'));
    params.$vars.push('percent');
    return params;
  },
  _defaultLabelLine: function (option) {
    // Extend labelLine emphasis
    modelUtil.defaultEmphasis(option, 'labelLine', ['show']);
    var labelLineNormalOpt = option.labelLine;
    var labelLineEmphasisOpt = option.emphasis.labelLine; // Not show label line if `label.normal.show = false`

    labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
    labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
  },
  defaultOption: {
    zlevel: 0,
    z: 2,
    legendHoverLink: true,
    hoverAnimation: true,
    // 默认全局居中
    center: ['50%', '50%'],
    radius: [0, '75%'],
    // 默认顺时针
    clockwise: true,
    startAngle: 90,
    // 最小角度改为0
    minAngle: 0,
    // If the angle of a sector less than `minShowLabelAngle`,
    // the label will not be displayed.
    minShowLabelAngle: 0,
    // 选中时扇区偏移量
    selectedOffset: 10,
    // 高亮扇区偏移量
    hoverOffset: 10,
    // If use strategy to avoid label overlapping
    avoidLabelOverlap: true,
    // 选择模式，默认关闭，可选single，multiple
    // selectedMode: false,
    // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
    // roseType: null,
    percentPrecision: 2,
    // If still show when all data zero.
    stillShowZeroSum: true,
    // cursor: null,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: null,
    height: null,
    label: {
      // If rotate around circle
      rotate: false,
      show: true,
      // 'outer', 'inside', 'center'
      position: 'outer',
      // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
      alignTo: 'none',
      // Closest distance between label and chart edge.
      // Works only position is 'outer' and alignTo is 'edge'.
      margin: '25%',
      // Works only position is 'outer' and alignTo is not 'edge'.
      bleedMargin: 10,
      // Distance between text and label line.
      distanceToLabelLine: 5 // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
      // 默认使用全局文本样式，详见TEXTSTYLE
      // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数

    },
    // Enabled when label.normal.position is 'outer'
    labelLine: {
      show: true,
      // 引导线两段中的第一段长度
      length: 15,
      // 引导线两段中的第二段长度
      length2: 15,
      smooth: false,
      lineStyle: {
        // color: 各异,
        width: 1,
        type: 'solid'
      }
    },
    itemStyle: {
      borderWidth: 1
    },
    // Animation type. Valid values: expansion, scale
    animationType: 'expansion',
    // Animation type when update. Valid values: transition, expansion
    animationTypeUpdate: 'transition',
    animationEasing: 'cubicOut'
  }
});
zrUtil.mixin(PieSeries, dataSelectableMixin);
var _default = PieSeries;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/pie/PieView.js":
/*!*******************************************************!*\
  !*** ./node_modules/echarts/lib/chart/pie/PieView.js ***!
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var graphic = __webpack_require__(/*! ../../util/graphic */ "./node_modules/echarts/lib/util/graphic.js");

var ChartView = __webpack_require__(/*! ../../view/Chart */ "./node_modules/echarts/lib/view/Chart.js");

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
 * @param {module:echarts/model/Series} seriesModel
 * @param {boolean} hasAnimation
 * @inner
 */
function updateDataSelected(uid, seriesModel, hasAnimation, api) {
  var data = seriesModel.getData();
  var dataIndex = this.dataIndex;
  var name = data.getName(dataIndex);
  var selectedOffset = seriesModel.get('selectedOffset');
  api.dispatchAction({
    type: 'pieToggleSelect',
    from: uid,
    name: name,
    seriesId: seriesModel.id
  });
  data.each(function (idx) {
    toggleItemSelected(data.getItemGraphicEl(idx), data.getItemLayout(idx), seriesModel.isSelected(data.getName(idx)), selectedOffset, hasAnimation);
  });
}
/**
 * @param {module:zrender/graphic/Sector} el
 * @param {Object} layout
 * @param {boolean} isSelected
 * @param {number} selectedOffset
 * @param {boolean} hasAnimation
 * @inner
 */


function toggleItemSelected(el, layout, isSelected, selectedOffset, hasAnimation) {
  var midAngle = (layout.startAngle + layout.endAngle) / 2;
  var dx = Math.cos(midAngle);
  var dy = Math.sin(midAngle);
  var offset = isSelected ? selectedOffset : 0;
  var position = [dx * offset, dy * offset];
  hasAnimation // animateTo will stop revious animation like update transition
  ? el.animate().when(200, {
    position: position
  }).start('bounceOut') : el.attr('position', position);
}
/**
 * Piece of pie including Sector, Label, LabelLine
 * @constructor
 * @extends {module:zrender/graphic/Group}
 */


function PiePiece(data, idx) {
  graphic.Group.call(this);
  var sector = new graphic.Sector({
    z2: 2
  });
  var polyline = new graphic.Polyline();
  var text = new graphic.Text();
  this.add(sector);
  this.add(polyline);
  this.add(text);
  this.updateData(data, idx, true);
}

var piePieceProto = PiePiece.prototype;

piePieceProto.updateData = function (data, idx, firstCreate) {
  var sector = this.childAt(0);
  var labelLine = this.childAt(1);
  var labelText = this.childAt(2);
  var seriesModel = data.hostModel;
  var itemModel = data.getItemModel(idx);
  var layout = data.getItemLayout(idx);
  var sectorShape = zrUtil.extend({}, layout);
  sectorShape.label = null;
  var animationTypeUpdate = seriesModel.getShallow('animationTypeUpdate');

  if (firstCreate) {
    sector.setShape(sectorShape);
    var animationType = seriesModel.getShallow('animationType');

    if (animationType === 'scale') {
      sector.shape.r = layout.r0;
      graphic.initProps(sector, {
        shape: {
          r: layout.r
        }
      }, seriesModel, idx);
    } // Expansion
    else {
        sector.shape.endAngle = layout.startAngle;
        graphic.updateProps(sector, {
          shape: {
            endAngle: layout.endAngle
          }
        }, seriesModel, idx);
      }
  } else {
    if (animationTypeUpdate === 'expansion') {
      // Sectors are set to be target shape and an overlaying clipPath is used for animation
      sector.setShape(sectorShape);
    } else {
      // Transition animation from the old shape
      graphic.updateProps(sector, {
        shape: sectorShape
      }, seriesModel, idx);
    }
  } // Update common style


  var visualColor = data.getItemVisual(idx, 'color');
  sector.useStyle(zrUtil.defaults({
    lineJoin: 'bevel',
    fill: visualColor
  }, itemModel.getModel('itemStyle').getItemStyle()));
  sector.hoverStyle = itemModel.getModel('emphasis.itemStyle').getItemStyle();
  var cursorStyle = itemModel.getShallow('cursor');
  cursorStyle && sector.attr('cursor', cursorStyle); // Toggle selected

  toggleItemSelected(this, data.getItemLayout(idx), seriesModel.isSelected(data.getName(idx)), seriesModel.get('selectedOffset'), seriesModel.get('animation')); // Label and text animation should be applied only for transition type animation when update

  var withAnimation = !firstCreate && animationTypeUpdate === 'transition';

  this._updateLabel(data, idx, withAnimation);

  this.highDownOnUpdate = !seriesModel.get('silent') ? function (fromState, toState) {
    var hasAnimation = seriesModel.isAnimationEnabled() && itemModel.get('hoverAnimation');

    if (toState === 'emphasis') {
      labelLine.ignore = labelLine.hoverIgnore;
      labelText.ignore = labelText.hoverIgnore; // Sector may has animation of updating data. Force to move to the last frame
      // Or it may stopped on the wrong shape

      if (hasAnimation) {
        sector.stopAnimation(true);
        sector.animateTo({
          shape: {
            r: layout.r + seriesModel.get('hoverOffset')
          }
        }, 300, 'elasticOut');
      }
    } else {
      labelLine.ignore = labelLine.normalIgnore;
      labelText.ignore = labelText.normalIgnore;

      if (hasAnimation) {
        sector.stopAnimation(true);
        sector.animateTo({
          shape: {
            r: layout.r
          }
        }, 300, 'elasticOut');
      }
    }
  } : null;
  graphic.setHoverStyle(this);
};

piePieceProto._updateLabel = function (data, idx, withAnimation) {
  var labelLine = this.childAt(1);
  var labelText = this.childAt(2);
  var seriesModel = data.hostModel;
  var itemModel = data.getItemModel(idx);
  var layout = data.getItemLayout(idx);
  var labelLayout = layout.label;
  var visualColor = data.getItemVisual(idx, 'color');

  if (!labelLayout || isNaN(labelLayout.x) || isNaN(labelLayout.y)) {
    labelText.ignore = labelText.normalIgnore = labelText.hoverIgnore = labelLine.ignore = labelLine.normalIgnore = labelLine.hoverIgnore = true;
    return;
  }

  var targetLineShape = {
    points: labelLayout.linePoints || [[labelLayout.x, labelLayout.y], [labelLayout.x, labelLayout.y], [labelLayout.x, labelLayout.y]]
  };
  var targetTextStyle = {
    x: labelLayout.x,
    y: labelLayout.y
  };

  if (withAnimation) {
    graphic.updateProps(labelLine, {
      shape: targetLineShape
    }, seriesModel, idx);
    graphic.updateProps(labelText, {
      style: targetTextStyle
    }, seriesModel, idx);
  } else {
    labelLine.attr({
      shape: targetLineShape
    });
    labelText.attr({
      style: targetTextStyle
    });
  }

  labelText.attr({
    rotation: labelLayout.rotation,
    origin: [labelLayout.x, labelLayout.y],
    z2: 10
  });
  var labelModel = itemModel.getModel('label');
  var labelHoverModel = itemModel.getModel('emphasis.label');
  var labelLineModel = itemModel.getModel('labelLine');
  var labelLineHoverModel = itemModel.getModel('emphasis.labelLine');
  var visualColor = data.getItemVisual(idx, 'color');
  graphic.setLabelStyle(labelText.style, labelText.hoverStyle = {}, labelModel, labelHoverModel, {
    labelFetcher: data.hostModel,
    labelDataIndex: idx,
    defaultText: labelLayout.text,
    autoColor: visualColor,
    useInsideStyle: !!labelLayout.inside
  }, {
    textAlign: labelLayout.textAlign,
    textVerticalAlign: labelLayout.verticalAlign,
    opacity: data.getItemVisual(idx, 'opacity')
  });
  labelText.ignore = labelText.normalIgnore = !labelModel.get('show');
  labelText.hoverIgnore = !labelHoverModel.get('show');
  labelLine.ignore = labelLine.normalIgnore = !labelLineModel.get('show');
  labelLine.hoverIgnore = !labelLineHoverModel.get('show'); // Default use item visual color

  labelLine.setStyle({
    stroke: visualColor,
    opacity: data.getItemVisual(idx, 'opacity')
  });
  labelLine.setStyle(labelLineModel.getModel('lineStyle').getLineStyle());
  labelLine.hoverStyle = labelLineHoverModel.getModel('lineStyle').getLineStyle();
  var smooth = labelLineModel.get('smooth');

  if (smooth && smooth === true) {
    smooth = 0.4;
  }

  labelLine.setShape({
    smooth: smooth
  });
};

zrUtil.inherits(PiePiece, graphic.Group); // Pie view

var PieView = ChartView.extend({
  type: 'pie',
  init: function () {
    var sectorGroup = new graphic.Group();
    this._sectorGroup = sectorGroup;
  },
  render: function (seriesModel, ecModel, api, payload) {
    if (payload && payload.from === this.uid) {
      return;
    }

    var data = seriesModel.getData();
    var oldData = this._data;
    var group = this.group;
    var hasAnimation = ecModel.get('animation');
    var isFirstRender = !oldData;
    var animationType = seriesModel.get('animationType');
    var animationTypeUpdate = seriesModel.get('animationTypeUpdate');
    var onSectorClick = zrUtil.curry(updateDataSelected, this.uid, seriesModel, hasAnimation, api);
    var selectedMode = seriesModel.get('selectedMode');
    data.diff(oldData).add(function (idx) {
      var piePiece = new PiePiece(data, idx); // Default expansion animation

      if (isFirstRender && animationType !== 'scale') {
        piePiece.eachChild(function (child) {
          child.stopAnimation(true);
        });
      }

      selectedMode && piePiece.on('click', onSectorClick);
      data.setItemGraphicEl(idx, piePiece);
      group.add(piePiece);
    }).update(function (newIdx, oldIdx) {
      var piePiece = oldData.getItemGraphicEl(oldIdx);

      if (!isFirstRender && animationTypeUpdate !== 'transition') {
        piePiece.eachChild(function (child) {
          child.stopAnimation(true);
        });
      }

      piePiece.updateData(data, newIdx);
      piePiece.off('click');
      selectedMode && piePiece.on('click', onSectorClick);
      group.add(piePiece);
      data.setItemGraphicEl(newIdx, piePiece);
    }).remove(function (idx) {
      var piePiece = oldData.getItemGraphicEl(idx);
      group.remove(piePiece);
    }).execute();

    if (hasAnimation && data.count() > 0 && (isFirstRender ? animationType !== 'scale' : animationTypeUpdate !== 'transition')) {
      var shape = data.getItemLayout(0);

      for (var s = 1; isNaN(shape.startAngle) && s < data.count(); ++s) {
        shape = data.getItemLayout(s);
      }

      var r = Math.max(api.getWidth(), api.getHeight()) / 2;
      var removeClipPath = zrUtil.bind(group.removeClipPath, group);
      group.setClipPath(this._createClipPath(shape.cx, shape.cy, r, shape.startAngle, shape.clockwise, removeClipPath, seriesModel, isFirstRender));
    } else {
      // clipPath is used in first-time animation, so remove it when otherwise. See: #8994
      group.removeClipPath();
    }

    this._data = data;
  },
  dispose: function () {},
  _createClipPath: function (cx, cy, r, startAngle, clockwise, cb, seriesModel, isFirstRender) {
    var clipPath = new graphic.Sector({
      shape: {
        cx: cx,
        cy: cy,
        r0: 0,
        r: r,
        startAngle: startAngle,
        endAngle: startAngle,
        clockwise: clockwise
      }
    });
    var initOrUpdate = isFirstRender ? graphic.initProps : graphic.updateProps;
    initOrUpdate(clipPath, {
      shape: {
        endAngle: startAngle + (clockwise ? 1 : -1) * Math.PI * 2
      }
    }, seriesModel, cb);
    return clipPath;
  },

  /**
   * @implement
   */
  containPoint: function (point, seriesModel) {
    var data = seriesModel.getData();
    var itemLayout = data.getItemLayout(0);

    if (itemLayout) {
      var dx = point[0] - itemLayout.cx;
      var dy = point[1] - itemLayout.cy;
      var radius = Math.sqrt(dx * dx + dy * dy);
      return radius <= itemLayout.r && radius >= itemLayout.r0;
    }
  }
});
var _default = PieView;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/pie/labelLayout.js":
/*!***********************************************************!*\
  !*** ./node_modules/echarts/lib/chart/pie/labelLayout.js ***!
  \***********************************************************/
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

var textContain = __webpack_require__(/*! zrender/lib/contain/text */ "./node_modules/zrender/lib/contain/text.js");

var _number = __webpack_require__(/*! ../../util/number */ "./node_modules/echarts/lib/util/number.js");

var parsePercent = _number.parsePercent;

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
// FIXME emphasis label position is not same with normal label position
var RADIAN = Math.PI / 180;

function adjustSingleSide(list, cx, cy, r, dir, viewWidth, viewHeight, viewLeft, viewTop, farthestX) {
  list.sort(function (a, b) {
    return a.y - b.y;
  });

  function shiftDown(start, end, delta, dir) {
    for (var j = start; j < end; j++) {
      if (list[j].y + delta > viewTop + viewHeight) {
        break;
      }

      list[j].y += delta;

      if (j > start && j + 1 < end && list[j + 1].y > list[j].y + list[j].height) {
        shiftUp(j, delta / 2);
        return;
      }
    }

    shiftUp(end - 1, delta / 2);
  }

  function shiftUp(end, delta) {
    for (var j = end; j >= 0; j--) {
      if (list[j].y - delta < viewTop) {
        break;
      }

      list[j].y -= delta;

      if (j > 0 && list[j].y > list[j - 1].y + list[j - 1].height) {
        break;
      }
    }
  }

  function changeX(list, isDownList, cx, cy, r, dir) {
    var lastDeltaX = dir > 0 ? isDownList // right-side
    ? Number.MAX_VALUE // down
    : 0 // up
    : isDownList // left-side
    ? Number.MAX_VALUE // down
    : 0; // up

    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].labelAlignTo !== 'none') {
        continue;
      }

      var deltaY = Math.abs(list[i].y - cy);
      var length = list[i].len;
      var length2 = list[i].len2;
      var deltaX = deltaY < r + length ? Math.sqrt((r + length + length2) * (r + length + length2) - deltaY * deltaY) : Math.abs(list[i].x - cx);

      if (isDownList && deltaX >= lastDeltaX) {
        // right-down, left-down
        deltaX = lastDeltaX - 10;
      }

      if (!isDownList && deltaX <= lastDeltaX) {
        // right-up, left-up
        deltaX = lastDeltaX + 10;
      }

      list[i].x = cx + deltaX * dir;
      lastDeltaX = deltaX;
    }
  }

  var lastY = 0;
  var delta;
  var len = list.length;
  var upList = [];
  var downList = [];

  for (var i = 0; i < len; i++) {
    if (list[i].position === 'outer' && list[i].labelAlignTo === 'labelLine') {
      var dx = list[i].x - farthestX;
      list[i].linePoints[1][0] += dx;
      list[i].x = farthestX;
    }

    delta = list[i].y - lastY;

    if (delta < 0) {
      shiftDown(i, len, -delta, dir);
    }

    lastY = list[i].y + list[i].height;
  }

  if (viewHeight - lastY < 0) {
    shiftUp(len - 1, lastY - viewHeight);
  }

  for (var i = 0; i < len; i++) {
    if (list[i].y >= cy) {
      downList.push(list[i]);
    } else {
      upList.push(list[i]);
    }
  }

  changeX(upList, false, cx, cy, r, dir);
  changeX(downList, true, cx, cy, r, dir);
}

function avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop) {
  var leftList = [];
  var rightList = [];
  var leftmostX = Number.MAX_VALUE;
  var rightmostX = -Number.MAX_VALUE;

  for (var i = 0; i < labelLayoutList.length; i++) {
    if (isPositionCenter(labelLayoutList[i])) {
      continue;
    }

    if (labelLayoutList[i].x < cx) {
      leftmostX = Math.min(leftmostX, labelLayoutList[i].x);
      leftList.push(labelLayoutList[i]);
    } else {
      rightmostX = Math.max(rightmostX, labelLayoutList[i].x);
      rightList.push(labelLayoutList[i]);
    }
  }

  adjustSingleSide(rightList, cx, cy, r, 1, viewWidth, viewHeight, viewLeft, viewTop, rightmostX);
  adjustSingleSide(leftList, cx, cy, r, -1, viewWidth, viewHeight, viewLeft, viewTop, leftmostX);

  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];

    if (isPositionCenter(layout)) {
      continue;
    }

    var linePoints = layout.linePoints;

    if (linePoints) {
      var isAlignToEdge = layout.labelAlignTo === 'edge';
      var realTextWidth = layout.textRect.width;
      var targetTextWidth;

      if (isAlignToEdge) {
        if (layout.x < cx) {
          targetTextWidth = linePoints[2][0] - layout.labelDistance - viewLeft - layout.labelMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - layout.labelMargin - linePoints[2][0] - layout.labelDistance;
        }
      } else {
        if (layout.x < cx) {
          targetTextWidth = layout.x - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - layout.x - layout.bleedMargin;
        }
      }

      if (targetTextWidth < layout.textRect.width) {
        layout.text = textContain.truncateText(layout.text, targetTextWidth, layout.font);

        if (layout.labelAlignTo === 'edge') {
          realTextWidth = textContain.getWidth(layout.text, layout.font);
        }
      }

      var dist = linePoints[1][0] - linePoints[2][0];

      if (isAlignToEdge) {
        if (layout.x < cx) {
          linePoints[2][0] = viewLeft + layout.labelMargin + realTextWidth + layout.labelDistance;
        } else {
          linePoints[2][0] = viewLeft + viewWidth - layout.labelMargin - realTextWidth - layout.labelDistance;
        }
      } else {
        if (layout.x < cx) {
          linePoints[2][0] = layout.x + layout.labelDistance;
        } else {
          linePoints[2][0] = layout.x - layout.labelDistance;
        }

        linePoints[1][0] = linePoints[2][0] + dist;
      }

      linePoints[1][1] = linePoints[2][1] = layout.y;
    }
  }
}

function isPositionCenter(layout) {
  // Not change x for center label
  return layout.position === 'center';
}

function _default(seriesModel, r, viewWidth, viewHeight, viewLeft, viewTop) {
  var data = seriesModel.getData();
  var labelLayoutList = [];
  var cx;
  var cy;
  var hasLabelRotate = false;
  var minShowLabelRadian = (seriesModel.get('minShowLabelAngle') || 0) * RADIAN;
  data.each(function (idx) {
    var layout = data.getItemLayout(idx);
    var itemModel = data.getItemModel(idx);
    var labelModel = itemModel.getModel('label'); // Use position in normal or emphasis

    var labelPosition = labelModel.get('position') || itemModel.get('emphasis.label.position');
    var labelDistance = labelModel.get('distanceToLabelLine');
    var labelAlignTo = labelModel.get('alignTo');
    var labelMargin = parsePercent(labelModel.get('margin'), viewWidth);
    var bleedMargin = labelModel.get('bleedMargin');
    var font = labelModel.getFont();
    var labelLineModel = itemModel.getModel('labelLine');
    var labelLineLen = labelLineModel.get('length');
    labelLineLen = parsePercent(labelLineLen, viewWidth);
    var labelLineLen2 = labelLineModel.get('length2');
    labelLineLen2 = parsePercent(labelLineLen2, viewWidth);

    if (layout.angle < minShowLabelRadian) {
      return;
    }

    var midAngle = (layout.startAngle + layout.endAngle) / 2;
    var dx = Math.cos(midAngle);
    var dy = Math.sin(midAngle);
    var textX;
    var textY;
    var linePoints;
    var textAlign;
    cx = layout.cx;
    cy = layout.cy;
    var text = seriesModel.getFormattedLabel(idx, 'normal') || data.getName(idx);
    var textRect = textContain.getBoundingRect(text, font, textAlign, 'top');
    var isLabelInside = labelPosition === 'inside' || labelPosition === 'inner';

    if (labelPosition === 'center') {
      textX = layout.cx;
      textY = layout.cy;
      textAlign = 'center';
    } else {
      var x1 = (isLabelInside ? (layout.r + layout.r0) / 2 * dx : layout.r * dx) + cx;
      var y1 = (isLabelInside ? (layout.r + layout.r0) / 2 * dy : layout.r * dy) + cy;
      textX = x1 + dx * 3;
      textY = y1 + dy * 3;

      if (!isLabelInside) {
        // For roseType
        var x2 = x1 + dx * (labelLineLen + r - layout.r);
        var y2 = y1 + dy * (labelLineLen + r - layout.r);
        var x3 = x2 + (dx < 0 ? -1 : 1) * labelLineLen2;
        var y3 = y2;

        if (labelAlignTo === 'edge') {
          // Adjust textX because text align of edge is opposite
          textX = dx < 0 ? viewLeft + labelMargin : viewLeft + viewWidth - labelMargin;
        } else {
          textX = x3 + (dx < 0 ? -labelDistance : labelDistance);
        }

        textY = y3;
        linePoints = [[x1, y1], [x2, y2], [x3, y3]];
      }

      textAlign = isLabelInside ? 'center' : labelAlignTo === 'edge' ? dx > 0 ? 'right' : 'left' : dx > 0 ? 'left' : 'right';
    }

    var labelRotate;
    var rotate = labelModel.get('rotate');

    if (typeof rotate === 'number') {
      labelRotate = rotate * (Math.PI / 180);
    } else {
      labelRotate = rotate ? dx < 0 ? -midAngle + Math.PI : -midAngle : 0;
    }

    hasLabelRotate = !!labelRotate;
    layout.label = {
      x: textX,
      y: textY,
      position: labelPosition,
      height: textRect.height,
      len: labelLineLen,
      len2: labelLineLen2,
      linePoints: linePoints,
      textAlign: textAlign,
      verticalAlign: 'middle',
      rotation: labelRotate,
      inside: isLabelInside,
      labelDistance: labelDistance,
      labelAlignTo: labelAlignTo,
      labelMargin: labelMargin,
      bleedMargin: bleedMargin,
      textRect: textRect,
      text: text,
      font: font
    }; // Not layout the inside label

    if (!isLabelInside) {
      labelLayoutList.push(layout.label);
    }
  });

  if (!hasLabelRotate && seriesModel.get('avoidLabelOverlap')) {
    avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop);
  }
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/chart/pie/pieLayout.js":
/*!*********************************************************!*\
  !*** ./node_modules/echarts/lib/chart/pie/pieLayout.js ***!
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

var _number = __webpack_require__(/*! ../../util/number */ "./node_modules/echarts/lib/util/number.js");

var parsePercent = _number.parsePercent;
var linearMap = _number.linearMap;

var layout = __webpack_require__(/*! ../../util/layout */ "./node_modules/echarts/lib/util/layout.js");

var labelLayout = __webpack_require__(/*! ./labelLayout */ "./node_modules/echarts/lib/chart/pie/labelLayout.js");

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

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
var PI2 = Math.PI * 2;
var RADIAN = Math.PI / 180;

function getViewRect(seriesModel, api) {
  return layout.getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}

function _default(seriesType, ecModel, api, payload) {
  ecModel.eachSeriesByType(seriesType, function (seriesModel) {
    var data = seriesModel.getData();
    var valueDim = data.mapDimension('value');
    var viewRect = getViewRect(seriesModel, api);
    var center = seriesModel.get('center');
    var radius = seriesModel.get('radius');

    if (!zrUtil.isArray(radius)) {
      radius = [0, radius];
    }

    if (!zrUtil.isArray(center)) {
      center = [center, center];
    }

    var width = parsePercent(viewRect.width, api.getWidth());
    var height = parsePercent(viewRect.height, api.getHeight());
    var size = Math.min(width, height);
    var cx = parsePercent(center[0], width) + viewRect.x;
    var cy = parsePercent(center[1], height) + viewRect.y;
    var r0 = parsePercent(radius[0], size / 2);
    var r = parsePercent(radius[1], size / 2);
    var startAngle = -seriesModel.get('startAngle') * RADIAN;
    var minAngle = seriesModel.get('minAngle') * RADIAN;
    var validDataCount = 0;
    data.each(valueDim, function (value) {
      !isNaN(value) && validDataCount++;
    });
    var sum = data.getSum(valueDim); // Sum may be 0

    var unitRadian = Math.PI / (sum || validDataCount) * 2;
    var clockwise = seriesModel.get('clockwise');
    var roseType = seriesModel.get('roseType');
    var stillShowZeroSum = seriesModel.get('stillShowZeroSum'); // [0...max]

    var extent = data.getDataExtent(valueDim);
    extent[0] = 0; // In the case some sector angle is smaller than minAngle

    var restAngle = PI2;
    var valueSumLargerThanMinAngle = 0;
    var currentAngle = startAngle;
    var dir = clockwise ? 1 : -1;
    data.each(valueDim, function (value, idx) {
      var angle;

      if (isNaN(value)) {
        data.setItemLayout(idx, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: clockwise,
          cx: cx,
          cy: cy,
          r0: r0,
          r: roseType ? NaN : r,
          viewRect: viewRect
        });
        return;
      } // FIXME 兼容 2.0 但是 roseType 是 area 的时候才是这样？


      if (roseType !== 'area') {
        angle = sum === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
      } else {
        angle = PI2 / validDataCount;
      }

      if (angle < minAngle) {
        angle = minAngle;
        restAngle -= minAngle;
      } else {
        valueSumLargerThanMinAngle += value;
      }

      var endAngle = currentAngle + dir * angle;
      data.setItemLayout(idx, {
        angle: angle,
        startAngle: currentAngle,
        endAngle: endAngle,
        clockwise: clockwise,
        cx: cx,
        cy: cy,
        r0: r0,
        r: roseType ? linearMap(value, extent, [r0, r]) : r,
        viewRect: viewRect
      });
      currentAngle = endAngle;
    }); // Some sector is constrained by minAngle
    // Rest sectors needs recalculate angle

    if (restAngle < PI2 && validDataCount) {
      // Average the angle if rest angle is not enough after all angles is
      // Constrained by minAngle
      if (restAngle <= 1e-3) {
        var angle = PI2 / validDataCount;
        data.each(valueDim, function (value, idx) {
          if (!isNaN(value)) {
            var layout = data.getItemLayout(idx);
            layout.angle = angle;
            layout.startAngle = startAngle + dir * idx * angle;
            layout.endAngle = startAngle + dir * (idx + 1) * angle;
          }
        });
      } else {
        unitRadian = restAngle / valueSumLargerThanMinAngle;
        currentAngle = startAngle;
        data.each(valueDim, function (value, idx) {
          if (!isNaN(value)) {
            var layout = data.getItemLayout(idx);
            var angle = layout.angle === minAngle ? minAngle : value * unitRadian;
            layout.startAngle = currentAngle;
            layout.endAngle = currentAngle + dir * angle;
            currentAngle += dir * angle;
          }
        });
      }
    }

    labelLayout(seriesModel, r, viewRect.width, viewRect.height, viewRect.x, viewRect.y);
  });
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/component/helper/selectableMixin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/echarts/lib/component/helper/selectableMixin.js ***!
  \**********************************************************************/
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

var zrUtil = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

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
 * Data selectable mixin for chart series.
 * To eanble data select, option of series must have `selectedMode`.
 * And each data item will use `selected` to toggle itself selected status
 */
var _default = {
  /**
   * @param {Array.<Object>} targetList [{name, value, selected}, ...]
   *        If targetList is an array, it should like [{name: ..., value: ...}, ...].
   *        If targetList is a "List", it must have coordDim: 'value' dimension and name.
   */
  updateSelectedMap: function (targetList) {
    this._targetList = zrUtil.isArray(targetList) ? targetList.slice() : [];
    this._selectTargetMap = zrUtil.reduce(targetList || [], function (targetMap, target) {
      targetMap.set(target.name, target);
      return targetMap;
    }, zrUtil.createHashMap());
  },

  /**
   * Either name or id should be passed as input here.
   * If both of them are defined, id is used.
   *
   * @param {string|undefined} name name of data
   * @param {number|undefined} id dataIndex of data
   */
  // PENGING If selectedMode is null ?
  select: function (name, id) {
    var target = id != null ? this._targetList[id] : this._selectTargetMap.get(name);
    var selectedMode = this.get('selectedMode');

    if (selectedMode === 'single') {
      this._selectTargetMap.each(function (target) {
        target.selected = false;
      });
    }

    target && (target.selected = true);
  },

  /**
   * Either name or id should be passed as input here.
   * If both of them are defined, id is used.
   *
   * @param {string|undefined} name name of data
   * @param {number|undefined} id dataIndex of data
   */
  unSelect: function (name, id) {
    var target = id != null ? this._targetList[id] : this._selectTargetMap.get(name); // var selectedMode = this.get('selectedMode');
    // selectedMode !== 'single' && target && (target.selected = false);

    target && (target.selected = false);
  },

  /**
   * Either name or id should be passed as input here.
   * If both of them are defined, id is used.
   *
   * @param {string|undefined} name name of data
   * @param {number|undefined} id dataIndex of data
   */
  toggleSelected: function (name, id) {
    var target = id != null ? this._targetList[id] : this._selectTargetMap.get(name);

    if (target != null) {
      this[target.selected ? 'unSelect' : 'select'](name, id);
      return target.selected;
    }
  },

  /**
   * Either name or id should be passed as input here.
   * If both of them are defined, id is used.
   *
   * @param {string|undefined} name name of data
   * @param {number|undefined} id dataIndex of data
   */
  isSelected: function (name, id) {
    var target = id != null ? this._targetList[id] : this._selectTargetMap.get(name);
    return target && target.selected;
  }
};
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/processor/dataFilter.js":
/*!**********************************************************!*\
  !*** ./node_modules/echarts/lib/processor/dataFilter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


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
function _default(seriesType) {
  return {
    seriesType: seriesType,
    reset: function (seriesModel, ecModel) {
      var legendModels = ecModel.findComponents({
        mainType: 'legend'
      });

      if (!legendModels || !legendModels.length) {
        return;
      }

      var data = seriesModel.getData();
      data.filterSelf(function (idx) {
        var name = data.getName(idx); // If in any legend component the status is not selected.

        for (var i = 0; i < legendModels.length; i++) {
          if (!legendModels[i].isSelected(name)) {
            return false;
          }
        }

        return true;
      });
    }
  };
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/visual/LegendVisualProvider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/echarts/lib/visual/LegendVisualProvider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


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
 * LegendVisualProvider is an bridge that pick encoded color from data and
 * provide to the legend component.
 * @param {Function} getDataWithEncodedVisual Function to get data after filtered. It stores all the encoding info
 * @param {Function} getRawData Function to get raw data before filtered.
 */
function LegendVisualProvider(getDataWithEncodedVisual, getRawData) {
  this.getAllNames = function () {
    var rawData = getRawData(); // We find the name from the raw data. In case it's filtered by the legend component.
    // Normally, the name can be found in rawData, but can't be found in filtered data will display as gray.

    return rawData.mapArray(rawData.getName);
  };

  this.containName = function (name) {
    var rawData = getRawData();
    return rawData.indexOfName(name) >= 0;
  };

  this.indexOfName = function (name) {
    // Only get data when necessary.
    // Because LegendVisualProvider constructor may be new in the stage that data is not prepared yet.
    // Invoking Series#getData immediately will throw an error.
    var dataWithEncodedVisual = getDataWithEncodedVisual();
    return dataWithEncodedVisual.indexOfName(name);
  };

  this.getItemVisual = function (dataIndex, key) {
    // Get encoded visual properties from final filtered data.
    var dataWithEncodedVisual = getDataWithEncodedVisual();
    return dataWithEncodedVisual.getItemVisual(dataIndex, key);
  };
}

var _default = LegendVisualProvider;
module.exports = _default;

/***/ }),

/***/ "./node_modules/echarts/lib/visual/dataColor.js":
/*!******************************************************!*\
  !*** ./node_modules/echarts/lib/visual/dataColor.js ***!
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

var _util = __webpack_require__(/*! zrender/lib/core/util */ "./node_modules/zrender/lib/core/util.js");

var createHashMap = _util.createHashMap;

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
// Pick color from palette for each data item.
// Applicable for charts that require applying color palette
// in data level (like pie, funnel, chord).
function _default(seriesType) {
  return {
    getTargetSeries: function (ecModel) {
      // Pie and funnel may use diferrent scope
      var paletteScope = {};
      var seiresModelMap = createHashMap();
      ecModel.eachSeriesByType(seriesType, function (seriesModel) {
        seriesModel.__paletteScope = paletteScope;
        seiresModelMap.set(seriesModel.uid, seriesModel);
      });
      return seiresModelMap;
    },
    reset: function (seriesModel, ecModel) {
      var dataAll = seriesModel.getRawData();
      var idxMap = {};
      var data = seriesModel.getData();
      data.each(function (idx) {
        var rawIdx = data.getRawIndex(idx);
        idxMap[rawIdx] = idx;
      });
      dataAll.each(function (rawIdx) {
        var filteredIdx = idxMap[rawIdx]; // If series.itemStyle.normal.color is a function. itemVisual may be encoded

        var singleDataColor = filteredIdx != null && data.getItemVisual(filteredIdx, 'color', true);
        var singleDataBorderColor = filteredIdx != null && data.getItemVisual(filteredIdx, 'borderColor', true);
        var itemModel;

        if (!singleDataColor || !singleDataBorderColor) {
          // FIXME Performance
          itemModel = dataAll.getItemModel(rawIdx);
        }

        if (!singleDataColor) {
          var color = itemModel.get('itemStyle.color') || seriesModel.getColorFromPalette(dataAll.getName(rawIdx) || rawIdx + '', seriesModel.__paletteScope, dataAll.count()); // Data is not filtered

          if (filteredIdx != null) {
            data.setItemVisual(filteredIdx, 'color', color);
          }
        }

        if (!singleDataBorderColor) {
          var borderColor = itemModel.get('itemStyle.borderColor'); // Data is not filtered

          if (filteredIdx != null) {
            data.setItemVisual(filteredIdx, 'borderColor', borderColor);
          }
        }
      });
    }
  };
}

module.exports = _default;

/***/ }),

/***/ "./node_modules/v-charts/lib/pie.common.js":
/*!*************************************************!*\
  !*** ./node_modules/v-charts/lib/pie.common.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var constants = __webpack_require__(/*! ./constants */ "./node_modules/v-charts/lib/constants.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/v-charts/lib/utils.js");
var utilsLite = __webpack_require__(/*! utils-lite */ "./node_modules/utils-lite/lib/index.es.js");
__webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/echarts/lib/chart/pie.js");
var Core = _interopDefault(__webpack_require__(/*! ./core */ "./node_modules/v-charts/lib/core.js"));

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

var pieRadius = 100;
var ringRadius = [80, 100];
var roseRingRadius = [20, 100];
var pieOffsetY = 200;

function getPieSeries(args) {
  var innerRows = args.innerRows,
      dataType = args.dataType,
      percentShow = args.percentShow,
      dimension = args.dimension,
      metrics = args.metrics,
      radius = args.radius,
      offsetY = args.offsetY,
      selectedMode = args.selectedMode,
      hoverAnimation = args.hoverAnimation,
      digit = args.digit,
      roseType = args.roseType,
      label = args.label,
      level = args.level,
      limitShowNum = args.limitShowNum,
      isRing = args.isRing,
      labelLine = args.labelLine,
      itemStyle = args.itemStyle;


  var series = [];
  var levelTemp = {};
  var rowsTemp = [];
  if (level) {
    level.forEach(function (levelItems, index) {
      levelItems.forEach(function (item) {
        utils.setArrayValue(levelTemp, item, index);
      });
    });
    innerRows.forEach(function (row) {
      var itemLevel = levelTemp[row[dimension]];
      if (itemLevel && itemLevel.length) {
        itemLevel.forEach(function (levelItem) {
          utils.setArrayValue(rowsTemp, levelItem, row);
        });
      }
    });
  } else {
    rowsTemp.push(innerRows);
  }
  var seriesBase = {
    type: 'pie',
    selectedMode: selectedMode,
    hoverAnimation: hoverAnimation,
    roseType: roseType,
    center: ['50%', offsetY]
  };
  var rowsTempLength = rowsTemp.length;
  rowsTemp.forEach(function (dataRows, index) {
    var seriesItem = _extends({ data: [] }, seriesBase);
    var centerWidth = radius / rowsTempLength;
    if (!index) {
      seriesItem.radius = isRing ? radius : centerWidth;
    } else {
      var outerWidth = centerWidth + radius / (2 * rowsTempLength) * (2 * index - 1);
      var innerWidth = outerWidth + radius / (2 * rowsTempLength);
      seriesItem.radius = [outerWidth, innerWidth];
    }
    if (rowsTempLength > 1 && index === 0) {
      seriesItem.label = {
        normal: { position: 'inner' }
      };
    }
    if (label) seriesItem.label = label;
    if (labelLine) seriesItem.labelLine = labelLine;
    if (itemStyle) seriesItem.itemStyle = itemStyle;
    if (percentShow) {
      seriesItem.label = {
        normal: {
          show: true,
          position: rowsTempLength > 1 && index === 0 ? 'inner' : 'outside',
          formatter: function formatter(item) {
            var tpl = [];
            tpl.push(item.name + ':');
            tpl.push(utils.getFormated(item.value, dataType, digit));
            tpl.push('(' + item.percent + '%)');
            return tpl.join(' ');
          }
        }
      };
    }
    seriesItem.data = dataRows.map(function (row) {
      return {
        name: row[dimension],
        value: row[metrics]
      };
    });
    series.push(seriesItem);
  });
  if (limitShowNum && limitShowNum < series[0].data.length) {
    var firstData = series[0].data;
    var remainArr = firstData.slice(limitShowNum, firstData.length);
    var sum = 0;
    remainArr.forEach(function (item) {
      sum += item.value;
    });
    series[0].data = firstData.slice(0, limitShowNum);
    series[0].data.push({ name: '其他', value: sum });
  }
  return series;
}

function getPieLegend(args) {
  var innerRows = args.innerRows,
      dimension = args.dimension,
      legendLimit = args.legendLimit,
      legendName = args.legendName,
      level = args.level,
      limitShowNum = args.limitShowNum;

  var legend = [];
  var levelTemp = [];
  if (level) {
    level.forEach(function (levelItem) {
      levelItem.forEach(function (item) {
        levelTemp.push(item);
      });
    });
    legend = levelTemp;
  } else if (limitShowNum && limitShowNum < innerRows.length) {
    for (var i = 0; i < limitShowNum; i++) {
      legend.push(innerRows[i][dimension]);
    }
    legend.push('其他');
  } else {
    legend = innerRows.map(function (row) {
      return row[dimension];
    });
  }
  if (legend.length) {
    return {
      data: legend,
      show: legend.length < legendLimit,
      formatter: function formatter(name) {
        return legendName[name] != null ? legendName[name] : name;
      }
    };
  } else {
    return false;
  }
}

function getPieTooltip(args) {
  var dataType = args.dataType,
      innerRows = args.innerRows,
      limitShowNum = args.limitShowNum,
      digit = args.digit,
      metrics = args.metrics,
      dimension = args.dimension;

  var sum = 0;
  var remainArr = innerRows.map(function (row) {
    sum += row[metrics];
    return {
      name: row[dimension],
      value: row[metrics]
    };
  }).slice(limitShowNum, innerRows.length);
  return {
    formatter: function formatter(item) {
      var tpl = [];
      tpl.push(constants.itemPoint(item.color));
      if (limitShowNum && item.name === '其他') {
        tpl.push('其他:');
        remainArr.forEach(function (_ref) {
          var name = _ref.name,
              value = _ref.value;

          var percent = utils.getFormated(value / sum, 'percent');
          tpl.push('<br>' + name + ':');
          tpl.push(utils.getFormated(value, dataType, digit));
          tpl.push('(' + percent + ')');
        });
      } else {
        tpl.push(item.name + ':');
        tpl.push(utils.getFormated(item.value, dataType, digit));
        tpl.push('(' + item.percent + '%)');
      }
      return tpl.join(' ');
    }
  };
}

var pie$1 = function pie$$1(columns, rows, settings, extra, isRing) {
  var innerRows = utilsLite.cloneDeep(rows);
  var _settings$dataType = settings.dataType,
      dataType = _settings$dataType === undefined ? 'normal' : _settings$dataType,
      percentShow = settings.percentShow,
      _settings$dimension = settings.dimension,
      dimension = _settings$dimension === undefined ? columns[0] : _settings$dimension,
      _settings$metrics = settings.metrics,
      metrics = _settings$metrics === undefined ? columns[1] : _settings$metrics,
      _settings$roseType = settings.roseType,
      roseType = _settings$roseType === undefined ? false : _settings$roseType,
      _settings$radius = settings.radius,
      radius = _settings$radius === undefined ? isRing ? roseType ? roseRingRadius : ringRadius : pieRadius : _settings$radius,
      _settings$offsetY = settings.offsetY,
      offsetY = _settings$offsetY === undefined ? pieOffsetY : _settings$offsetY,
      _settings$legendLimit = settings.legendLimit,
      legendLimit = _settings$legendLimit === undefined ? 30 : _settings$legendLimit,
      _settings$selectedMod = settings.selectedMode,
      selectedMode = _settings$selectedMod === undefined ? false : _settings$selectedMod,
      _settings$hoverAnimat = settings.hoverAnimation,
      hoverAnimation = _settings$hoverAnimat === undefined ? true : _settings$hoverAnimat,
      _settings$digit = settings.digit,
      digit = _settings$digit === undefined ? 2 : _settings$digit,
      _settings$legendName = settings.legendName,
      legendName = _settings$legendName === undefined ? {} : _settings$legendName,
      _settings$label = settings.label,
      label = _settings$label === undefined ? false : _settings$label,
      _settings$level = settings.level,
      level = _settings$level === undefined ? false : _settings$level,
      _settings$limitShowNu = settings.limitShowNum,
      limitShowNum = _settings$limitShowNu === undefined ? 0 : _settings$limitShowNu,
      labelLine = settings.labelLine,
      itemStyle = settings.itemStyle;
  var tooltipVisible = extra.tooltipVisible,
      legendVisible = extra.legendVisible;

  if (limitShowNum) innerRows.sort(function (a, b) {
    return b[metrics] - a[metrics];
  });
  var seriesParams = {
    innerRows: innerRows,
    dataType: dataType,
    percentShow: percentShow,
    dimension: dimension,
    metrics: metrics,
    radius: radius,
    offsetY: offsetY,
    selectedMode: selectedMode,
    hoverAnimation: hoverAnimation,
    digit: digit,
    roseType: roseType,
    label: label,
    level: level,
    legendName: legendName,
    limitShowNum: limitShowNum,
    isRing: isRing,
    labelLine: labelLine,
    itemStyle: itemStyle
  };
  var series = getPieSeries(seriesParams);
  var legendParams = {
    innerRows: innerRows,
    dimension: dimension,
    legendLimit: legendLimit,
    legendName: legendName,
    level: level,
    limitShowNum: limitShowNum
  };
  var legend = legendVisible && getPieLegend(legendParams);
  var tooltip = tooltipVisible && getPieTooltip({
    dataType: dataType,
    innerRows: innerRows,
    limitShowNum: limitShowNum,
    digit: digit,
    metrics: metrics,
    dimension: dimension
  });
  var options = { series: series, legend: legend, tooltip: tooltip };
  return options;
};

var index = _extends({}, Core, {
  name: 'VePie',
  data: function data() {
    this.chartHandler = pie$1;
    return {};
  }
});

module.exports = index;


/***/ })

}]);