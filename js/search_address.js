function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    console.log(currentURL)
    console.log(fileName)

    return baseURL
}

const API_URL = getApiURL() + 'data/prefectures.json'
console.log(API_URL)
