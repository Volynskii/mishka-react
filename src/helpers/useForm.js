import {useState} from 'react'

const useForm = (validate) => {

    const [values, setValues] = useState({
        userName: '',
        email: '',
        comment: ''
    });
    const [errors,setErrors] = useState({});

    const handleChange = e => {

        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setErrors(validate({values}));
    };

    return { handleChange, values, errors, handleSubmit }



};
export default useForm;
