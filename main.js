    const toggles= document.querySelectorAll(".icon");


    console.log(toggles);

    toggles.forEach(toggle => {

        toggle.addEventListener("click", () =>{

        toggle.parentNode.classList.toggle('active');
        })
    })