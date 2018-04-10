'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _message = require('./../components/message.js');

var _message2 = _interopRequireDefault(_message);

var _discovery = require('./../components/discovery.js');

var _discovery2 = _interopRequireDefault(_discovery);

var _contact = require('./../components/contact.js');

var _contact2 = _interopRequireDefault(_contact);

var _me = require('./../components/me.js');

var _me2 = _interopRequireDefault(_me);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            'navigationBarTitleText': 'wepy - 微信',
            'navigationBarTextStyle': 'white',
            'navigationBarBackgroundColor': '#3b3a40'
        }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:active.sync": "currentTab" } }, _this.$events = {}, _this.components = {
            message: _message2.default,
            discovery: _discovery2.default,
            me: _me2.default,
            contact: _contact2.default,
            tab: _tab2.default,
            toast: _wepyComToast2.default
        }, _this.data = {
            currentTab: 0
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShow',
        value: function onShow() {
            this.currentTab = 0;
            this.$invoke('message', 'loadMessage');
        }
    }, {
        key: 'showToast',
        value: function showToast(name) {
            var promise = this.$invoke('toast', 'show', {
                title: '' + name,
                img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            });

            promise.then(function (d) {
                console.log('toast done');
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibWVzc2FnZSIsImRpc2NvdmVyeSIsIm1lIiwiY29udGFjdCIsInRhYiIsInRvYXN0IiwiZGF0YSIsImN1cnJlbnRUYWIiLCJtZXRob2RzIiwiJGludm9rZSIsIm5hbWUiLCJwcm9taXNlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0wsc0NBQTBCLFdBRHJCO0FBRUwsc0NBQTBCLE9BRnJCO0FBR0wsNENBQWdDO0FBSDNCLFMsUUFNVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsWUFBeEMsRUFBUCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQyxzQ0FERTtBQUVGQywwQ0FGRTtBQUdGQyw0QkFIRTtBQUlGQyxzQ0FKRTtBQUtGQyw4QkFMRTtBQU1GQztBQU5FLFMsUUFTTkMsSSxHQUFPO0FBQ0hDLHdCQUFZO0FBRFQsUyxRQUlQQyxPLEdBQVUsRTs7Ozs7aUNBR0Q7QUFDTCxpQkFBS0QsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGlCQUFLRSxPQUFMLENBQWEsU0FBYixFQUF3QixhQUF4QjtBQUNIOzs7a0NBRVNDLEksRUFBTTtBQUNaLGdCQUFJQyxVQUFVLEtBQUtGLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQ3hDRyw0QkFBVUYsSUFEOEI7QUFFeENHLHFCQUFLO0FBRm1DLGFBQTlCLENBQWQ7O0FBS0FGLG9CQUFRRyxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hCQyx3QkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDSCxhQUZEO0FBR0g7Ozs7RUF4QzhCLGVBQUtDLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL21lc3NhZ2UnO1xuICAgIGltcG9ydCBEaXNjb3ZlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcnknO1xuICAgIGltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCc7XG4gICAgaW1wb3J0IE1lIGZyb20gJy4uL2NvbXBvbmVudHMvbWUnO1xuICAgIGltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInO1xuXG4gICAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0JztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnd2VweSAtIOW+ruS/oScsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjM2IzYTQwJ1xuICAgICAgICB9O1xuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFjdGl2ZS5zeW5jXCI6XCJjdXJyZW50VGFiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXG4gICAgICAgICAgICBkaXNjb3Zlcnk6IERpc2NvdmVyeSxcbiAgICAgICAgICAgIG1lOiBNZSxcbiAgICAgICAgICAgIGNvbnRhY3Q6IENvbnRhY3QsXG4gICAgICAgICAgICB0YWI6IFRhYixcbiAgICAgICAgICAgIHRvYXN0OiBUb2FzdFxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjdXJyZW50VGFiOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgfTtcblxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSAwO1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdtZXNzYWdlJywgJ2xvYWRNZXNzYWdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzaG93VG9hc3QobmFtZSkge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke25hbWV9YCxcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuIl19