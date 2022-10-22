let request=require("request")
let pretty=require("pretty")
let cheerio=require("cheerio")
request("https://thequrancourses.com/our-blog/dua-evening-remembrance/",(error,res,html)=>{
    if (error) console.log(error);
    else{
        // console.log(pretty(html))
        getHtml(html)
    }
})
function getHtml(html){
    let sel=cheerio.load(html)
    let strong=sel("p")
    // console.log('strong',sel(strong[67].text()))
    console.log('strong',sel(strong[56]).text())
}
// اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّماوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْل