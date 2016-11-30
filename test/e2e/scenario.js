describe('exo', function() {
	browser.get('http://localhost:8000/app/');
	
	
	describe('suite', function() {

		it('should show Accueil', function() {
			
			var text = element.all(by.css('item')).get(0);
			expect(text.getText()).toEqual('Accueil');
		});
		
		it('should show 4 stars', function() {
			var yellowStar4 = element.all(by.css('ors-stars img')).get(3);
			yellowStar4.click();
			var input = element(by.css('input'));
			expect(input.getAttribute('value')).toEqual('4');
		});
		
		it('should show 5 stars', function() {
			var input = element(by.css('input'));
			input.clear();
			input.sendKeys('2');
			var yellowStars = element.all(by.css('ors-stars img[src="ors-stars/img/yellow_star.png"]'));
			expect(yellowStars.count()).toEqual(2);
		});
		
		it('should go on products', function() {
			var productsLink = element(by.cssContainingText('menu item', 'Produits'));
			productsLink.click();
			expect(browser.getLocationAbsUrl()).toEqual('/products');
		});
		
		it('should start and call ws', function() {
			var start = element(by.buttonText('Start'));
			start.click();
			var text = element.all(by.css('ng-view span')).get(1);
			expect(text.getText()).toEqual('state: ok');
		});
		
		afterEach(function() {
			browser.sleep(1000);
		});
	
	});
});
