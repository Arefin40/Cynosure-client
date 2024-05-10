/**
 * Email validation schema.
 */
export const getEmailValidationSchema = ({ required = false } = {}) => {
   return {
      required: required ? "Email is required" : false,
      validate: (value) => {
         const pattern = /^[\w.-]+@[a-zA-Z\d-]+(\.[a-zA-Z]{2,})+$/;
         return pattern.test(value) ? true : "Enter a valid email";
      },
   };
};

/**
 * Password validation schema.
 *
 * Passwords must contain (at least):
 * - 6 characters.
 * - one uppercase letter.
 * - one lowercase letter.
 */
export const getPasswordValidationSchema = ({ required = false } = {}) => {
   return {
      required: required ? "Password is required" : false,
      validate: (value) => {
         if (value.length < 6)
            return "Password must be at least 6 characters long";
         if (!/[A-Z]/.test(value))
            return "Password must contain at least one uppercase letter";
         if (!/[a-z]/.test(value))
            return "Password must contain at least one lowercase letter";
         return true;
      },
   };
};

/**
 * Password validation schema.
 *
 * Passwords must contain (at least):
 * - 6 characters.
 * - one uppercase letter.
 * - one lowercase letter.
 */
export const getPasswordPatternSchema = ({ required = false } = {}) => {
   return {
      required: required ? "Password is required" : false,
      validate: (value) => {
         const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         return pattern.test(value)
            ? true
            : "Password must fulfill the requirements";
      },
   };
};
