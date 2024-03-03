function createLevel() {
  // Create a new level
  var level = {
    boxes: [],
    powerups: [],
    player: {
      x: 200,
      y: 200,
      width: 25,
      height: 25,
      color: '#E6AC27'
    }
  };

  // Add some boxes to the level
  level.boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    color: 'green'
  });
  level.boxes.push({
    x: 100,
    y: 0,
    width: 10,
    height: 10,
    color: 'green'
  });
  level.boxes.push({
    x: 200,
    y: 0,
    width: 10,
    height: 10,
    color: 'green'
  });

  // Add some powerups to the level
  level.powerups.push({
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    color: '#BF4D28',
    effect: 'shrink'
  });
  level.powerups.push({
    x: 150,
    y: 50,
    width: 20,
    height: 20,
    color: '#BF4D28',
    effect: 'gravity'
  });

  // Display the level in the #level-editor div
  var levelEditor = document.getElementById('level-editor');
  levelEditor.innerHTML = '';
  for (var i = 0; i < level.boxes.length; i++) {
    var box = level.boxes[i];
    levelEditor.innerHTML += '<rect x="' + box.x + '" y="' + box.y + '" width="' + box.width + '" height="' + box.height + '" fill="' + box.color + '"></rect>';
  }
  for (var i = 0; i < level.powerups.length; i++) {
    var powerup = level.powerups[i];
    levelEditor.innerHTML += '<rect x="' + powerup.x + '" y="' + powerup.y + '" width="' + powerup.width + '" height="' + powerup.height + '" fill="' + powerup.color + '"></rect>';
  }
}
