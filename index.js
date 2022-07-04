let strLocation = "start-page" //המשתנה שומר את המקום של המשתמש ומחזיר אותו לשם בסגירת האודות
let strInputVal = "";
let nAnimal;

// varubals
let nMultipleCurrentQuestion = 0;
let nMultipleCorrectAnswers = 0;
let arrMultipleQuestions = [];
// const
const AMOUNT_OF_QUESTION = 10; // how many questions we want out of the array
const NEED_CORRECT_ANSWER = 7; // מספר התשובות הנכונות שצריך בשביל לקבל את הרמז

const animals = [
    {
        name : "דולפין",
        backgroundImage : "DOLPHINE.svg",
        img : "dolphine_profile.svg",
        imgTitle : "dolphine_anan",
        text : "דולפין הוא יונק ימי <br> רובם חיים באוקיינוסים ומיעוטם במים מתוקים <br> לכולם שיניים קטנות וזהות שמספרן יכול להגיע ל-200. אורכם של רוב מיני הדולפינים מגיע לכשני מטרים, כאשר הזכרים ארוכים בכ-10% מהנקבות. בטבע הדולפינים הם טורפים."
    },
    {
        name : "אריה",
        backgroundImage : "LION.svg",
        img : "lion_profile.svg",
        imgTitle : "lion_anan",
        text : `אריה הוא מין של טורף גדול מהסוג פנתר שבמשפחת החתוליים. <br> הוא ניזון מאוכלי עשב שונים אותם הוא צד, וכן מפגרים. בתרבות האנושית נחשב האריה סמל לגבורה וכוח, ולכן הוצמד לו הכינוי "מלך החיות". תוחלת חייו בטבע היא בין 12 ל-18 שנים, אך בשבי הוא יכול לחיות עד 30 שנה.`
    },
    {
        name : "פלמינגו",
        backgroundImage : "FLAMINGO.svg",
        img : "flamingo_profile.svg",
        imgTitle : "flamingo_anan",
        text : "פלמינגו הוא עוף מים <br> מצויים באפריקה, דרום אסיה ואמריקה המרכזית והדרומית. צבע נוצותיהם הוא ורדרד או לבן, או גם ורוד-אדמדם. הצבע הוורוד בא כתוצאה מסרטנים זעירים הנכללים במזונם."
    },
    {
        name : "סוסון ים",
        backgroundImage : "SUS_YAM.svg",
        img : "sus_yam_profile.svg",
        imgTitle : "susyam_anan",
        text : "סביבתם הטבעית של סוסוני הים היא אזורי צמחייה ימית. סוסוני ים נפוצים ליד חופים ובשוניות אלמוגים שבהם שורר אקלים טרופי או סובטרופי. הם נפוצים באוקיינוס השקט, באוקיינוס האטלנטי ובאוקיינוס ההודי ובשלוחותיו, כולל מפרץ אילת."
    },
    {
        name : "דוב פנדה",
        backgroundImage : "PANDA.svg",
        img : "PANDA_profile.svg",
        imgTitle : "panda_anan",
        text : `פנדה ענקית היא מין של יונק והמין היחיד ששרד בסוג פנדה. <br> המסווג במשפחת הדוביים והשוכן במרכז סין. <br>  הפנדה חיה באזורים הרריים, כגון סצ'ואן וטיבט. לקראת סוף המאה ה-19 הפכה הפנדה ל"סמל לאומי" בסין ודמותה מופיעה על מטבעות זהב סיניים.`
    },
    {
        name : "כלב",
        backgroundImage : "DOG.svg",
        img : "dog_profile.svg",
        imgTitle : "dog_anan",
        text : "הכלב התפתח מהזאב, והוא בעל החיים המבוית הקדום ביותר. תוחלת החיים הממוצעת של הכלבים היא בין 11 ל-14 שנים, אך כלבים מעורבים וכלבים מגזעים מסוימים כמו כלב כנעני, סכיפרקה וגזעים נוספים של כלבי ציד יכולים לחיות גם בין 18 ל-22 שנים. ככלל, כלבים קטנים מאריכים חיים יותר מכלבים גדולים."
    },
    {
        name : "אלפקה",
        backgroundImage : "ALPAKA.svg",
        img : "alpaka_profile.svg",
        imgTitle : "alpaka_anan",
        text : "אלפקה הנפוצה בדרום אמריקה, היא מין במשפחת הגמליים ואחת משני המינים בסוג ויקוניה, הידועה ביכולתה לירוק על יריביה בעת סכסוכים וגם להגנה. <br> האלפקה נפוצה במרומי הרי האנדים מעל גובה של 3,000 מטרים, ונמצאת גם ברום של 4800 מטרים מעל פני הים."
    },
    {
        name : "סוס",
        backgroundImage : "HORSE.svg",
        img : "horse_profile.svg",
        imgTitle : "sus_anan",
        text : "סוס הוא סוג מבעלי חיים במשפחת הסוסיים, הכולל את הסוסים, החמורים, והזברות. זהו הסוג היחיד במשפחת הסוסיים. הסוג סוס כולל גם מינים שנכחדו וידועים רק ממאובנים."
    },
    {
        name : "זאב",
        backgroundImage : "WOLF.svg",
        img : "wolf_profile.svg",
        imgTitle : "wolf_anan",
        text : "זאב הוא מין טורף בסוג כלב שבסדרת הטורפים, אבי כלב הבית. זהו בעל החיים הגדול ביותר במשפחת הכלביים. <br> הזאבים בעלי תפוצה גאוגרפית רחבה ביותר ברחבי האזור ההולארקטי, לאורך אמריקה הצפונית ואירואסיה. הם חיים בלהקות הנודדות יחד בחיפושם אחרי טרף."
    }
]

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("fade");
    document.querySelector(".odot-logo").addEventListener("click", odot);
    add();
});

