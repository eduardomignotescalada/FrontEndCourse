// en type script
class Person {
    name:string;
age:number;

}





//en Js normal

function getAdudltsPersons(a) {
    var result = a.filtering((x) = >  {
        return x.age > 19;

    });
    return result
}

getAdultsPersons(0);
