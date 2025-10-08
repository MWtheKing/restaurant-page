const activateTab = class {
    constructor() {
        const menuContent = document.createElement("div")
        menuContent.id = "menu-content"

        menuContent.className = "inactive"

        const menuBtn = document.querySelector("#covermenu")
        const homeBtn = document.querySelector("#coverhome")
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

        hero.textContent = "Menu"
        para.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem illum totam rerum! Accusantium harum suscipit repellat voluptatem! Similique libero itaque laudantium, reiciendis ipsa quos, minus mollitia cumque repellat, laboriosam quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis, dolorum aspernatur dignissimos nobis, quidem enim in possimus ratione facere, tempore soluta esse non ipsam. Nesciunt maxime ea unde perspiciatis."



            // menuContent.appendChild(imageContainer)
            menuContent.appendChild(hero)
            menuContent.appendChild(para)
            
            const content = document.querySelector("#content")


            content.appendChild(menuContent)

        menuBtn.addEventListener("click", function() {

            const homeContent = document.querySelector("#home-content")
            const aboutContent = document.querySelector("#about-content")

            menuBtn.className = "active"
            menuContent.className = ""
            homeBtn.className = ""
            homeContent.className = "inactive"
            aboutContent.className = "inactive"
            aboutBtn.className = ""

            // menuContent.appendChild(imageContainer)
            menuContent.appendChild(hero)
            menuContent.appendChild(para)
            
            
            const content = document.querySelector("#content")

            homeContent.innerHTML = ""
            aboutContent.innerHTML = ""

            content.appendChild(menuContent)
        });
    }
}

const menuPage = new activateTab

export { menuPage }