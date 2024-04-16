function formSend (id) {
    const form = document.querySelector(id)
    if (form) {
        const name = form.querySelector('input[name = "name"]')
        const phone = form.querySelector('input[name = "tel"]')
    
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            validationForm(form) ? successSend() : false
    
            function ajaxSend(data) {
                fetch('/wp-content/themes/', {
                    method: 'POST',
                    body: data,
                })
    
                    .then(response => {
                        if (response.ok) return response.text();
                        else console.log(response);
                    })
    
                    .then(result => {
                        console.log(result);
                        createModal('Отправлено')
                    })
            }
    
            function successSend() {
                ajaxSend(formData)
                phone.value = '';
                name.value = '';
                let modals = document.querySelectorAll('.modal')
                modals.forEach(el => {el.classList.remove('active')})
                document.querySelector('.modal-success').classList.add('active')
            }
        })
    }
}


phoneTest = (input) => {
    return /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);
};

function validationForm(form) {
    let result = true;

    addErrorClass = (input) => {
        input.classList.add('error');
        input.parentNode.classList.add('error')
    };
    removeErrorClass = (input) => {
        input.classList.remove('error')
        input.parentNode.classList.remove('error')
    };

    form.querySelectorAll('input').forEach(input => {
        removeErrorClass(input);
        const checkbox = form.querySelector('input[type = checkbox]')

        if (checkbox.checked == false) {
            addErrorClass(checkbox)
            result = false;
        }

        if (input.name == 'tel') {
            if (phoneTest(input) == false) {               
                removeErrorClass(input);
                addErrorClass(input)
                result = false;
            }
        }

        if (input.value == '') {
            addErrorClass(input)
            result = false;
        }

    });
    return result
}

formSend('#contact-form')
formSend('#modal-form')