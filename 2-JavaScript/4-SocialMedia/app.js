const mainWrapper = document.getElementById("main-wrapper")

const postForm = document.getElementById("post")

async function fetchPostData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    for (const element of data) {

        createCard(element.title, element.body)
    }
}
fetchPostData()