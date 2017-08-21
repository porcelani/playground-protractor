describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        var angularHomepage = new AngularHomepage();
        angularHomepage.get();

        angularHomepage.setName('Julie');

        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });
});