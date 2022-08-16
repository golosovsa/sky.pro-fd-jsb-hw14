const tagsInterpreter = {
    title: "h1",
    subtitle: "h2",
    body: "p",
}

function awfulCreateNodeMethod(tagName, content) {
    return `<${tagName}>${content}</${tagName}>`;
}

function updateBody(data) {
    let innerHTML = ""
    for (const key in data) {
        innerHTML += awfulCreateNodeMethod(tagsInterpreter[key], data[key])
    }
    document.body.innerHTML = innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    
    request({
        url: "./index.json",
        onSuccess: (data) => {
            updateBody(data);
        },
        onError: (message) => {
            console.log(message);
        }
    });
});