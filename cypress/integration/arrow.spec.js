it('nada agora', function(){})

/* function soma(a, b){
    return a+b;
} */

/* const soma = function (a, b){
    return a+b;
} */

/* const soma = (a, b) =>{
    return a+b;
} */

/* const soma = (a, b) => a + b; */

const soma = a => a + a;

console.log(soma(10, 10))

it('a function test...', function()  {
    console.log('Function', this)
});