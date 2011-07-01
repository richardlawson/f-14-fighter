describe("GameObject", function() {
  var gameObject;
  var canvas

  beforeEach(function() {
	var element = createDummyElementForCanvas('div');
	canvas = new Canvas(element);
    gameObject = new GameObject('anyoldclass');
  });

  it("when activate is called x value is set correctly", function() {
	  gameObject.activate(canvas, 300, 190);
	  expect(gameObject.getX()).toEqual(300);
  });
  
  it("when activate is called y value is set correctly", function() {
	  gameObject.activate(canvas, 95, 10);
	  expect(gameObject.getY()).toEqual(10);
  });
  
  it("when moveTo is called x value is set correctly", function() {
	  gameObject.activate(canvas, 0, 0);
	  gameObject.moveTo(175, 132);
	  expect(gameObject.getX()).toEqual(175);
  });
  
  it("when moveTo is called y value is set correctly", function() {
	  gameObject.activate(canvas, 0, 0);
	  gameObject.moveTo(200, 250);
	  expect(gameObject.getY()).toEqual(250);
  });

 
});