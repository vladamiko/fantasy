QUnit.module( "group kingdom" );

QUnit.test("kingdom.power is in [36; 66]", function( assert ) {
  enemy.attack();
  assert.ok( (kingdom.power >= 36) && (kingdom.power <= 66), "Power is in interval [36; 66]");
});

QUnit.test("if kingdom.powerRandom is 40 -> kingdom.power is in [36; 44]", function( assert ) {
  kingdom.powerRandom = 40;
  kingdom.attack();
  assert.ok( (kingdom.power >= 36) && (kingdom.power <= 44), "Power is in interval [36; 44]");
});

QUnit.test("if kingdom.powerRandom is 60 -> kingdom.power is in [54; 66]", function( assert ) {
  kingdom.powerRandom = 60;
  kingdom.attack();
  assert.ok( (kingdom.power >= 54) && (kingdom.power <= 66), "Power is in interval [54; 66]");
});

QUnit.test("if kingdom.powerRandom is 50 -> kingdom.power is in [45; 55]", function( assert ) {
  kingdom.powerRandom = 50;
  kingdom.attack();
  assert.ok( (kingdom.power >= 45) && (kingdom.power <= 55), "Power is in interval [45; 55]");
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

/*-----------------------------------------------------------------------------------------------*/
QUnit.module( "group battle" );

QUnit.test("kingdom.power and enemy.power are in [36; 66]", function( assert ) {
  assert.ok( ((kingdom.power >= 36) && (kingdom.power <= 66)) && ((enemy.power >= 36) && (enemy.power <= 66)), "Power is in interval [36; 66]");
});