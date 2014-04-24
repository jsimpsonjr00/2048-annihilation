function Tile(position, value, canMerge) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.canMerge         = canMerge || true; //used to make the goal tile only annihilate
  
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
