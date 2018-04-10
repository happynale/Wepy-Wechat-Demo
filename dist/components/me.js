'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./list.js');

var _list2 = _interopRequireDefault(_list);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Me = function (_wepy$component) {
    _inherits(Me, _wepy$component);

    function Me() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Me);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Me.__proto__ || Object.getPrototypeOf(Me)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "album": { "xmlns:v-bind": "", "v-bind:list.once": "dAlbum" }, "emoji": { "v-bind:list.once": "dSetting" }, "setting": { "v-bind:list.once": "dEmoji" } }, _this.$events = {}, _this.components = {
            album: _list2.default,
            emoji: _list2.default,
            setting: _list2.default
        }, _this.data = {
            userInfo: {
                nickName: 'Gcaufy',
                id: 'gcaufy',
                avatarUrl: _wepy2.default.env === 'web' ? './images/myheader.png' : '../images/myheader.png'
            },
            dAlbum: [{ icon: _wepy2.default.env === 'web' ? './images/album.png' : '../images/album.png', title: '相册' }, { icon: _wepy2.default.env === 'web' ? './images/collect.png' : '../images/collect.png', title: '收藏' }, { icon: _wepy2.default.env === 'web' ? './images/wallet.png' : '../images/wallet.png', title: '钱包' }, { icon: _wepy2.default.env === 'web' ? './images/card.png' : '../images/card.png', title: '卡包' }],
            dSetting: [{
                id: 'clear',
                icon: '../images/setting.png',
                title: '清除本地聊天记录',
                action: function action() {
                    this.clearHistory();
                }
            }],
            dEmoji: [{ icon: _wepy2.default.env === 'web' ? './images/emoji.png' : '../images/emoji.png', title: '表情' }]
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Me, [{
        key: 'onLoad',
        value: function onLoad() {
            this.setUserInfo();
        }
    }, {
        key: 'setUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                res = void 0;
                                _context.prev = 1;
                                _context.next = 4;
                                return _api2.default.getUserInfo();

                            case 4:
                                res = _context.sent;
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                res = this.userInfo;

                            case 10:

                                ['nickName', 'avatarUrl'].forEach(function (v) {
                                    return _this2.userInfo[v] = res[v];
                                });
                                this.$apply();

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function setUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return setUserInfo;
        }()
    }, {
        key: 'clearHistory',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _api2.default.clearMsg(id);

                            case 2:
                                this.$root.$navigate({ url: 'index' });

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function clearHistory(_x) {
                return _ref3.apply(this, arguments);
            }

            return clearHistory;
        }()
    }]);

    return Me;
}(_wepy2.default.component);

