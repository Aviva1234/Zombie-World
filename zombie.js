AFRAME.registerComponent("zombie-fest", {
    init: function(){
        var posX = -50;
        var posY = -3;
        var posZ = -150;
for(var i=1;i<4;i++){
    var id='zomb${i}';
    var position = {x: posX, y: posY, z: posZ};
    posX += 50;
    this.zombieSpawn(id, position);
}
},
zombieSpawn: function(id, position){
    var environEl = document.querySelector("a-scene");
    var zombieEl = document.createElement("a-entity");
    zombieEl.setAttribute("id", id);
    zombieEl.setAttribute("position", position);
    zombieEl.setAttribute("animation-mixer", {clip: "Walk"});
    zombieEl.setAttribute("scale", '10 10 10');
    zombieEl.setAttribute("gltf-model", '#zombie');
    zombieEl.setAttribute("animation", {property: 'position', dur: '15000', to: '-10 0 1000', loop: 'true', easing: 'linear'});
    environEl.appendChild(zombieEl);
}
});