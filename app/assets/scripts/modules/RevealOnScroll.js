import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
<<<<<<< HEAD
    this.hideInitially();
    this.offsetPercentage = offset;
=======
    this.offsetPercentage = offset;
    this.hideInitially();
>>>>>>> sticky-header
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
<<<<<<< HEAD
      var currentItem - this;
      new Waypoints({
=======
      var currentItem = this;
      new Waypoint({
>>>>>>> sticky-header
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
