window.onload = function(){

    function* twgen(){
        yield "xbox";
        yield "switch";
        yield "PS4";
        console.log("This is the list");
    }

    var twGen = twgen();
    console.log(twGen.next());
    console.log(twGen.next());
    console.log(twGen.next());
    console.log(twGen.next());
}