class Box {

  constructor(width, height, depth) {
    this.traits = [new Rigid3d()];

    this.texture = new THREE.TextureLoader().load('textures/crate.gif');
    this.material = new THREE.MeshBasicMaterial({map: this.texture});

    this.geometry = new THREE.BoxBufferGeometry(width, height, depth);

    this.mesh = new THREE.Mesh( this.geometry, this.material );

    this.mesh.position.y += height/2 - 1; //sets the box on the main world plane
    //add box to scene
    scene.add(this.mesh);
  }

  setPos(x, y, z) {
    //set box position
    this.mesh.position = new THREE.Vector3(x, y, z);
  }

  getPos() {
    return this.mesh.position;
  }


  Update() {
    this.traits.forEach(trait => {
    			trait.Update(this);
				});
  }

}
