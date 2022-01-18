// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function(btn){
//     btn.addEventListener('click' , function(e){
//         console.log(e.currentTarget.parentElement.parentElement)
//         e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
//     })
// })

const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
    btn.addEventListener("click" , function(){
        question.classList.toggle("show-text")
        questions.forEach(function(item){
            if(item != question){
                if(item.classList.contains("show-text")){
                    item.classList.remove("show-text")
                }
            }
        })
    })
})