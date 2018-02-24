var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var base;
(function (base) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // constructors
        function Bullet(x, y, angel, speed, range, power) {
            var _this = _super.call(this, Core.GameManager.assetManager.getResult("bullet")) || this;
            _this.name = "bullet";
            _this._initX = x;
            _this._initY = y;
            _this._angel = angel;
            _this._speed = speed;
            _this._range = range;
            _this._power = power;
            _this._initialize();
            return _this;
        }
        // private methods
        Bullet.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.HalfWidth = this.Width * 0.5;
            this.HalfHeight = this.Height * 0.5;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = this._initX;
            this.y = this._initY;
            this.Start();
        };
        // public methods
        Bullet.prototype.Start = function () {
        };
        Bullet.prototype.Update = function () {
            this.Move();
            this.IsColliding();
            //
        };
        Bullet.prototype.IsColliding = function () {
            return "";
        };
        Bullet.prototype.IsOut = function () {
            //right boundary
            if (this.x >= 640 + this.HalfWidth) {
                return true;
            }
            else if (this.x <= -this.HalfWidth) {
                return true;
            }
            else if (this.y <= -this.HalfHeight) {
                return true;
            }
            else if (this.y >= 480 + this.HalfHeight) {
                return true;
            }
            return false;
        };
        Bullet.prototype.Move = function () {
            switch (this._angel) {
                case -90:
                    this.x -= this._speed;
                    break;
                case 90:
                    this.x += this._speed;
                    break;
                case 180:
                    this.y += this._speed;
                    break;
                case 0:
                    this.y -= this._speed;
                    break;
            }
        };
        return Bullet;
    }(createjs.Bitmap));
    base.Bullet = Bullet;
})(base || (base = {}));
//# sourceMappingURL=bullet.js.map