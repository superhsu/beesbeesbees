var Bee = function() {
  Grub.call(this);
  Bee.prototype.constructor = Bee;
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);