// פונקציה האחראית על פתיחת האודות
let odot = () => {
    document.querySelector(`.${strLocation}`).style.display = "none";
    document.querySelector(`.div-odot`).style.display = "block";  
    // document.querySelector(`.div-body`).style.overflow = "hidden";
    document.querySelector(`.odot-logo`).style.display = "none"; 
    document.querySelector(`#back-button-odot`).addEventListener("click", () => {
        document.querySelector(`.${strLocation}`).style.display = "flex";
        document.querySelector(`.div-odot`).style.display = "none";  
        document.querySelector(`.odot-logo`).style.display = "block";  
        // document.querySelector(`.div-body`).style.overflow = "scroll";
    });
}

let add = () => {
    for (let i = 1; i <= animals.length; i++) {
        let item = El("div",{cls : "banner"},
        // El("p",{cls: `animal-name`}, animals[i - 1]["name"]),            
        El("img",{attributes: {class: `animal-img`, id: `${i}`, src : `assets/media/${animals[i - 1]["backgroundImage"]}` , alt : `${animals[i - 1]["name"]}`}, listeners : {click : next}},),
        );
        document.querySelector(`.div-animals-banner`).append(item);
    }
    document.querySelector(`.input-animal`).addEventListener("input", (event) => {
        strInputVal = event.target.value;
        if (strInputVal.length >= 1) {
            document.querySelector(`.next-button`).style.visibility = "visible";
            document.querySelector(`.next-button`).addEventListener("click", checkAnsInput)
        } else {
            document.querySelector(`.next-button`).style.visibility = "hidden";
            document.querySelector(`.input-animal`).style.borderColor = "black";
        }
    });
}

// הפומקציה נקראת בלחיצה על אחד מהתמונות ומעבירה לדף המידע על החיה
let next = (event) => {
    strLocation = "info-animal-page";
    nAnimal = event.target.id;
    document.querySelector(`.header`).style.display = "none";
    document.querySelector(`.start-page`).style.display = "none";
    document.querySelector(`.info-animal-page`).style.display = "block";
    document.querySelector(`.animal-img-info`).src = `assets/media/${animals[nAnimal - 1]["img"]}`;
    document.querySelector(`.text-animal`).innerHTML = animals[nAnimal - 1]["text"];
    document.querySelector(`.title-animal-name`).src = `assets/media/${animals[nAnimal - 1]["imgTitle"]}.svg`;
    document.querySelector(`#back-button`).addEventListener("click", () => {
        document.querySelector(`.header`).style.display = "flex";
        document.querySelector(`.start-page`).style.display = "block";
        document.querySelector(`.info-animal-page`).style.display = "none";
        strLocation = "start-page";
        
    })
}

