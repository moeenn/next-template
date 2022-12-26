export const validators = {
  email: {
    required: "Email field is required",
  },
  password: {
    required: {
      value: true,
      message: "Password is required",
    },
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long"
    }
  },
}