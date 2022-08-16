/**
 * Function request({
 *     method: "GET",
 *     url: "",
 *     responseType: "json",
 *     onSuccess: empty,
 *     onError: empty,
 * })
 */

const empty = (data) => {}

function request({
    method = "GET",
    url = "",
    responseType = "json",
    onSuccess = empty,
    onError = empty,
}) {
    if (!url) onError("Empty url");

    const req = new XMLHttpRequest();
    req.open(method, url);
    req.responseType = responseType;
    req.onload = (event) => {
        if (req.status !== 200) onError(`(${req.status}) ${req.statusText}`);
        data = req.response;
        onSuccess(data);
    }
    req.onerror = (event) => {
        onError(`(${req.status}) ${req.statusText}`);
    }

    req.send();
}