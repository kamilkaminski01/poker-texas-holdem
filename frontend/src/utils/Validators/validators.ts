export const valid = {
  required: {
    value: true,
    message: 'This field is required'
  },
  usernamePattern: {
    value: /^[a-zA-Z0-9]{3,12}$/,
    message: 'Username must be between 3 and 12 characters and can only contain letters and numbers'
  },
  positiveNumberPattern: {
    value: /^[+]?\d+(\.\d+)?$/,
    message: 'Please enter a valid positive number or decimal'
  },
  seatCountPattern: {
    value: /^[4-8]$/,
    message: 'The seats amount must be from 4 to 8'
  },
  minValue: (min: number) => {
    return {
      value: min,
      message: `Value must be greater than or equal to ${min}`
    }
  },
  maxValue: (max: number) => {
    return {
      value: max,
      message: `Value must be less than or equal to ${max}`
    }
  },
  minLength: (length: number) => {
    return {
      value: length,
      message: `Minimal length of this field is ${length}`
    }
  },
  maxLength: (length: number) => {
    return {
      value: length,
      message: `Maximum length of this field is ${length}`
    }
  }
}
