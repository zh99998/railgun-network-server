// Generated by CoffeeScript 1.9.3
(function() {
  var Quality, assert;

  assert = require('assert');

  module.exports = Quality = (function() {
    function Quality(delay1, jitter1, reliability1, cost1) {
      this.delay = delay1 != null ? delay1 : 0;
      this.jitter = jitter1 != null ? jitter1 : 0;
      this.reliability = reliability1 != null ? reliability1 : 1;
      this.cost = cost1 != null ? cost1 : 0;
    }

    Quality.unreachable = new Quality(0, 0, 0, 0);

    Quality.prototype.concat = function(delay, jitter, reliability, cost) {
      if (delay instanceof Quality) {
        this.concat(delay.delay, delay.jitter, delay.reliability, delay.cost);
      } else {
        this.delay += delay;
        this.jitter += jitter;
        this.reliability *= reliability;
        this.cost += cost;
      }
      return this;
    };

    Quality.prototype.metric = function() {
      var ref;
      assert(this.jitter >= 0);
      assert((0 <= (ref = this.reliability) && ref <= 1));
      assert(this.cost >= 0);
      if (this.reliability === 0) {
        return Number.POSITIVE_INFINITY;
      } else {
        return this.delay + (1 - this.reliability) * 6 + this.cost * 0.1;
      }
    };

    return Quality;

  })();

}).call(this);

//# sourceMappingURL=quality.js.map
