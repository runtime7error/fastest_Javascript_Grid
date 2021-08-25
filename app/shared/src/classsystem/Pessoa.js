Ext.define('My-First-App.classsystem.Pessoa', {
    alternateClassName: [
        'Person',
        'guy'
    ],
    name: 'Lucas',
    city: 'Louveira',
    MyMethodHere: function (){ 
        console.log('Pessoa conversando....');
    }
});

// var pessoa = Ext.create('MyFirstApp.classsystem.Pessoa', {
//     minhaConfig: 'teste',
//     minhaConfigBoolean: 'true'
// }, function (){
//     console.log('Objeto Criado');
// }); 