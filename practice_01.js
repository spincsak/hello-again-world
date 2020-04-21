function greet (name){
    if (!name){
        name = 'friend';
    }
    console.log(`hello, ${name}`);
}

greet('world');
greet('Fargo');
greet('Simone');
greet();

