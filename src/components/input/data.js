const inputsState = {
    userName: {
        label: {
            className: "label-name",
            value: "Имя:"
        },
        input: {
            type: "text",
            required: true,
            id: "name",
            placeHolder: "Введите ваше имя*",
            onChange:
            // (evt) => {
            //     if (evt.target.value.includes('@') && evt.target.value.length < minLength) {
            //         setName(evt.target.value);
            //        evt.target.className = validInput
            //     } else
            //         evt.target.className = inValidInput
            // }
                console.log('123')
        }
    },
    userEmail: {
        label: {
            className: "label-name",
            value: "Имя:"
        },
        input: {
            type: "text",
            id: "name",
            placeHolder: "Введите ваше имя*",
            onChange:
                (evt) => {
                    if (evt.target.value.includes('@') && evt.target.value.length < minLength) {
                        setName(evt.target.value);
                        console.log(evt.target.className = validInput)
                    } else
                        console.log(evt.target.className = inValidInput)
                }
        }
    },

};
