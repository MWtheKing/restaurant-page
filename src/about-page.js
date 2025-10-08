const activateTab = class {
    constructor() {
        const aboutContent = document.createElement("div")
        aboutContent.id = "about-content"

        aboutContent.className = "inactive"

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

        hero.textContent = "About Us"
        para.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem illum totam rerum! Accusantium harum suscipit repellat voluptatem! Similique libero itaque laudantium, reiciendis ipsa quos, minus mollitia cumque repellat, laboriosam quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis, dolorum aspernatur dignissimos nobis, quidem enim in possimus ratione facere, tempore soluta esse non ipsam. Nesciunt maxime ea unde perspiciatis."



            aboutContent.appendChild(imageContainer)
            aboutContent.appendChild(hero)
            aboutContent.appendChild(para)
            
            const content = document.querySelector("#content")


            content.appendChild(aboutContent)

        aboutBtn.addEventListener("click", function() {

            const homeContent = document.querySelector("#home-content")
            const menuContent = document.querySelector("#menu-content")

            aboutBtn.className = "active"
            aboutContent.className = ""
            homeBtn.className = ""
            menuBtn.className = ""
            homeContent.className = "inactive"
            menuContent.className = "inactive"

            aboutContent.appendChild(imageContainer)
            aboutContent.appendChild(hero)
            aboutContent.appendChild(para)
            
            
            const content = document.querySelector("#content")

            homeContent.innerHTML = ""
            menuContent.innerHTML = ""

            content.appendChild(aboutContent)
        });
    }
}

const aboutPage = new activateTab

export { aboutPage }