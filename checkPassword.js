/**
 * Checks if a password meets the specified criteria.
 * @param {string} password - The password to be checked.
 * @throws {Error} If the password does not meet the criteria.
 */
export function checkPassword(password) {
  if(password.length < 8)
  {
   throw new Error('Password must be at least 8 characters long');
  }
  
  if(typeof password != 'string')
  {
    throw new Error('Password must be a  string');
  }

  if(!password.match(/[0-9]/))
  {
    throw new Error('Password must contain at least one number');
  }

  if(!password.match(/[A-Z]/))
  {
    throw new Error('Password must contain at least one uppercase letter');
  }

  if(!password.match(/[a-z]/))
  {
    throw new Error('Password must contain at least one lowercase letter');
  }

  if(!password.match(/[^A-Za-z0-9]/))
  {
    throw new Error('Password must contain at least one special character');
  }
}


/**
 * Checks if a password meets the specified criteria.
 * 
 * @param {string} password - The password to be checked.
 * @throws {Error} If the password is less than 8 characters long, not a string,
 *                 does not contain at least one number, one uppercase letter,
 *                 one lowercase letter, or one special character.
 */
export function checkPassword2(password) {
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }

    if (typeof password !== 'string') {
        throw new Error('Password must be a string');
    }

    let hasNumber = false;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (!hasNumber && char >= '0' && char <= '9') {
            hasNumber = true;
        }

        if (!hasUppercase && char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }

        if (!hasLowercase && char >= 'a' && char <= 'z') {
            hasLowercase = true;
        }

        if (!hasSpecialChar && !isAlphaNumeric(char)) {
            hasSpecialChar = true;
        }

        if (hasNumber && hasUppercase && hasLowercase && hasSpecialChar) {
            break;
        }
    }

    if (!hasNumber) {
        throw new Error('Password must contain at least one number');
    }

    if (!hasUppercase) {
        throw new Error('Password must contain at least one uppercase letter');
    }

    if (!hasLowercase) {
        throw new Error('Password must contain at least one lowercase letter');
    }

    if (!hasSpecialChar) {
        throw new Error('Password must contain at least one special character');
    }
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9    
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122) // a-z
    );
}


  