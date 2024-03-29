/// <reference types="cypress" />

/* it('Igualdade', () => {
    const a = 1
    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal('b');
}); */

/* it('Verdadeiro', () => {
    const a = true
    let c;
    expect(a).to.be.true;
    expect(a).not.to.be.equal('b');
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;
}); */

/* it('Objetos Iguais', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).to.be.deep.equal({a: 1, b: 2})
    expect(obj).eql({a: 1, b: 2})
    expect(obj).include({a: 1})
    expect(obj).to.have.property('a')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
}); */

/* it('Arrays', () => {
    const arr = [1, 2, 3]

    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
}); */

/* it('Types', () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect(num).to.not.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
}); */

/* it('Types', () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect(num).to.not.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
}); */

/* it('String', () => {
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.be.contains('de')
    expect(str).to.be.match(/de/)
    expect(str).to.be.match(/^String/)
    expect(str).to.be.match(/teste$/)
    expect(str).to.be.match(/.{15}/)
    expect(str).to.be.match(/\w+/)
    expect(str).to.be.match(/\D+/)
}); */

it('Numbers', () => {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(6)
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.be.above(5)
});
