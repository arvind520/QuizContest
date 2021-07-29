var questionsArray = [
    {
        question: 'Which one of the following river flows between Vindhyan and Satpura ranges?',
        options: ['Narmada','Mahanadi','Son','Netravati'],
        correctOptionIndex: 0
    },
    {
        question: 'The Central Rice Research Station is situated in?',
        options: ['Chennai','Cuttack','Banglore','Quilon'],
        correctOptionIndex: 1
    },
    {
        question: 'Who among the following wrote Sanskrit grammar?',
        options: ['Kalidasa','Charak','Panini','AryaBhatt'],
        correctOptionIndex: 2
    },
    {
        question: 'Which among the following headstreams meets the Ganges in last?',
        options: ['Alaknanda', 'Pindar' ,'Mandakini' ,'Bhagirathi'],
        correctOptionIndex: 3
    },
    {
        question: 'The metal whose salts are sensitive to light is?',
        options: ['Zinc', 'Silver' ,'Copper' ,'Aluminum'],
        correctOptionIndex: 1
    },
    {
        question: 'Patanjali is well known for the compilation of –',
        options: ['Yoga Sutrac', 'Panchatantra' ,'Brahma Sutra' ,'Ayurveda'],
        correctOptionIndex: 0
    },
    {
        question: ' River Luni originates near Pushkar and drains into which one of the following?',
        options: ['Rann of Kachchh', 'Arabian Sea' ,'Gulf of Cambay' ,'Lake Sambhar'],
        correctOptionIndex: 0
    },
    {
        question: ' Which one of the following rivers originates in Brahmagiri range of Western Ghats?',
        options: ['Pennar', 'Cauvery' ,'Krishna' ,'Tapti'],
        correctOptionIndex: 1
    },
    {
        question: '  The country that has the highest in Barley Production?',
        options: ['China', 'India' ,'Russia ' ,'French'],
        correctOptionIndex: 2
    },
    {
        question: ' Tsunamis are not caused by',
        options: ['Hurricanes', 'Earthquakes' ,'Undersea landslides' ,' Volcanic eruptions'],
        correctOptionIndex: 0
    },
    {
        question: ' Chambal river is a part of –',
        options: [' Sabarmati basin', 'Ganga basin' ,'Narmada basin' ,' Godavari basin'],
        correctOptionIndex: 2
    },
    {
        question: ' D.D.T. was invented by?',
        options: [' Mosley', 'Rudolf' ,'Karl Benz' ,' Dalton'],
        correctOptionIndex: 0
    },
    {
        question: ' Volcanic eruption do not occur in the',
        options: [' Baltic sea', 'Black sea' ,'Caribbean sea' ,' Caspian sea'],
        correctOptionIndex: 0
    },
    {
        question: ' Indus river originates in –',
        options: [' Kinnaur', 'Ladakh' ,'Nepal' ,' Tibet'],
        correctOptionIndex: 3
    },
    {
        question: '  The hottest planet in the solar system?',
        options: [' Mercury', 'Venus' ,'Mars' ,' Jupiter'],
        correctOptionIndex: 1
    },
    {
        question: ' With which of the following rivers does Chambal river merge?',
        options: [' Banas', 'Ganga ' ,'Narmada' ,' Yamuna'],
        correctOptionIndex: 3
    },
    {
        question: ' Where was the electricity supply first introduced in India –',
        options: [' Mumbai', 'Dehradun' ,'Darjeeling' ,' Chennai'],
        correctOptionIndex: 2
    },
    {
        question: ' Amravati, Bhavani, Hemavati and Kabini are tributaries of which one of the following rivers?',
        options: [' Mahanadi', 'Godawari' ,'Cauvery' ,'  Krishna'],
        correctOptionIndex: 2
    },

    {
        question: ' Which of the following is related to Bharat Nirman Scheme?',
        options: [' Foodgrain production self sufficiency', ' Family welfare programme' ,'Infrastructure development' ,'Employment generation program'],
        correctOptionIndex: 2
    },

    {
        question: '  Which peninsular river is least seasonal in flow?',
        options: ['Narmada', 'Krishna' ,'Godavari' ,' Cauvery'],
        correctOptionIndex: 2
    }
];

