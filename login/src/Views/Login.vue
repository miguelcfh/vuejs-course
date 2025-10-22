<template>
    <AuthForm />
</template>

<script>
import AuthForm from '../components/AuthForm.vue';

export default {
    name: 'LoginScreen',
    components: {
        AuthForm
    }
}
</script>

<style>

*{
    margin: 0px;
    padding: 0px;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('../assets/cyberpunk-background-site.jpg');
    background-size: cover;
}
</style>