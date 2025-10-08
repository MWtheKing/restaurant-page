

const activateTab = class {
    constructor() {
        const homeContent = document.createElement("div")
        homeContent.id = "home-content"

        const homeBtn = document.querySelector("#coverhome")
        const menuBtn = document.querySelector("#covermenu")
        const aboutBtn = document.querySelector("#coverabout")

        const imageContainer = document.createElement("div")
        const image = document.createElement("div")
        const link = document.createElement("div")
        const hero = document.createElement("h1")
        const para = document.createElement("p")

        imageContainer.appendChild(image)
        imageContainer.appendChild(link)

        imageContainer.setAttribute("class", "image-container")

        image.classList.add("image")
        image.setAttribute("alt", "resturant photo")

        link.classList.add("link")
        link.innerHTML = `Photo by <a href="https://unsplash.com/@lvnatikk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lily Banse</a> on <a href="https://unsplash.com/photos/cooked-dish-on-gray-bowl--YHSwy6uqvk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`

        hero.textContent = "MWTHEKING's Kitchen"
        para.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem illum totam rerum! Accusantium harum suscipit repellat voluptatem! Similique libero itaque laudantium, reiciendis ipsa quos, minus mollitia cumque repellat, laboriosam quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis, dolorum aspernatur dignissimos nobis, quidem enim in possimus ratione facere, tempore soluta esse non ipsam. Nesciunt maxime ea unde perspiciatis."

        homeContent.appendChild(imageContainer)
        homeContent.appendChild(hero)
        homeContent.appendChild(para)
            
            const content = document.querySelector("#content")

            content.appendChild(homeContent)  

            const menuContent = document.getElementById("menu-content")
            const aboutContent = document.getElementById("about-content")
            

        homeBtn.addEventListener("click", function() {

            const menuContent = document.getElementById("menu-content")
            const aboutContent = document.getElementById("about-content")

            homeBtn.className = "active"
            homeContent.className = ""
            menuBtn.className = ""
            aboutBtn.className = ""
            menuContent.className = "inactive"
            aboutContent.className = "inactive"

            homeContent.appendChild(imageContainer)
            homeContent.appendChild(hero)
            homeContent.appendChild(para)

            const content = document.querySelector("#content")

            menuContent.innerHTML = ""
            aboutContent.innerHTML = ""

            content.appendChild(homeContent)

        });
    }
}

const homePage = new activateTab

export { homePage }