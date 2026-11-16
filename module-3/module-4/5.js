const section = document.querySelector("section");
for (let i = 0; i < picArray.length; i++) {
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    heading.textContent = picArray[i].title;
    const image = document.createElement("img");
    image.src = picArray[i].medium;
    image.alt = picArray[i].title;
    const caption = document.createElement("p");
    caption.textContent = picArray[i].caption;
    const description = document.createElement("p");
    description.textContent = picArray[i].description;
    article.appendChild(heading);
    article.appendChild(image);
    article.appendChild(caption);
    article.appendChild(description);
    section.appendChild(article);
}
