// en type script
class Person {
    surname:string;
    age:number;
}


//en Js normal

function getAdudlts(a:Persons[]) { 
    var result = a.filter((function(person) {
        return person.age > 19;

    });
    return result
}

getAdultsPersons(0);
