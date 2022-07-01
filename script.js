async function getResponse() {
    let response = await fetch('https://rickandmortyapi.com/api/character/1,183')
    let content = await response.text()
    console.log(content)
}

getResponse()