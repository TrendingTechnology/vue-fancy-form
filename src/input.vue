<template lang="pug">
    div(:class='{"input--error": input.error}').input
        label(:for='input.id') {{input.label}}
        input(@keyup='input.error = ""', v-if='input.type === "email"', type='email', :id='input.id', v-model='input.value', :required="input.validation.required")
        input(@keyup='input.error = ""', v-if='input.type === "password"', type='password', :id='input.id', v-model='input.value', :required="input.validation.required")
        span
        p(v-if='input.error') {{input.error}}
</template>


<script>
    export default {
        props: {
            input: {
                type: Object,
                twoWay: true,
            },
        },
    }
</script>


<style lang="sass" scoped>
    .input {
        padding-top: .5em;

        &:nth-of-type(1) {
            padding-top: 0;
        }

        label {
            cursor: pointer;

            font-size: .75em;
            color: #ccc;
        }

        input {
            cursor: pointer;

            width: 100%;

            padding-left: 0;
            padding-right: 0;
            padding-top: .5em;
            padding-bottom: .2em;

            outline: none;
            border: none;
            background: none;

            font-size: inherit;

            &:hover {
                ~ span {
                    width: 20%;
                }
            }

            &:focus {
                cursor: text;

                ~ span {
                    width: 100%;
                }
            }
        }

        span {
            display: block;

            width: 0;
            height: 2px;
            transition: width .15s;

            margin-bottom: .5em;

            background-color: #ddd;
        }

        p {
            visibility: hidden;

            height: 1em;

            margin-top: 0;
            margin-bottom: .5em;

            font-size: .75em;
            color: red;
        }
    }


    .input--error {
        input {
            color: red;

            &:hover {
                ~ span {
                    width: 100%;
                }
            }
        }

        span {
            width: 100%;

            background-color: red;
        }

        p {
            visibility: visible;
        }
    }
</style>
