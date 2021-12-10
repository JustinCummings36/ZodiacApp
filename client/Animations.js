function getAlert(){
    var person1 = {name:'Eldor', age:22, location: 'San Francisco', graduated: false};
    var person2 = {name:'Edor', age:22, location: 'San ', graduated: true};
    var person3 = {name:'Elor', age:2, location: ' Francisco', graduated: true};

    var people = [person1,person2,person3];
    for(var i = 0; i < people.length; i++){
        if(people[i].graduated == true){
            document.getElementById('demo').innerHTML += people[i].name+ ' ' + 'is graduated.';
        }else{
            document.getElementById('demo').innerHTML += people[i].name + ' ' + 'is not graduated';
        }
    }
}
