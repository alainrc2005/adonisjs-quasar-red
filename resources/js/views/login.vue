<template>
    <q-page class="full-width row justify-center items-center content-center">
        <div id="background"/>
        <q-card class="col-lg-3 col-md-4 col-sm-10 col-xs-10">
            <q-card-section class="bg-primary text-white text-center" style="opacity: .9">
                <div class="text-h6 text-center">UEB Datos - RED</div>
                <q-avatar size="100px" class="shadow-14">
                    <img :src="urlAvatar" alt="GeoCap"/>
                </q-avatar>
            </q-card-section>
            <q-separator/>
            <q-card-section>
                <q-input dense label="Correo Electrónico" v-model="credentials.email"
                         :error="$v.credentials.email.$invalid"/>
                <q-input dense label="Contraseña" v-model="credentials.password" :type="isPwd ? 'password' : 'text'"
                         :error="$v.credentials.password.$invalid">
                    <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                @click="isPwd = !isPwd"/>
                    </template>
                </q-input>
            </q-card-section>
            <q-card-section align="center">
                <q-btn @click="forgotPassword" flat color="accent" icon="mdi-form-textbox-password"
                       :disable="$v.credentials.email.$invalid">
                    <q-tooltip content-class="bg-yellow-12 text-black shadow-4">
                        ¿Olvidó su contraseña?
                    </q-tooltip>
                </q-btn>
                <q-btn :disable="$v.$invalid" flat color="primary" @click="checkUser">Entrar</q-btn>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
    import {email, minLength, required} from 'vuelidate/lib/validators'
    import {mapActions, mapMutations} from 'vuex'
    import {Error, Success} from '../helpers'

    export default {
        name: "login",
        data() {
            return {
                credentials: {
                    email: null,
                    password: null,
                },
                isPwd: true
            }
        },
        validations: {
            credentials: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(5)
                }
            }
        },
        computed: {
            urlAvatar() {
                return this.$v.credentials.email.$invalid ? '/user/photo/0' : '/user/photo/email/' + this.credentials.email+'?'+this.$ld.now();
            }
        },
        methods: {
            ...mapActions('main', ['Login']),
            ...mapMutations('main', ['setMain']),
            showError(code) {
                switch (code) {
                    case -1:
                    case -3:
                        return Error.call(this, "Usuario o Contraseña incorrectas");
                    case -2:
                        return Error.call(this, "Usuario no activo en el sistema");
                    case -4:
                        return Error.call(this, "Ha ocurrido un error de validación de datos");
                    default:
                        return Error.call(this, "Ha ocurrido un error de acceso");
                }
            },
            async checkUser() {                
                    let d = await this.Login({...this.credentials});
                    if (d.code !== "Ok") return this.showError(d.code);
                    this.setMain({...d.row, logged: true, drawer: true});
                    await this.$router.push("/");
            },
            forgotPassword() {
                this.$axios.post('/user/forgotPassword', {email: this.credentials.email}).then(r => {
                    if (r.data.code !== 'Ok') return this.showError(r.data.code);
                    Success.call(this, 'El sistema ha enviado una nueva contraseña al correo electrónico');
                }).catch(e => {
                    console.log(e);
                    this.showError(-5);
                });
            }
        },
    }
</script>

<style scoped>
    #background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(../assets/network.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        opacity: .8;
    }
</style>