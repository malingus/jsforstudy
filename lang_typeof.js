var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};
for (var x in languages) {
    if(typeof languages[x] === "string"){
        console.log(languages[x]);
    }
}
