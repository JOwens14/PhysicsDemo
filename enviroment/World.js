class World {

  constructor(width, height) {
    this.texture = new THREE.TextureLoader().load('textures/brickCrate.jpg');

    //geometry(width, height, widthsegments, heightsegments), more segments = more polygons
    this.geometry = new THREE.PlaneGeometry(width, height, 10, 10);
    this.material = new THREE.MeshBasicMaterial( { map: this.texture, wireframe: false} );

    this.world = new THREE.Mesh( this.geometry, this.material );

    this.world.rotation.x -= Math.PI / 2;

    scene.add(this.world);


  }


  Update() {
    //placeholder
  }

}
