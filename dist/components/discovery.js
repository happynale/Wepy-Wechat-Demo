'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _group = require('./group.js');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_wepy$component) {
    _inherits(Message, _wepy$component);

    function Message() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Message);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "list": { "com": "group", "props": "list" } }, _this.$props = { "group": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:list.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            /* moment: List,
            action: List,
            drift: List,
            shopping: List, */
            group: _group2.default
        }, _this.data = {
            dMoment: [{ icon: _wepy2.default.env === 'web' ? './images/moment.png' : '../images/moment.png', title: '朋友圈' }],
            dShopping: [{ icon: _wepy2.default.env === 'web' ? './images/shopping.png' : '../images/shopping.png', title: '购物' }],
            dDrift: [{ icon: _wepy2.default.env === 'web' ? './images/drift.png' : '../images/drift.png', title: '漂流瓶' }],
            dAction: [{ icon: _wepy2.default.env === 'web' ? './images/scan.png' : '../images/scan.png', title: '扫一扫' }, { icon: _wepy2.default.env === 'web' ? './images/shake.png' : '../images/shake.png', title: '摇一摇' }],

            list: {
                dMoment: [{ icon: _wepy2.default.env === 'web' ? './images/moment.png' : '../images/moment.png', title: '朋友圈' }],
                dShopping: [{ icon: _wepy2.default.env === 'web' ? './images/shopping.png' : '../images/shopping.png', title: '购物' }],
                dDrift: [{ icon: _wepy2.default.env === 'web' ? './images/drift.png' : '../images/drift.png', title: '漂流瓶' }],
                dAction: [{ icon: _wepy2.default.env === 'web' ? './images/scan.png' : '../images/scan.png', title: '扫一扫' }, { icon: _wepy2.default.env === 'web' ? './images/shake.png' : '../images/shake.png', title: '摇一摇' }]
            }
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Message, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Message;
}(_wepy2.default.component);

exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ3JvdXAiLCJkYXRhIiwiZE1vbWVudCIsImljb24iLCJlbnYiLCJ0aXRsZSIsImRTaG9wcGluZyIsImREcmlmdCIsImRBY3Rpb24iLCJsaXN0IiwibWV0aG9kcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUVsQkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sT0FBUCxFQUFlLFNBQVEsTUFBdkIsRUFBUixFLFFBQ2pCQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sTUFBaEMsRUFBdUMsU0FBUSxPQUEvQyxFQUF1RCxPQUFNLE9BQTdELEVBQWhCLEVBQXNGLG9CQUFtQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sTUFBcEMsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sT0FBL0UsRUFBekcsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGOzs7O0FBSUFDO0FBTEUsUyxRQU9OQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FBQyxFQUFDQyxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHFCQUFyQixHQUE2QyxzQkFBcEQsRUFBNEVDLE9BQU8sS0FBbkYsRUFBRCxDQUROO0FBRUhDLHVCQUFXLENBQUMsRUFBQ0gsTUFBTSxlQUFLQyxHQUFMLEtBQWEsS0FBYixHQUFxQix1QkFBckIsR0FBK0Msd0JBQXRELEVBQWdGQyxPQUFPLElBQXZGLEVBQUQsQ0FGUjtBQUdIRSxvQkFBUSxDQUFDLEVBQUNKLE1BQU0sZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsb0JBQXJCLEdBQTRDLHFCQUFuRCxFQUEwRUMsT0FBTyxLQUFqRixFQUFELENBSEw7QUFJSEcscUJBQVMsQ0FBQyxFQUFDTCxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG1CQUFyQixHQUEyQyxvQkFBbEQsRUFBd0VDLE9BQU8sS0FBL0UsRUFBRCxFQUF3RixFQUFDRixNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG9CQUFyQixHQUE0QyxxQkFBbkQsRUFBMEVDLE9BQU8sS0FBakYsRUFBeEYsQ0FKTjs7QUFNSEksa0JBQU07QUFDRlAseUJBQVMsQ0FBQyxFQUFDQyxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHFCQUFyQixHQUE2QyxzQkFBcEQsRUFBNEVDLE9BQU8sS0FBbkYsRUFBRCxDQURQO0FBRUZDLDJCQUFXLENBQUMsRUFBQ0gsTUFBTSxlQUFLQyxHQUFMLEtBQWEsS0FBYixHQUFxQix1QkFBckIsR0FBK0Msd0JBQXRELEVBQWdGQyxPQUFPLElBQXZGLEVBQUQsQ0FGVDtBQUdGRSx3QkFBUSxDQUFDLEVBQUNKLE1BQU0sZUFBS0MsR0FBTCxLQUFhLEtBQWIsR0FBcUIsb0JBQXJCLEdBQTRDLHFCQUFuRCxFQUEwRUMsT0FBTyxLQUFqRixFQUFELENBSE47QUFJRkcseUJBQVMsQ0FBQyxFQUFDTCxNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG1CQUFyQixHQUEyQyxvQkFBbEQsRUFBd0VDLE9BQU8sS0FBL0UsRUFBRCxFQUF3RixFQUFDRixNQUFNLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLG9CQUFyQixHQUE0QyxxQkFBbkQsRUFBMEVDLE9BQU8sS0FBakYsRUFBeEY7QUFKUDtBQU5ILFMsUUFhUEssTyxHQUFVLEU7Ozs7O2lDQUdBLENBQ1Q7Ozs7RUE3QmdDLGVBQUtDLFM7O2tCQUFyQmhCLE8iLCJmaWxlIjoiZGlzY292ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgICBpbXBvcnQgR3JvdXAgZnJvbSAnLi9ncm91cCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcImdyb3VwXCIsXCJwcm9wc1wiOlwibGlzdFwifX07XHJcbiRwcm9wcyA9IHtcImdyb3VwXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6bGlzdC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAvKiBtb21lbnQ6IExpc3QsXG4gICAgICAgICAgICBhY3Rpb246IExpc3QsXG4gICAgICAgICAgICBkcmlmdDogTGlzdCxcbiAgICAgICAgICAgIHNob3BwaW5nOiBMaXN0LCAqL1xuICAgICAgICAgICAgZ3JvdXA6IEdyb3VwXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBkTW9tZW50OiBbe2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9tb21lbnQucG5nJyA6ICcuLi9pbWFnZXMvbW9tZW50LnBuZycsIHRpdGxlOiAn5pyL5Y+L5ZyIJ31dLFxuICAgICAgICAgICAgZFNob3BwaW5nOiBbe2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9zaG9wcGluZy5wbmcnIDogJy4uL2ltYWdlcy9zaG9wcGluZy5wbmcnLCB0aXRsZTogJ+i0reeJqSd9XSxcbiAgICAgICAgICAgIGREcmlmdDogW3tpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvZHJpZnQucG5nJyA6ICcuLi9pbWFnZXMvZHJpZnQucG5nJywgdGl0bGU6ICfmvILmtYHnk7YnfV0sXG4gICAgICAgICAgICBkQWN0aW9uOiBbe2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9zY2FuLnBuZycgOiAnLi4vaW1hZ2VzL3NjYW4ucG5nJywgdGl0bGU6ICfmiavkuIDmiasnfSwge2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9zaGFrZS5wbmcnIDogJy4uL2ltYWdlcy9zaGFrZS5wbmcnLCB0aXRsZTogJ+aRh+S4gOaRhyd9XSxcblxuICAgICAgICAgICAgbGlzdDoge1xuICAgICAgICAgICAgICAgIGRNb21lbnQ6IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL21vbWVudC5wbmcnIDogJy4uL2ltYWdlcy9tb21lbnQucG5nJywgdGl0bGU6ICfmnIvlj4vlnIgnfV0sXG4gICAgICAgICAgICAgICAgZFNob3BwaW5nOiBbe2ljb246IHdlcHkuZW52ID09PSAnd2ViJyA/ICcuL2ltYWdlcy9zaG9wcGluZy5wbmcnIDogJy4uL2ltYWdlcy9zaG9wcGluZy5wbmcnLCB0aXRsZTogJ+i0reeJqSd9XSxcbiAgICAgICAgICAgICAgICBkRHJpZnQ6IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL2RyaWZ0LnBuZycgOiAnLi4vaW1hZ2VzL2RyaWZ0LnBuZycsIHRpdGxlOiAn5ryC5rWB55O2J31dLFxuICAgICAgICAgICAgICAgIGRBY3Rpb246IFt7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL3NjYW4ucG5nJyA6ICcuLi9pbWFnZXMvc2Nhbi5wbmcnLCB0aXRsZTogJ+aJq+S4gOaJqyd9LCB7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL3NoYWtlLnBuZycgOiAnLi4vaW1hZ2VzL3NoYWtlLnBuZycsIHRpdGxlOiAn5pGH5LiA5pGHJ31dXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==