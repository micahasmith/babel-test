
describe('testing', function(){
	var index;
	beforeEach(function(done){
		System.import('src/index').then(function(ind) {
			index = ind.default;
			done();
		});
	});
	it('boots', function(){
		expect(index(2,3)).toEqual( 2*2+3*3);
	});
});  
