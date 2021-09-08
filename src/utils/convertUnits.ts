const BASE_FEET = 3.048
const BASE_CM   = 30.48
const BASE_LBS  = 4.536
const BASE_kG   = 2.205

export const calculateHeight = (height: number) => {
  if(isNaN(height)) {
    return {feet: '', cm: ''}
  }

  const convertToFeet = height / BASE_FEET
  const convertToCM = convertToFeet * BASE_CM

  const feet = convertToFeet.toFixed(2).replace(".", "'")
  const cm = (convertToCM % 2) === 0 ? convertToCM.toString() : convertToCM.toFixed(2)

  return { 
    feet: feet + '"', 
    cm: `(${cm}cm)` 
  }
}

export const calculateweight = (weight: number) => {
  if(isNaN(weight)) {
    return {lsb: '', kg: ''}
  }

  const convertToLbs = weight / BASE_LBS
  const convertToKg = convertToLbs / BASE_kG

  const lbs = convertToLbs.toFixed(1)
  const kg = convertToKg.toFixed(1)

  return {
    lbs: lbs + 'lbs', 
    kg: `(${kg} Kg)`
  }
}