let checkAnsInput = () => {
    if (NAME_ANIMAL === strInputVal) {
        document.querySelector(`.input-animal`).style.borderColor = "#00c12394";
        document.querySelector(`.input-animal`).disabled = true;
        setTimeout(switchToQuestionPage, 1000);
    } else {
        document.querySelector(`.input-animal`).style.borderColor = "red";
    }
}

let switchToQuestionPage = () => {
    strLocation = "question-page";
    document.querySelector(`.start-page`).style.display = "none";
    document.querySelector(`.question-page`).style.display = "block";
    arrMultipleQuestions = shuffle(DATA.questions);
    addContentToQuestion();
}

/* addContentToQuestion
--------------------------------------------------------------
Description: */
const addContentToQuestion = () => {
    document.querySelector(`.multipleQuestionContainer`).innerHTML = "";
    // add question
    let question = El("div", {cls: `multipleQuestion`}, arrMultipleQuestions[nMultipleCurrentQuestion].question);
    document.querySelector(`.multipleQuestionContainer`).append(question);
    // add answeres
    if(arrMultipleQuestions[nMultipleCurrentQuestion].type === "multiple") {        
        let ansContainer = El("div", {cls: `ansContainer`},);
        document.querySelector(`.multipleQuestionContainer`).append(ansContainer);
        for(let i = 1; i <= 4; i++){
            let answer = El("div", {classes: [`multipleAns`, `ans${i}`, `ans`] , id: `ans${i}` , listeners: {click : onClickAnswer}}, arrMultipleQuestions[nMultipleCurrentQuestion][`ans${i}`]);
            document.querySelector(`.ansContainer`).append(answer);
        }
    } else {
        let ansContainer = El("div", {cls: `ansContainer`},
            El("div", {classes: [`binaryAns`, `true`, `ans`] , id: `true` , listeners: {click : onClickAnswer}}, "נכון"),
            El("div", {classes: [`binaryAns`, `false`, `ans`] , id: `false` , listeners: {click : onClickAnswer}}, "לא נכון"),
        );
        document.querySelector(`.multipleQuestionContainer`).append(ansContainer);
    }
}

/* onClickAnswer
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    // remove listeners
    let arrAns =  document.querySelectorAll(`.ans`);
    for(let i = 0; i < arrAns.length; i++){
        arrAns[i].removeEventListener("click" , onClickAnswer);
    }
    // check if answer is correct
    if(event.currentTarget.classList[1] === String(arrMultipleQuestions[nMultipleCurrentQuestion].correctAns)){
        document.querySelector(`#${event.currentTarget.id}`).style.cssText = "border-color: #00c12394;";
        // console.log("נכון");
        nMultipleCorrectAnswers++;
    } else {
        document.querySelector(`#${event.currentTarget.id}`).style.cssText = "border-color: red;";
        // console.log("לא נכון");

    }

    // send to next question.
    nMultipleCurrentQuestion++;
    setTimeout(() => {
        if(nMultipleCurrentQuestion < AMOUNT_OF_QUESTION) {
            addContentToQuestion();
        } else {
            questionsEnd();
        }
    }, 1500)
}

/* questionsEnd
--------------------------------------------------------------
Description: */
const questionsEnd = () => {
    document.querySelector(`.${strLocation}`).style.display = "none";
    strLocation = "finish-page";
    document.querySelector(`.${strLocation}`).style.display = "flex";

    if (nMultipleCorrectAnswers >= NEED_CORRECT_ANSWER) {
       document.querySelector(`.p-finish`).innerHTML = `כל הכבוד סיימתם את הלומדה בהצלחה! <br> הקוד הוא ${CODE}`
       document.querySelector(`.try-again`).style.display = "none";
    } else {
        document.querySelector(`.p-finish`).innerHTML = `טעיתם!`
        document.querySelector(`.try-again`).style.display = "block";
        document.querySelector(`.try-again`).addEventListener("click", restart)
    }
}

const restart = () => {
    nMultipleCurrentQuestion = 0;
    nMultipleCorrectAnswers = 0;
    arrMultipleQuestions = [];
    document.querySelector(`.${strLocation}`).style.display = "none";
    strLocation = "question-page";
    document.querySelector(`.${strLocation}`).style.display = "block";
    arrMultipleQuestions = shuffle(DATA.questions);
    addContentToQuestion();
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

let El = (tagName, options = {}, ...children) => {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}