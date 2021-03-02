const weekOne = document.querySelector('.weekly_wrapper .week_1');
const showWeekOne = document.querySelector('.open_week_1');

showWeekOne.addEventListener('click', () => {
    weekOne.classList.toggle('hidden');
});

//Reveal type coercion answer
const reveal = document.querySelector(".reveal");
const answer = document.querySelector(".answer");
reveal.addEventListener('click', () =>{
    answer.classList.toggle("show");
}

)