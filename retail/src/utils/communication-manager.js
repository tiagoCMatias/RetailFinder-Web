const URL = "http://localhost:4545";

export function searchStores(currentLocation, storeType) {
    return new Promise(function (resolve, reject) {

        let requestUrl = URL + "/api/search/";

        let requestOptions = {
            uri: requestUrl,
            method: "POST",
            headers: {
                'Authorization': 'Basic ',
                'Content-Type': 'application/json',
                'pragma': 'no-cache',
                'cache-control': 'no-cache'
            },
            body: JSON.stringify({ "location": currentLocation, "type": storeType })
        };
        fetch(requestUrl, requestOptions).then(function (response) {
            if (response.status === 200) {
                return resolve(response.json());
            } else {
                return reject(Error("An error has occurred! Please try again."));
            }
        }, function (error) {
            return reject(error);
        });
    });
}