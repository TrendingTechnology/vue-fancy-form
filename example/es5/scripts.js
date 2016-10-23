new Vue({
    el: '#app',
    components: {
        'VueFancyForm': window['vue-fancy-form'].VueFancyForm,
    },
    data: {
        loginForm: {
            submit: function(vm, done) {
                // Example for custom submit handling
                // Simulating ajax requests/custom submit processing
                setTimeout(function() {
                    if (Math.random() < .5) {
                        done('Custom failure message');
                    } else {
                        done();
                    }
                }, Math.random() * (2000 - 500) + 500);
            },
            cancel: function(vm, done) {
                // Example for custom cancel handling
                for (var i = 0; i < vm.options.inputs.length; i++) {
                    vm.options.inputs[i].value = ''
                    vm.$delete(vm.options.inputs[i], 'error');
                };
            },
            inputs: [
                {
                    type: 'email',
                    id: 'email',
                    label: 'e-mail address',
                    value: 'jon.doe@example.com',
                    validation: {
                        required: true,
                    },
                },
                {
                    type: 'password',
                    id: 'password',
                    label: 'password',
                    value: 'secretpassword',
                    validation: {
                        required: true,
                    },
                },
                {
                    type: 'password',
                    id: 'repeat_password',
                    label: 'repeat password',
                    value: 'secretpassword',
                    validation: {
                        required: true,
                        sameAs: 'password',
                    },
                },
            ],
            controls: {
                submit: {
                    text: 'submit',
                },
                cancel: {
                    text: 'reset',
                },
            },
        },
    },
});
