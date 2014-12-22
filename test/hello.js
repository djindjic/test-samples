describe('helo world', function(){
    it('true should true', function(){
        expect(true).toBe(true);
    });
});

describe('Person', function(){
    it('should say hello', function(){
        expect(new Person('jspm').name).toBe('jspm');
    });
});