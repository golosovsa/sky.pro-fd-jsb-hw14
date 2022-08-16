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
        innerHTML += awfulCreateNodeMethod(tagsInterpreter[key] || key, data[key])
    }
    document.body.innerHTML = innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", (event) => {
        event.preventDefault();
        target = event.target;
        if (target.nodeName !== "A") return; 
        const link = target.getAttribute("href");
        const page = link.split(".")[0] + ".json";
        
        console.log(page);

        request({
            url: `./${page}`,
            onSuccess: (data) => {
                updateBody(data);
            },
            onError: (message) => {
                console.log(message);
            }
        });

        return false;
    }, true);

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