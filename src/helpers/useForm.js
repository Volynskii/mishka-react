import {useState, useEffect} from 'react'

const useForm = (validate) => {

   const [values, setValues] = useState({
       userName: '',
       email: '',
       comment: ''
   });
    const [errors,setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = e => {

    const {name, value} = e.target;
setValues({
    ...values,
    [name]: value
});
    console.log(values)
};

const handleSubmit = (evt) => {
    evt.preventDefault();
  setErrors(validate(values));
setIsSubmitting(true);
};

return { handleChange, values, errors, handleSubmit }



};
export default useForm;