exports.default = Me;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbIk1lIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYWxidW0iLCJlbW9qaSIsInNldHRpbmciLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImlkIiwiYXZhdGFyVXJsIiwiZW52IiwiZEFsYnVtIiwiaWNvbiIsInRpdGxlIiwiZFNldHRpbmciLCJhY3Rpb24iLCJjbGVhckhpc3RvcnkiLCJkRW1vamkiLCJtZXRob2RzIiwic2V0VXNlckluZm8iLCJyZXMiLCJnZXRVc2VySW5mbyIsImZvckVhY2giLCJ2IiwiJGFwcGx5IiwiY2xlYXJNc2ciLCIkcm9vdCIsIiRuYXZpZ2F0ZSIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7Ozs7OztrTEFFbEJDLE8sR0FBVSxFLFFBQ2pCQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFFBQXRDLEVBQVQsRUFBeUQsU0FBUSxFQUFDLG9CQUFtQixVQUFwQixFQUFqRSxFQUFpRyxXQUFVLEVBQUMsb0JBQW1CLFFBQXBCLEVBQTNHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDLGlDQURFO0FBRUZDLGlDQUZFO0FBR0ZDO0FBSEUsUyxRQU1OQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFDTkMsMEJBQVUsUUFESjtBQUVOQyxvQkFBSSxRQUZFO0FBR05DLDJCQUFXLGVBQUtDLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHVCQUFyQixHQUErQztBQUhwRCxhQURQO0FBTUhDLG9CQUFRLENBQ0osRUFBQ0MsTUFBTSxlQUFLRixHQUFMLEtBQWEsS0FBYixHQUFxQixvQkFBckIsR0FBNEMscUJBQW5ELEVBQTBFRyxPQUFPLElBQWpGLEVBREksRUFFSixFQUFDRCxNQUFNLGVBQUtGLEdBQUwsS0FBYSxLQUFiLEdBQXFCLHNCQUFyQixHQUE4Qyx1QkFBckQsRUFBOEVHLE9BQU8sSUFBckYsRUFGSSxFQUdKLEVBQUNELE1BQU0sZUFBS0YsR0FBTCxLQUFhLEtBQWIsR0FBcUIscUJBQXJCLEdBQTZDLHNCQUFwRCxFQUE0RUcsT0FBTyxJQUFuRixFQUhJLEVBSUosRUFBQ0QsTUFBTSxlQUFLRixHQUFMLEtBQWEsS0FBYixHQUFxQixtQkFBckIsR0FBMkMsb0JBQWxELEVBQXdFRyxPQUFPLElBQS9FLEVBSkksQ0FOTDtBQVlIQyxzQkFBVSxDQUNOO0FBQ0lOLG9CQUFJLE9BRFI7QUFFSUksc0JBQU0sdUJBRlY7QUFHSUMsdUJBQU8sVUFIWDtBQUlJRSxzQkFKSixvQkFJYTtBQUNMLHlCQUFLQyxZQUFMO0FBQ0g7QUFOTCxhQURNLENBWlA7QUFzQkhDLG9CQUFRLENBQUMsRUFBQ0wsTUFBTSxlQUFLRixHQUFMLEtBQWEsS0FBYixHQUFxQixvQkFBckIsR0FBNEMscUJBQW5ELEVBQTBFRyxPQUFPLElBQWpGLEVBQUQ7QUF0QkwsUyxRQXlCUEssTyxHQUFVLEU7Ozs7O2lDQUdBO0FBQ04saUJBQUtDLFdBQUw7QUFDSDs7Ozs7Ozs7Ozs7O0FBR09DLG1DOzs7dUNBRVksY0FBSUMsV0FBSixFOzs7QUFBWkQsbUM7Ozs7Ozs7O0FBRUFBLHNDQUFNLEtBQUtkLFFBQVg7Ozs7QUFHSixpQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQmdCLE9BQTFCLENBQWtDLFVBQUNDLENBQUQ7QUFBQSwyQ0FBTyxPQUFLakIsUUFBTCxDQUFjaUIsQ0FBZCxJQUFtQkgsSUFBSUcsQ0FBSixDQUExQjtBQUFBLGlDQUFsQztBQUNBLHFDQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUdnQmhCLEU7Ozs7Ozt1Q0FDVixjQUFJaUIsUUFBSixDQUFhakIsRUFBYixDOzs7QUFDTixxQ0FBS2tCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixFQUFDQyxLQUFLLE9BQU4sRUFBckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6RHdCLGVBQUtDLFM7O2tCQUFoQmhDLEUiLCJmaWxlIjoibWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcblxuICAgIGltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCc7XG4gICAgaW1wb3J0IGFwaSBmcm9tICcuLi9jb21tb24vYXBpJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJhbGJ1bVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5vbmNlXCI6XCJkQWxidW1cIn0sXCJlbW9qaVwiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImRTZXR0aW5nXCJ9LFwic2V0dGluZ1wiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImRFbW9qaVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBhbGJ1bTogTGlzdCxcbiAgICAgICAgICAgIGVtb2ppOiBMaXN0LFxuICAgICAgICAgICAgc2V0dGluZzogTGlzdCxcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAnR2NhdWZ5JyxcbiAgICAgICAgICAgICAgICBpZDogJ2djYXVmeScsXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvbXloZWFkZXIucG5nJyA6ICcuLi9pbWFnZXMvbXloZWFkZXIucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRBbGJ1bTogW1xuICAgICAgICAgICAgICAgIHtpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvYWxidW0ucG5nJyA6ICcuLi9pbWFnZXMvYWxidW0ucG5nJywgdGl0bGU6ICfnm7jlhownfSxcbiAgICAgICAgICAgICAgICB7aWNvbjogd2VweS5lbnYgPT09ICd3ZWInID8gJy4vaW1hZ2VzL2NvbGxlY3QucG5nJyA6ICcuLi9pbWFnZXMvY29sbGVjdC5wbmcnLCB0aXRsZTogJ+aUtuiXjyd9LFxuICAgICAgICAgICAgICAgIHtpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvd2FsbGV0LnBuZycgOiAnLi4vaW1hZ2VzL3dhbGxldC5wbmcnLCB0aXRsZTogJ+mSseWMhSd9LFxuICAgICAgICAgICAgICAgIHtpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvY2FyZC5wbmcnIDogJy4uL2ltYWdlcy9jYXJkLnBuZycsIHRpdGxlOiAn5Y2h5YyFJ30sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZFNldHRpbmc6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnY2xlYXInLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnLi4vaW1hZ2VzL3NldHRpbmcucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmuIXpmaTmnKzlnLDogYrlpKnorrDlvZUnLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySGlzdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRFbW9qaTogW3tpY29uOiB3ZXB5LmVudiA9PT0gJ3dlYicgPyAnLi9pbWFnZXMvZW1vamkucG5nJyA6ICcuLi9pbWFnZXMvZW1vamkucG5nJywgdGl0bGU6ICfooajmg4UnfV0sXG4gICAgICAgIH07XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRVc2VySW5mbygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XG4gICAgICAgICAgICBsZXQgcmVzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXMgPSB0aGlzLnVzZXJJbmZvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbJ25pY2tOYW1lJywgJ2F2YXRhclVybCddLmZvckVhY2goKHYpID0+IHRoaXMudXNlckluZm9bdl0gPSByZXNbdl0pO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGNsZWFySGlzdG9yeSAoaWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGFwaS5jbGVhck1zZyhpZCk7XG4gICAgICAgICAgICB0aGlzLiRyb290LiRuYXZpZ2F0ZSh7dXJsOiAnaW5kZXgnfSk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=