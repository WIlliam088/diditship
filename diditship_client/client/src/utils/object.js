import moment from "moment";

export function removeEmptyFields(fields) {
  for (let field in fields) {
    if (fields[field] == '' || fields[field] == null || field == 'serial_numbers') {
      delete fields[field]
    }
    else if(field == 'date'){
      const date = fields[field]
      fields[field] = moment.utc(date).format("YYYY-MM-DD")
    }
  }
  return fields
}

export function setValueByType(value, dataType){
  if(dataType === 'integer'){
    return parseInt(value)
  }
  else{
    return value
  }

}
