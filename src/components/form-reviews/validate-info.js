export default function validateInfo(values) {
    let errors = {};

    //Name
    if (!values.userName.trim()) {
        errors.userName = "Username required"
    } else if (values.userName.trim().length < 1) {
        errors.userName = "Username is too short!"
    }
    //Email
    if (!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    //Comment
    if(!values.comment) {
        errors.comment = "Comment is required"
    } else if (values.comment.length < 6) {
        errors.comment = 'Commend need to be 6 characters of more'
    }

    return errors;
}
