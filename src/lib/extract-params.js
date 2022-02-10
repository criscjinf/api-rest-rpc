class ExtractParams {
    static extractNumberParams(url) {
        let params = url.split('/')

        params = params.reduce((newArray, item) => {
            if (!newArray) newArray = []
            if (!isNaN(item)){
                newArray.push(parseInt(item))
            }
			return newArray
        })

        return params
    }
}

module.exports = ExtractParams