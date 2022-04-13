const config = {
    title: "Marketing supports all company strategic priorities - and you have a big part to play!",
    question: "Please can you give us an example of how you are supporting the company strategy below:" ,
    submit: "Finished!",
    thanks: "Thank you!",
    celebration_image: "https://i.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.webp"
}

const title = document.getElementById('title');
const question = document.getElementById('question');
const submit = document.getElementById('submit');
const thanks = document.getElementById('thankYou');
const textArea =  document.getElementById('textArea');
const celebration = document.getElementById('celebrationContainer');
const celebrationImg = document.getElementById('celebration');

title.textContent = config.title
question.textContent = config.question
submit.textContent = config.submit
thanks.textContent = config.thanks
celebrationImg.src = config.celebration_image

const finished = () => {
    textArea.style.display = 'none';
    celebration.style.display = 'flex';
    celebration.style.marginTop = '2rem';
    submit.style.display = 'none';
}

submit.addEventListener('click', finished)