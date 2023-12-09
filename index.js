var parentQuote=document.getElementById("quote");


var i=0;
function changeQuote(){
    var arrQuotes =[
        ` <p>“BASSANT”</p>`,
      ` <p>“FRONTEND DEVELOPER”</p>`,
      ` <p>“خلي حلمك خط سيرك”</p>`,
      ` <p>“NO PAIN ,NO GAIN”</p>`,
      ` <p>“Be yourself; everyone else is already taken.”</p>`,
      ` <p>“Be yourself”</p>`,
      ` <p>““So many books, so little time.”― Frank Zappa”</p>`,
      ` <p>““A room without books is like a body without a soul.”― Marcus Tullius Cicero”</p>`,
      ` <p>““If you tell the truth, you don't have to remember anything.”― Mark Twain”</p>`,
      ` <p>“Be yourselffffffffffff”</p>`,

    ]
    parentQuote.innerHTML=arrQuotes[i];
    i++;
    if (i> arrQuotes.length-1){
        i=0
    }
}