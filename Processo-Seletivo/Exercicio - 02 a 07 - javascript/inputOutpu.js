//==================== 02
var pessoa;
const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geraldo do Nascimento", age: 93 },
    { name: "Miguel Solusa", age: 70 },
    { name: "Antonio Miguel", age: 69 }
];

//======================== 03

function getByName(name) {

    for (var i = 0; i < pessoas.length; i++) {
        var pessoa = pessoas[i];
        if (pessoa.name == name) {
            return pessoa;
        }
    }
}

//==================== 04

function getVectorName() {
    var vetName = [];
    for (var i = 0; i < pessoas.length; i++) {
        vetName[vetName.length] = pessoas[i].name.split(" ")[0];
    }
    return vetName;
}

//==================== 05
var pessoas2 = [];
var countID = 1;

function insterPerson(name, age){
    var pessoa = new Object();
    pessoa.id = countID++;
    pessoa.name = name;
    pessoa.age = age;
    pessoas2[pessoas2.length] = pessoa;
}
insterPerson("Fabiana Araújo", 33);
insterPerson("Gabriel Gomes", 25);

//======================== 06

function getVectorIdadeDeHabiliatacao() {
    var pessoas_hb = [];
    for (var i = 0; i < pessoas.length; i++) {
        if(pessoas[i].age >= 18){
            pessoas_hb[pessoas_hb.length] = pessoas[i];
        }
    }
    return pessoas_hb;
}
//======================== 07

function getVectorIdadeDeHabiliatacao() {
    var soma = 0;
    for (var i = 0; i < pessoas.length; i++) {
        soma += pessoas[i].age;
    }
    return soma/pessoas.length;
}

//======================== Teste em console
console.log(pessoas)
console.log(getByName("Gabriel Gomes"));
console.log(getVectorName());
console.log(pessoas2);
console.log(getVectorIdadeDeHabiliatacao());