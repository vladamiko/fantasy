QUnit.module( "group kingdom" );

QUnit.test("kingdom.power = elf.power + orc.power + gnome.power", function( assert ) {
  battle.kingdom.attack(battle.enemy);
  assert.ok((battle.kingdom.power === (battle.kingdom.elf.power + battle.kingdom.orc.power + battle.kingdom.gnome.power)), "Yes!");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group warrior" );

QUnit.test("elf.power is in [36; 66]", function( assert ) {
  battle.kingdom.elf.attack();
  assert.ok( (battle.kingdom.elf.power >= 36) && (battle.kingdom.elf.power <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if orc.powerRandom is 40 -> orc.power is in [36; 44]", function( assert ) {
  battle.kingdom.orc.powerRandom = 40;
  battle.kingdom.orc.attack();
  assert.ok( (battle.kingdom.orc.power >= 36) && (battle.kingdom.orc.power <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if gnome.powerRandom is 60 -> gnome.power is in [54; 66]", function( assert ) {
  battle.kingdom.gnome.powerRandom = 60;
  battle.kingdom.gnome.attack();
  assert.ok( (battle.kingdom.gnome.power >= 54) && (battle.kingdom.gnome.power <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if elf.powerRandom is 50 -> elf.power is in [45; 55]", function( assert ) {
  battle.kingdom.elf.powerRandom = 50;
  battle.kingdom.elf.attack();
  assert.ok( (battle.kingdom.elf.power >= 45) && (battle.kingdom.elf.power <= 55), "Power is in interval [45; 55]");
});

QUnit.test("elf.health = elf.health - enemy.power", function( assert ) {
  battle.kingdom.elf.health = 10;
  battle.enemy.power = 2;
  battle.kingdom.elf.defend(battle.enemy);
  assert.ok( battle.kingdom.elf.health === 8, "Yes! 10 - 2 = 8");
});

QUnit.test("orc.health = orc.health - enemy.power", function( assert ) {
  battle.kingdom.orc.health = 35;
  battle.enemy.power = 17;
  battle.kingdom.orc.defend(battle.enemy);
  assert.ok( battle.kingdom.orc.health === 18, "Yes! 35 - 17 = 18");
});

QUnit.test("gnome.health = gnome.health - enemy.power", function( assert ) {
  battle.kingdom.gnome.health = 257;
  battle.enemy.power = 138;
  battle.kingdom.gnome.defend(battle.enemy);
  assert.ok( battle.kingdom.gnome.health === 119, "Yes! 257 - 138 = 119");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group enemy" );

QUnit.test("enemy.power is in [36; 66]", function( assert ) {
  battle.enemy.attack(battle.kingdom);
  assert.ok( (battle.enemy.power >= 36) && (battle.enemy.power <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if enemy.powerRandom is 40 -> enemy.power is in [36; 44]", function( assert ) {
  battle.enemy.powerRandom = 40;
  battle.enemy.attack(battle.kingdom);
  assert.ok( (battle.enemy.power >= 36) && (battle.enemy.power <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if enemy.powerRandom is 60 -> enemy.power is in [54; 66]", function( assert ) {
  battle.enemy.powerRandom = 60;
  battle.enemy.attack(battle.kingdom);
  assert.ok( (battle.enemy.power >= 54) && (battle.enemy.power <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if enemy.powerRandom is 50 -> enemy.power is in [45; 55]", function( assert ) {
  battle.enemy.powerRandom = 50;
  battle.enemy.attack(battle.kingdom);
  assert.ok( (battle.enemy.power >= 45) && (battle.enemy.power <= 55), "Power is in interval [45; 55]");
});

QUnit.test("enemy.health = enemy.health - kingdom.power", function( assert ) {
  battle.enemy.health = 500;
  battle.kingdom.power = 200;
  battle.enemy.defend(battle.kingdom);
  assert.ok( battle.enemy.health === 300, "Yes! 500 - 200 = 300");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group battle" );

QUnit.test("warrior.power and enemy.power are in [36; 66]", function( assert ) {
  assert.ok( ((battle.kingdom.elf.power >= 36) && (battle.kingdom.elf.power <= 66)) && ((battle.enemy.power >= 36) && (battle.enemy.power <= 66)), "Power is in interval [36; 66]");
});