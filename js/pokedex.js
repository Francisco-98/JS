/*Inicializamos la función*/
const fetchPokemon = () => {
    /*Obtenemos el valor del Input del HTML*/
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    /*Transformamos lo ingresado a minúsculas*/
    pokeName = pokeName.toLowerCase();
    /*En lazamos la consulta con el valor obtenido del input*/
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    /*Creamos el fetch*/
    fetch(url).then((res) => {
        /*Con la condición mostramos en caso de que se haya introducido mal el nombre o el id*/
        if (res.status != "200") {
            console.log(res);
            /*Muestra en caso de que no se encuentre el pokemón*/
            pokeImage("images/sad-pikachu.gif");
            /*En caso de que se hayan hecho consultas antes reseteamos*/
            namePokemon("Pokemon");
            pokeId("000");
            type1(" ");
            type2(" ");
            type3(" ");
            info1(" ");
            info2(" ");
            info3(" ");
            experiencePok(" ");
            point1(" ");
            point2(" ");
            point3(" ");
            point4(" ");
            point5(" ");
            point6(" ");
            /*Mandamod una alerta al usuario*/
            alert("This pokemon doesn´t exist")
        }
        /*Los resultados se pasan en json*/
        else {
            return res.json();
        }
        /*Inicisamos la promesa para obtener los valores valores de la API*/
    }).then((data) => {
        /*Se obtienen los valores obtenidos*/
        if (data) {
            /*Se observalo que guarda data*/
            console.log(data);
            /*Se accede a la API y se obtiene el resultado*/
            let pokeImg = data.sprites.other.dream_world.front_default;
            pokeImage(pokeImg);
            /*Se observa lo que contiene la variable*/
            console.log(pokeImg);

            let namePoke = data.species.name;
            namePokemon(namePoke);

            let idPoke = data.id;
            pokeId(idPoke);
            /*Se accede a la API y se obtiene el resultado de types, solo la cantidad de elementos que contiene el arreglo*/
            let typePok = data.types;
            /*Comprobamos el resultado por consola*/
            console.log(typePok)
            /*Creamos una condición, con .length contamos la cantidad de elementos que tiene el array*/
            if (typePok.length == 3) {
                /*Al ser igual a 3, creamos una variable y seleccioanmos el primer espacio del arreglo*/
                let typePok1 = typePok[0];
                /*Guardamos lo que contiene la posición 0 del arreglo en una variable*/
                let firsttype = typePok1.type.name;

                let typePok2 = typePok[1];
                let secondtype = typePok2.type.name;

                let typePok3 = typePok[2];
                let thirdtype = typePok3.type.name;
                /*Mandamos los resultados*/
                type1(firsttype);
                type2(secondtype);
                type3(thirdtype);
            }
            /*En caso de que sea igual a dos realizamos los mismos procedimientos, solo con la cantidad de elementos*/
            else if (typePok.length == 2) {
                let typePok1 = typePok[0];
                let firsttype = typePok1.type.name;

                let typePok2 = typePok[1];
                let secondtype = typePok2.type.name;

                type1(firsttype);
                type2(secondtype);
                /*Eliminamos el contenido en caso de que no hubiera una habilidad 3*/
                type3("");
            }
            /*Si no es ninguna de las anteriores tomará en cuenta que el arreglo solo tiene un elemento*/
            else {
                let typePok1 = typePok[0];
                let firsttype = typePok1.type.name;

                type1(firsttype);
                type2("");
                type3("");
            }

            /*Consulta de las habilidades*/
            let abili = data.abilities;
            console.log(abili)
            if (abili.length == 3) {
                let abili1 = abili[0];
                let firsabili = abili1.ability.name;

                let abili2 = abili[1];
                let secondabili = abili2.ability.name;

                let abili3 = abili[2];
                let thirdabili = abili3.ability.name;

                info1("Ability 1: " + firsabili);
                info2("Ability 2: " + secondabili);
                info3("Ability 2: " + thirdabili);
            }
            else if (abili.length == 2) {
                let abili1 = abili[0];
                let firsabili = abili1.ability.name;

                let abili2 = abili[1];
                let secondabili = abili2.ability.name;

                info1("Ability 1: " + firsabili);
                info2("Ability 2: " + secondabili);
                info3("");
            }
            else {
                let abili1 = abili[0];
                let firsabili = abili1.ability.name;

                info1("Ability 1: " + firsabili);
                info2("");
                info3("")
            }
            /*Consulta de experiencia*/
            let pokExperience = data.base_experience;
            experiencePok(pokExperience);
            console.log(pokExperience);
            /*Consulta de los status del pokemón*/
            let sta = data.stats;
            console.log(sta)
            if (sta.length == 6) {
                /*Extraemos los puntos del status*/
                let basestat1 = sta[0];
                let stat1 = basestat1.base_stat;

                let basestat2 = sta[1];
                let stat2 = basestat2.base_stat;

                let basestat3 = sta[2];
                let stat3 = basestat3.base_stat;

                let basestat4 = sta[3];
                let stat4 = basestat4.base_stat;

                let basestat5 = sta[4];
                let stat5 = basestat5.base_stat;

                let basestat6 = sta[5];
                let stat6 = basestat6.base_stat;

                point1(stat1);
                point2(stat2);
                point3(stat3);
                point4(stat4);
                point5(stat5);
                point6(stat6);
            }
            else { 
                point1("Error");
            }

        }
    })
}

/*Identificamos el id del HTML en donde se enviara el resultado (Imagén)*/
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

/*Manda el resultado al HTML del id*/
const pokeId = (url) => {
    const numPoke = document.getElementById("idPoke");
    numPoke.textContent = ("#" + url);
}

/*Manda el resultado al HTML nombre del pokemón*/
const namePokemon = (url) => {
    const Pokenom = document.getElementById("namePoke");
    Pokenom.textContent = (url);
}

/*Manda el resultado al HTML de las habilidades*/
const info1 = (url) => {
    const moviPoke = document.getElementById("abili1");
    moviPoke.textContent = (url);
}

const info2 = (url) => {
    const moviPoke = document.getElementById("abili2");
    moviPoke.textContent = ("" + url);
}


const info3 = (url) => {
    const abiPoke = document.getElementById("abili3");
    abiPoke.textContent = (" " + url);
}

/*Manda el resultado al HTML del tipo de pokemón*/
const type1 = (url) => {
    const poketype = document.getElementById("type1");
    poketype.src = url;
    poketype.textContent = (url);
}

const type2 = (url) => {
    const poketype = document.getElementById("type2");
    poketype.textContent = (url);
}

const type3 = (url) => {
    const poketype = document.getElementById("type3");
    poketype.textContent = (url);
}

/*Manda el resultado al HTML la experiencia base*/
const experiencePok = (url) => {
    const pokeXp = document.getElementById("experience");
    pokeXp.textContent = (url);
}

/*Sección de los status del pokemón*/
const point1 = (url) => {
    const pokeStat = document.getElementById("stat1");
    pokeStat.textContent = (url);
}

const point2 = (url) => {
    const pokeStat = document.getElementById("stat2");
    pokeStat.textContent = (url);
}

const point3 = (url) => {
    const pokeStat = document.getElementById("stat3");
    pokeStat.textContent = (url);
}

const point4 = (url) => {
    const pokeStat = document.getElementById("stat4");
    pokeStat.textContent = (url);
}

const point5 = (url) => {
    const pokeStat = document.getElementById("stat5");
    pokeStat.textContent = (url);
}

const point6 = (url) => {
    const pokeStat = document.getElementById("stat6");
    pokeStat.textContent = (url);
}