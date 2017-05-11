QUnit.module( "group kingdom" );

QUnit.test("kingdom.power = elf.power + orc.power + gnome.power", function( assert ) {
  kingdom.attack();
  assert.ok((kingdom.power === (elf.power + orc.power + gnome.power)), "Yes!");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group warrior" );

QUnit.test("elf.power is in [36; 66]", function( assert ) {
  elf.attack();
  assert.ok( (elf.power >= 36) && (elf.power <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if orc.powerRandom is 40 -> orc.power is in [36; 44]", function( assert ) {
  orc.powerRandom = 40;
  orc.attack();
  assert.ok( (orc.power >= 36) && (orc.power <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if gnome.powerRandom is 60 -> gnome.power is in [54; 66]", function( assert ) {
  gnome.powerRandom = 60;
  gnome.attack();
  assert.ok( (gnome.power >= 54) && (gnome.power <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if elf.powerRandom is 50 -> elf.power is in [45; 55]", function( assert ) {
  elf.powerRandom = 50;
  elf.attack();
  assert.ok( (elf.power >= 45) && (elf.power <= 55), "Power is in interval [45; 55]");
});

QUnit.test("elf.health = elf.health - enemy.power", function( assert ) {
  elf.health = 10;
  enemy.power = 2;
  elf.defend();
  assert.ok( elf.health === 8, "Yes! 10 - 2 = 8");
});

QUnit.test("orc.health = orc.health - enemy.power", function( assert ) {
  orc.health = 35;
  enemy.power = 17;
  orc.defend();
  assert.ok( orc.health === 18, "Yes! 35 - 17 = 18");
});

QUnit.test("gnome.health = gnome.health - enemy.power", function( assert ) {
  gnome.health = 257;
  enemy.power = 138;
  gnome.defend();
  assert.ok( gnome.health === 119, "Yes! 257 - 138 = 119");
});

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group enemy" );

QUnit.test("enemy.power is in [36; 66]", function( assert ) {
  enemy.attack();
  assert.ok( (enemy.power >= 36) && (enemy.power <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if enemy.powerRandom is 40 -> enemy.power is in [36; 44]", function( assert ) {
  enemy.powerRandom = 40;
  enemy.attack();
  assert.ok( (enemy.power >= 36) && (enemy.power <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if enemy.powerRandom is 60 -> enemy.power is in [54; 66]", function( assert ) {
  enemy.powerRandom = 60;
  enemy.attack();
  assert.ok( (enemy.power >= 54) && (enemy.power <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if enemy.powerRandom is 50 -> enemy.power is in [45; 55]", function( assert ) {
  enemy.powerRandom = 50;
  enemy.attack();
  assert.ok( (enemy.power >= 45) && (enemy.power <= 55), "Power is in interval [45; 55]");
});

QUnit.test("enemy.health = enemy.health - kingdom.power", function( assert ) {
  enemy.health = 500;
  kingdom.power = 200;
  enemy.defend();
  assert.ok( enemy.health === 300, "Yes! 500 - 200 = 300");
});


/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group battle" );

QUnit.test("warrior.power and enemy.power are in [36; 66]", function( assert ) {
  assert.ok( ((elf.power >= 36) && (elf.power <= 66)) && ((enemy.power >= 36) && (enemy.power <= 66)), "Power is in interval [36; 66]");
});