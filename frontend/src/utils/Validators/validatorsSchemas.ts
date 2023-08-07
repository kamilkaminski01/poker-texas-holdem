import { valid } from './validators'

export const validSchemas = {
  username: {
    pattern: valid.usernamePattern,
    minLength: valid.minLength(3),
    maxLength: valid.maxLength(10)
  },
  smallBlind: {
    pattern: valid.positiveNumberPattern,
    minValue: valid.minValue(0.01),
    maxValue: valid.maxValue(100)
  },
  bigBlind: {
    pattern: valid.positiveNumberPattern,
    minValue: valid.minValue(0.02),
    maxValue: valid.maxValue(200)
  },
  buyIn: {
    pattern: valid.positiveNumberPattern,
    minValue: valid.minValue(1),
    maxValue: valid.maxValue(1000)
  },
  seatCount: {
    pattern: valid.seatCountPattern,
    minValue: valid.minValue(4),
    maxValue: valid.maxLength(8)
  }
}
