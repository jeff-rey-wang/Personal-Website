//  Navbar Controls
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("prev-section");
        }

        for(let j = 0; j < totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("prev-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");

        showSection(this);
    })
}
function showSection(element){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }
    target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}