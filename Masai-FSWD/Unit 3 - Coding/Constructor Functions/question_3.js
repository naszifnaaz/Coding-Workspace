var person1 = {
    name : "Amar",
    profession : "Singer",
    location : "Goa",

    sing:function()
    {
        console.log(`${this.name} can sing`);
    }
}


var person2 = {
    name : "Akbar",
    profession : "Chef",
    location : "Mumbai",

    cook:function()
    {
        console.log(`${this.name} can cook`);
    }
}

var person3 = {
    name : "Anthony",
    profession : "Magician",
    location : "Kashmir",

    magic:function()
    {
        console.log(`${this.name} can perform magic`);
    }
}


//Amar borrowing skills of Akbar and Anthony
person1.sing();
person2.cook.call(person1);
var when = person3.magic.bind(person1);
when();

//Akbar borrowing the skills of Amar and Anthony
person1.sing.call(person2);
person2.cook();
var when = person3.magic.bind(person2);
when();

//Anthony borrowing skills of Amar and Akbar
person1.sing.call(person3);
var when = person2.cook.bind(person3);
when();
person3.magic();