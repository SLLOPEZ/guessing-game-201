var numCorrect = 0;
var questions = ['Do I have any pets? \n yes or no', 'Do I love Redbull? \n yes or no', 'What is my favorite color?', 'How many countries have I travelled to?'];
var answers = ['no', 'yes', 'black', '12'];
var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var bonus = document.getElementById('bonus');
var correctCount = document.getElementById('elCorrect');
var img1 = document.getElementById('im1');
var img2 = document.getElementById('im2');
var img3 = document.getElementById('im3');
var img4 = document.getElementById('im4');
var els = [ans1, ans2, ans3, bonus];
var imgs = [img1, img2, img3, img4];

function game(questions, answers, index) {
  var ques = prompt(questions).toLowerCase();
  if (ques === answers || ques === parseInt(answers)) {
    console.log(ques + ' correct')
    els[index].textContent = ques + ' is correct';
    els[index].className = 'correct';
    imgs[index].innerHTML = '<img src = "images/correct.gif" width="150" height="100">';
    numCorrect++;
  } else {
      console.log(ques + ' incorrect')
      els[index].textContent = ques + ' is incorrect';
      els[index].className = 'incorrect';
      imgs[index].innerHTML = '<img src = "images/wrong.gif" width="150" height="100">';
     }
};

for (var i = 0; i < questions.length; i++) {
 game(questions[i], answers[i], i);
};

elCorrect.textContent = 'You got ' + numCorrect + ' out of 4 questions!'
