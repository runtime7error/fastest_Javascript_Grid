Ext.define('My-First-App.classsystem.Cantor', {
    //extend: 'My-First-App.classsystem.Pessoa',
    // mixins: [
    //     'My-First-App.classsystem.Musico',
    //     'My-First-App.classystem.Passaro'
    // ],
    mixins: {
        musico: 'My-First-App.classsystem.Musico',
        passaro: 'My-First-App.classystem.Passaro'
    },
    extend: 'guy',
    name: 'Amy Lee',
    city: 'Riverside',
    cantar: function() {
        console.log('Cantor está cantando');
    }
});