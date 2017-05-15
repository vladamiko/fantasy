QUnit.module( "group kingdom" );

QUnit.test("kingdom.power = elf.power + orc.power + gnome.power", function( assert ) {
  assert.ok((battle.kingdom.attack() === (battle.kingdom.elf.power + battle.kingdom.orc.power + battle.kingdom.gnome.power)), "Yes!");
});

QUnit.test("kingdom.isAlive() -> true", function( assert ) {
  battle.kingdom.elf.health = 10;
  battle.kingdom.orc.health = 5;
  battle.kingdom.gnome.health = 1;
  assert.ok(battle.kingdom.isAlive(), "kingdom.health = 200");
});

QUnit.test("kingdom.isAlive() -> false", function( assert ) {
  battle.kingdom.elf.health = -10;
  battle.kingdom.orc.health = -5;
  battle.kingdom.gnome.health = 0;
  assert.notOk(battle.kingdom.isAlive(), "kingdom.health = 0");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group warrior" );

QUnit.test("elf.power is in [36; 66]", function( assert ) {
  assert.ok( (battle.kingdom.elf.attack() >= 36) && (battle.kingdom.elf.attack() <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if orc.powerRandom is 40 -> orc.power is in [36; 44]", function( assert ) {
  battle.kingdom.orc.powerRandom = 40;
  assert.ok( (battle.kingdom.orc.attack() >= 36) && (battle.kingdom.orc.attack() <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if gnome.powerRandom is 60 -> gnome.power is in [54; 66]", function( assert ) {
  battle.kingdom.gnome.powerRandom = 60;
  assert.ok( (battle.kingdom.gnome.attack() >= 54) && (battle.kingdom.gnome.attack() <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if elf.powerRandom is 50 -> elf.power is in [45; 55]", function( assert ) {
  battle.kingdom.elf.powerRandom = 50;
  assert.ok( (battle.kingdom.elf.attack() >= 45) && (battle.kingdom.elf.attack() <= 55), "Power is in interval [45; 55]");
});

QUnit.test("elf.health = elf.health - enemy.power", function( assert ) {
  battle.kingdom.elf.health = 10;
  battle.kingdom.elf.defend(2);
  assert.ok( battle.kingdom.elf.health === 8, "Yes! 10 - 2 = 8");
});

QUnit.test("orc.health = orc.health - enemy.power", function( assert ) {
  battle.kingdom.orc.health = 35;
  battle.kingdom.orc.defend(17);
  assert.ok( battle.kingdom.orc.health === 18, "Yes! 35 - 17 = 18");
});

QUnit.test("gnome.health = gnome.health - enemy.power", function( assert ) {
  battle.kingdom.gnome.health = 257;
  battle.kingdom.gnome.defend(138);
  assert.ok( battle.kingdom.gnome.health === 119, "Yes! 257 - 138 = 119");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group enemy" );

QUnit.test("enemy.power is in [36; 66]", function( assert ) {
  assert.ok( (battle.enemy.attack() >= 36) && (battle.enemy.attack() <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if enemy.powerRandom is 40 -> enemy.power is in [36; 44]", function( assert ) {
  battle.enemy.powerRandom = 40;
  assert.ok( (battle.enemy.attack() >= 36) && (battle.enemy.attack() <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if enemy.powerRandom is 60 -> enemy.power is in [54; 66]", function( assert ) {
  battle.enemy.powerRandom = 60;
  assert.ok( (battle.enemy.attack() >= 54) && (battle.enemy.attack() <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if enemy.powerRandom is 50 -> enemy.power is in [45; 55]", function( assert ) {
  battle.enemy.powerRandom = 50;
  assert.ok( (battle.enemy.attack() >= 45) && (battle.enemy.attack() <= 55), "Power is in interval [45; 55]");
});

QUnit.test("enemy.health = enemy.health - kingdom.power", function( assert ) {
  battle.enemy.health = 500;
  battle.enemy.defend(200);
  assert.ok( battle.enemy.health === 300, "Yes! 500 - 200 = 300");
});

QUnit.test("enemy.isAlive() -> true", function( assert ) {
  battle.enemy.health = 200;
  assert.ok(battle.enemy.isAlive(), "enemy.health = 200");
});

QUnit.test("enemy.isAlive() -> false", function( assert ) {
  battle.enemy.health = 0;
  assert.notOk(battle.enemy.isAlive(), "enemy.health = 0");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group battle" );

QUnit.test("warrior.power and enemy.power are in [36; 66]", function( assert ) {
  assert.ok( ((battle.kingdom.elf.attack() >= 36) && (battle.kingdom.elf.attack() <= 66)) && ((battle.enemy.attack() >= 36) && (battle.enemy.attack() <= 66)), "Power is in interval [36; 66]");
});