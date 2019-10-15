class Keyboard {

  constructor(player) {
    this.player = player;
    //object containing map of keys currently pressed
    this.keyPressed = {};
    //listeners
    window.addEventListener('keydown', this.keyDown.bind(this)); //binds these callbacks to this instance
    window.addEventListener('keyup', this.keyUp.bind(this));
  }

  keyDown(event) {
    //console.log(event.keyCode);
    this.keyPressed[event.keyCode] = true;
  }

  keyUp(event) {
    //console.log('key lifted:' + event.keyCode);
    this.keyPressed[event.keyCode] = false;
  }

  Update() {
    if (this.keyPressed[87]) { // W key
      this.player.moveForward();
    }
    if (this.keyPressed[83]) { // S key
      this.player.moveBackward();
    }
    if (this.keyPressed[81]) { // Q key
      this.player.strafeLeft();
    }
    if (this.keyPressed[69]) { // E key
      this.player.strafeRight();
    }
    if (this.keyPressed[65]) { // A key
      this.player.rotateLeft();
    }
    if (this.keyPressed[68]) { // D key
      this.player.rotateRight();
    }
    if (this.keyPressed[32]) { // SPACE key

    }
  }

}
