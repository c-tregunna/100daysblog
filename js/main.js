// const weeks = document.querySelectorAll('.weekly_wrapper>.week');
// console.log(weeks);
// const weekTwo = document.querySelector('.weekly_wrapper .week_2');
// const showWeekOne = document.querySelector('.open_week_1');
// const showWeekTwo = document.querySelector('.open_week_2');

// showWeekOne.addEventListener('click', () => {
//     weekOne.classList.toggle('hidden');
// });

// showWeekTwo.addEventListener('click', () => {
//     weekTwo.classList.toggle('hidden');
// });


const openWeek = document.querySelectorAll('.open');
console.log(openWeek);

openWeek.forEach(open => {
    open.addEventListener('click', () => {
        open.nextElementSibling.firstElementChild.classList.toggle('hidden');
        })
    });



//Reveal type coercion answer
const reveal = document.querySelector(".reveal");
const answer = document.querySelector(".answer");
reveal.addEventListener('click', () =>{
    answer.classList.toggle("show");
}

)