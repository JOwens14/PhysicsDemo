class Player {

  constructor() {
    this.name = 'player';
    this.height = 100;
    this.speed = 10;
    this.turnSpeed = 0.01;

    camera.position.set(0, this.height, -250); //sets the player POV height and 250 back from origin on z-axis
    camera.lookAt(new THREE.Vector3(0, this.height, 0));

  }

  moveForward() {
    camera.position.x -= Math.sin(camera.rotation.y) * this.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * this.speed;
  }

  moveBackward() {
    camera.position.x += Math.sin(camera.rotation.y) * this.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * this.speed;
  }

  strafeLeft() {
    camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * this.speed;
    camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * this.speed;
  }

  strafeRight() {
    camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * this.speed;
    camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * this.speed;
  }

  rotateLeft() {
    camera.rotation.y -= Math.PI * this.turnSpeed;
  }

  rotateRight() {
    camera.rotation.y += Math.PI * this.turnSpeed;
  }

  Update() {
    // do stuff
  }

}
