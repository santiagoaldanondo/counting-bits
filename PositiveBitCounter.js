function Count(input) {
  if (!Number.isInteger(input)) // Extra validation to check if input is an integer
  { 
    throw new Error('input is not an integer') 
  } 
  else if (input < 0) 
  {
    throw new RangeError('input is negative')
  } 
  else 
  {
    let count = 0
    let result = []
    let binArray = input.toString(2).split("").reverse() // Convert to binary, array and reverse
    for (bit in binArray) {
      let bitValue = parseInt(binArray[bit])
      count += bitValue
      if (bitValue === 1) {
        result.push(parseInt(bit)) // push significant bits to result
      }
    }
    result.unshift(count) // count should be index[0] of the result
    return result      
  }
}

module.exports = { Count }
