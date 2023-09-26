function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    return baseURL
}

const API_URL = getApiURL() + 'data/prefectures.json'
console.log(API_URL)

// 非同期処理で、都道府県API読み込み
const loadPrefectures = async () => {
    // APIに接続して、レスポンスがあるまで待つ
    const response = await fetch(API_URL)
    // レスポンス）（JSONデータ）を、オブジェクトに変換
    const prefectures = await response.json()
    console.log(prefectures)
    createPrefectures(prefectures)
}

// 都道府県プルダウン作成
const createPrefectures = (prefectures) => {
    prefectures.forEach(prefecture => {
        var option = document.createElement('option')
        option.value = prefecture.code
        option.innerHTML = prefecture.name
        document.getElementById('prefecture').appendChild(option)
    });
}

// 都道府県読み込み処理
loadPrefectures()
