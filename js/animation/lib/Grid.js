class Grid{
  constructor(columns){
    this.columns = 70;
    this.angle = 1;
    this.draw();
    this.centerX = 500
  }

  draw(){
    var x = 0;
    var half = this.columns/2
    var angle;
    var centerX = this.columns * 5 / 2;
    while(x < this.columns){

      if (x <= parseInt(half) && Math.abs(half - x) !== 0){
        angle = -Math.abs(half - x)
      }else{
        angle = Math.abs((half - x))
      }

      stage.add(new Column((angle-20)*this.angle,40,x));

      x++
    }
  }
}
