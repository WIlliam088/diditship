
export function parseToJson(input){
    return JSON.parse(input)
}

export function parseAllToJson(inArray, fieldName){
    let objectConstructor = ({}).constructor;

    let parsedArray = inArray
    for (let i = 0; i < inArray.length; i++) {
        let obj = inArray[i]
        if (obj[fieldName] != null && obj[fieldName].constructor !== objectConstructor) {
            parsedArray[i][fieldName] = JSON.parse(obj[fieldName])
        }
    }
    return parsedArray
}