//Creating DOM of question and adding event listener
var score = 0;
function createDOMofQuestion(obj){
    var app = document.querySelector('.app');
    // console.log(app);
    // var liveScoreAndQuesNo = document.createElement('h3');       //Adding live score and question number dom in html
    // liveScoreAndQuesNo.className ="liveScoreAndQuesNo";

    var liveScore = document.createElement('span');
    liveScore.textContent = "Current Score: "+score+"/40";
    liveScore.classList.add("liveScore");
    
    var quesNo = document.createElement('span');
    quesNo.textContent = "Question Number: "+i+"/20 ";
    quesNo.classList.add("quesNo");
                    
    app.appendChild(quesNo);
    app.appendChild(liveScore);
    // app.appendChild(liveScoreAndQuesNo);                     // it will get remove when next button will click
    

    var divMainCard = document.createElement('div');
    divMainCard.className = 'card main-card';

    var divMainCardBody = document.createElement('div');
    divMainCardBody.className = 'card-body';

    var h5 = document.createElement('h5');
    h5.textContent = obj['question'];
    h5.className = 'card-title';

    var p = document.createElement('p');
    p.className = 'card-text';

    var ul = document.createElement('ul');
    ul.className = 'question-ul';
    obj['options'].forEach(element => {
        var li = document.createElement('li');
        var divSubCard = document.createElement('div');
        divSubCard.className = 'card sub-card';
        var divCardBody = document.createElement('div');
        divCardBody.className = 'card-body';
        divCardBody.textContent = element;

        li.appendChild(divSubCard);
        divSubCard.appendChild(divCardBody);
        ul.appendChild(li);
    });

    p.appendChild(ul);

    app.appendChild(divMainCard);
    divMainCard.appendChild(divMainCardBody);
    divMainCardBody.appendChild(h5);
    divMainCardBody.appendChild(p);
    
    
    // Adding next button
    var nextBtn = document.createElement('a');
    nextBtn.className = 'btn btn-primary';
    nextBtn.innerText = 'Next Question';
    divMainCard.appendChild(nextBtn);

    // function for generating new question
    var autoNxtFn = function(){
        divMainCard.remove();
        liveScore.remove();
        quesNo.remove();
        // clearInterval(autoNxtQuesInterval);
        createQuestion();
    }

    
    // copyright at the bottom of the body
    var body = document.querySelector('body');
    var pcr = document.createElement('p');
    pcr.className = 'copy-right';
    pcr.textContent ='This project is made by Arvind Chauhan.';
    body.appendChild(pcr);

    ul.addEventListener('click', function(e){   
        // console.log(e.target.textContent == obj['options'][obj.correctOptionIndex]);
        if(e.target.classList.contains('question-ul')){
            //not doing anything because user has clicked on ul not li
        }
        else{
            if(e.target.textContent == obj['options'][obj.correctOptionIndex]){
                score+=2;
                e.target.classList.add('correctAns');
                var autoNxtQuesInterval = setTimeout(autoNxtFn, 1000);        //if ans correct automatically move to next question
            }else{ //carefull if we click on ul then ul get wrongAns class
                e.target.classList.add('wrongAns');
                score-=1;
            }
        }
        // console.log(e.target.classList.contains('question-ul'));
    });
    
    nextBtn.addEventListener('click', autoNxtFn);  
}

//Congratulating to user for completions
function congratulating(){
    var app = document.querySelector('.app');
    var h1 = document.createElement('h1');
    h1.className = 'heading';
    h1.textContent = "Congratulation";
    

    var h3 = document.createElement('h3');
    h3.className = 'score-heading';
    h3.textContent = "Your Score: "+ score +" out of 40";
    app.appendChild(h1);
    app.appendChild(h3);
    

}


//Generating Random Question
var questionsAppeared = [];
var i=0;
function createQuestion(){
    if(i<20){ // provide next question
        i++;
        let randomIndex = Math.floor(Math.random()*20);
        if(questionsAppeared.includes(randomIndex)){
            while(questionsAppeared.includes(randomIndex)){
                randomIndex = Math.floor(Math.random()*20);
            }
        }
        console.log(i," ",randomIndex);
        questionsAppeared.push(randomIndex);
        createDOMofQuestion(questionsArray[randomIndex]);
        // console.log(questionsArray[randomIndex]);
    }else{
        // congrats for completion
        congratulating();
    }
}

//Start Button
var startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', function(e){
   let heading = document.querySelector('.heading');
   let rules = document.querySelector('.rules');
   heading.remove();
   rules.remove();
   this.remove();
   createQuestion();
});

