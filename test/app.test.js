describe('straighforward testing', function() {
	var index;
	beforeEach(function(done){
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});

	it('works', function(){
		expect(index(2,3)).toEqual( 2*2+3*3);
	});
});  

describe('swapping out deps v1',function(){
	var index;
	beforeEach(function(done) {
		System.set("src/double",System.get("test/fakes/identity"));
		System.set("src/triple",System.get("test/fakes/identity"));
		// System.map["src/triple"] = "test/fakes/identity";
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});

	it('works',function() {
		expect(index(2,3)).toEqual( 2+3 );
	});
});


describe('swapping out deps v2',function(){
	var index;
	beforeEach(function(done) {
		System.map["src/triple"] = "test/fakes/identity";
		System.map["src/double"] = "test/fakes/identity";
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});

	it('works',function() {
		expect(index(2,3)).toEqual( 2+3 );
	});
});


describe('swapping out deps v3',function(){
	var index;
	beforeEach(function(done) {
		//delete old ones first
		System.delete("src/triple");
		System.delete("src/double");
		System.delete("src/index");

		// import replacements
		System.set("src/double",System.get("test/fakes/identity"));
		System.set("src/triple",System.get("test/fakes/identity"));

		// import src/index, hopefully with new funcs
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});

	it('works',function() {
		expect(index(2,3)).toEqual( 2+3 );
	});
});

describe('swapping out deps v4',function(){
	var index;
	beforeEach(function(done) {
		//delete old ones first
		System.delete("src/triple");
		System.delete("src/double");
		System.delete("src/index");

		// import replacements
		System.map["src/triple"] = "test/fakes/identity";
		System.map["src/double"] = "test/fakes/identity";

		// import src/index, hopefully with new funcs
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});

	it('works',function() {
		expect(index(2,3)).toEqual( 2+3 );
	});
});

describe('swapping out deps v5',function(){
	var index;
	beforeEach(function(done) {
		// import replacements
		System.map["src/triple"] = "test/fakes/identity";
		System.map["src/double"] = "test/fakes/identity";

		// import src/index, hopefully with new funcs
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});

	it('works',function() {
		expect(index(2,3)).toEqual( 2+3 );
	});
});
