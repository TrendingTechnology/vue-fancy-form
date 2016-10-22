<template lang="pug">
    form(@submit.prevent='submitHandler', :class='{"form--processing": state === "processing", "form--failure": state === "failure", "form--success": state === "success"}').form
        input-component(v-for='input in options.inputs', :input.sync='input')

        .form__controls
            button(@click.prevent='cancelHandler').form__control.form__control--cancel {{options.controls.cancel.text}}
            button(:disabled="state === 'processing' || state === 'failure' || state === 'success'").form__control.form__control--submit: span {{options.controls.submit.text}}

        div(v-if='failureMessage').form__failure-message
            p {{failureMessage}}
</template>

<script>
    import inputComponent from './input.vue';

    export default {
        props: {
            options: {
                type: Object,
                twoWay: true,
            },
        },
        data: function() {
            return {
                state: 'default',
                failureMessage: '',
            };
        },
        methods: {
            submitHandler: function() {
                let error = false;
                this.state = 'processing';
                this.failureMessage = '';

                for (let i = 0; i < this.options.inputs.length; i++) {
                    this.$delete(this.options.inputs[i], 'error');
                    this.$set(this.options.inputs[i], 'error', '');
                }

                for (const input of this.options.inputs) {
                    // Checks if the value is not empty
                    if (input.validation.required) {
                        if (!input.value || input.value === '') {
                            error = true;
                            input.error = 'field is required';
                        };
                    }

                     // Checks if the value is the same as the value of the referenced input field
                    if (input.validation.sameAs) {
                        const referencedInputField = this.options.inputs.find(element => element.id === input.validation.sameAs);
                        if (input.value !== referencedInputField.value) {
                            error = true;
                            input.error = 'password does not match';
                        }
                    }
                }

                if (error) {
                    this.state = 'default';
                    return;
                }

                this.options.submit(this, failureMessage => {
                    if (failureMessage) {
                        this.state = 'failure';
                        this.failureMessage = failureMessage;
                    } else {
                        this.state = 'success';
                    }

                    setTimeout(() => {
                        this.state = 'default';
                    }, 3000);
                });
            },
            cancelHandler: function() {
                this.options.cancel(this, () => {});
            },
        },
        components: {
            inputComponent,
        },
    }
</script>

<style lang="sass" scoped>
    .form {
        width: 18em;
        max-width: 100%;

        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 1.5em;
        padding-bottom: .5em;

        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background-color: #fff;

        font-family: sans-serif;
        font-size: 16px;
    }


    .form--processing,
    .form--failure,
    .form--success {
        .form__control--submit {
            span {
                opacity: 0;
            }
        }
    }


    @keyframes spinning {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 0);
        }

        100% {
            transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 360deg);
        }
    }

    .form--processing {
        .form__control--submit {
            &::after {
                content: ' ';
                display: block;

                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate3d(-50%, -50%, 0);

                width: .75rem;
                height: .75rem;

                border-radius: 50%;
                border-style: solid;
                border-width: 2px;
                border-color: #777;
                border-left-color: transparent;

                animation-name: spinning;
                animation-duration: 1s;
                animation-iteration-count: infinite;

                transition: opacity .3s;
            }
        }
    }


    .form--failure {
        .form__control--submit {
            &::before,
            &::after {
                content: ' ';
                display: block;

                position: absolute;
                left: 50%;
                top: 50%;

                width: .8rem;
                height: 2px;

                background-color: red;

                transition: opacity .3s;
            }

            &::before {
                transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 45deg);
            }

            &::after {
                transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg);
            }
        }
    }


    .form--success {
        .form__control--submit {
            &::before,
            &::after {
                content: ' ';
                display: block;

                position: absolute;
                left: 50%;
                top: 50%;

                height: 2px;

                background-color: green;
            }

            &::before {
                width: .3rem;
                transform: translate3d(-150%, 5%, 0) rotate3d(0, 0, 1, 45deg);
            }

            &::after {
                width: .8rem;
                transform: translate3d(-30%, -50%, 0) rotate3d(0, 0, 1, -45deg);
            }
        }
    }


    .form__controls {
        text-align: right;
    }


    .form__control {
        cursor: pointer;

        padding: 1em;

        outline: none;
        border: none;
        background: none;

        font-size: 1em;
    }


    .form__control--cancel {
        border: none;

        font-size: .75em;
        color: #ccc;
    }


    .form__control--submit {
        position: relative;

        &:hover {
            span {
                &::after {
                    width: 50%;
                }
            }
        }

        span {
            opacity: 1;

            position: relative;

            transition: opacity .1s;

            &::after {
                content: ' ';
                display: block;

                width: 0;
                height: 2px;

                position: absolute;
                left: 0;
                bottom: -.3em;

                background-color: #ccc;

                transition: width .15s;
            }
        }
    }


    .form__failure-message {
        margin-left: -1em;
        margin-right: -1em;
        margin-bottom: -.5em;
        padding: 1em;

        background-color: red;

        color: #fff;

        p {
            margin-top: 0;
            margin-bottom: 0;

            font-size: .75em;
        }
    }
</style>
