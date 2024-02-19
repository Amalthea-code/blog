function GameLoop() {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function() {};
}

GameLoop.prototype.start = function(callback) {
    this.callback = callback;
    requestAnimationFrame(this.frame);
};

GameLoop.prototype.frame = function(time) {

    if((time - this.lastTime) > 30) {
        this.lastTime = time;
        this.callback(time);
    }
    requestAnimationFrame(this.frame);
};

export default GameLoop