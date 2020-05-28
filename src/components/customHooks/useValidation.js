// const useValidation = ({message, password, email}) => {
//     if (!email.value.length) {
//         setErrors([...errors, "Email is required."]);
//         setLoader(false);
//         return;
//     }

//     if (error.message === "The email address is badly formatted.") {
//         setErrors([...errors, "Email doesn't include @."]);
//         setLoader(false);
//         return;
//     }

//     if (!password.value.length) {
//         setErrors([...errors, "Password required"]);
//         setLoader(false);
//         return;
//     }

//     if (password.value.length < 6) {
//         setErrors([...errors, "Password length must be greater than 6"]);
//         setLoader(false);
//         return;
//     }

//     if (error.message === "The email address is already in use by another account.") {
//         setErrors([...errors, "This email address is already in use by another account."]);
//         setLoader(false);
//         return;
//     }

//     return (
//         null
//     );
// };

// export default useValidation;

import { useState } from 'react';


const useValidation = ( email, password, error ) => {

    const [loader, setLoader] = useState(false);

    if (!email.value.length && !password.value.length) {
        setErrors([...errors, "Email and password are required."]);
        setLoader(false);
        return;
    }

    if (!email.value.length) {
        setErrors([...errors, "Email is required."]);
        setLoader(false);
        return;
    }

    if (!password.value.length) {
        setErrors([...errors, "Password required"]);
        setLoader(false);
        return
    };

    if (error.message === "The email address is badly formatted.") {
        setErrors([...errors, "Email doesn't include @."]);
        setLoader(false);
        return;
    }
    if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
        setErrors([...errors, "Email is incorrect."]);
        setLoader(false);
        console.log(error)
        return;
    }

    if (error.message === "The password is invalid or the user does not have a password.") {
        setErrors([...errors, "Password is incorrect"])
        setLoader(false);
        return;
    }

    return { 
        loader
    };

};

export default useValidation;