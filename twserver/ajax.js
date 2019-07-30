window.onload = function() {
    ajaxFaker();

}

function ajaxFaker() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js");
    xhr.onreadystatechange = function() {

        if ((xhr.status === 200) && (xhr.readyState === 4)) {

            eval(xhr.responseText);
            makeFakeStuff();
        }
    };
    xhr.send();
}

function makeFakeStuff() {

    var listODivs = document.createElement("div");

    for (var i = 0; i < 20; i++) {
        var username = faker.name.findName();
        var picture = faker.image.imageUrl()

        var card = document.createElement("div");
        var par = document.createElement("p");
        var myImg = document.createElement("IMG");

        myImg.src = picture;
        card.classList.add("card");
        par.innerHTML = username;

        card.appendChild(myImg);
        card.appendChild(par);

        listODivs.appendChild(card);
    }

    document.body.appendChild(listODivs);
}