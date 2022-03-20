async function picture() {
    const response = await fetch('https://aws.random.cat/meow')
    const data = await response.json()
    showPicture(data.file)

}

function showPicture(picture) {
    document.getElementById("cat_result").innerHTML = `<img src=${picture} alt="cat" />`
}

async function fact() {
    const response = await fetch('https://catfact.ninja/fact?max_length=140')
    const data = await response.json()
    createFact(data.fact)

}

function createFact(factText) {
    document.getElementById("cat_fact").innerHTML = `${factText}`
}