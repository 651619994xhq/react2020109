// 传参编码
export const encodeQuery=(query)=>{
    let queryStr = '';
    let keys = Object.keys(query);
    // a=1&b=2
    keys.forEach((item, index) => {
        queryStr = index
            ? `${queryStr}&${item}=${query[item]}`
            : `${queryStr}${item}=${query[item]}`
    })
    return queryStr
}

// 接收解码
export const decodeQuery=(queryStr)=> {
    let query= {}
    // 中文需解码
    queryStr = decodeURI(queryStr.replace('?', ''))
    let queryArr = queryStr.split('&')
    queryArr.forEach(item => {
        let keyAndValue = item.split('=')
        query[keyAndValue[0]] = keyAndValue[1]
    })
    return query
}