const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  isHitX:function(){
    return this.getHead().x == 0 || this.getHead().x == 120;
  },
  isHitY:function(){
    return this.getHead().y == 0 || this.getHead().y == 60;
  },
  isSnakeHitTheWall:function(){
    return this.isHitX()||this.isHitY();
  }
}
