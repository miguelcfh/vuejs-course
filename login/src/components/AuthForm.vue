<template>
    <div class="formulario">
        <form action="" method="post">
            <div class="dados">
                <div class="form-data">
                    <label for="email">E-mail</label>
                    <label for="senha">Senha</label>
                </div>
                <div class="form-data">
                    <input type="email" name="email_usuario" id="email" required>
                    <input type="password" name="senha_usuario" id="senha" minlength="8" required>
                </div>
            </div>
            <div class="buttons">
                <button class="send-form" type="submit">Logar</button>
                <a class="register" href="#">Cadastrar-se</a>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AuthForm",
    props: {
    }
}
</script>

<style>

.formulario {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 400px;
    background-image: url('../assets/cyberpunk-background.jpg');
    background-size: cover;
    border: 3px solid hsl(0, 0%, 0%);
    border-radius: 10px;
}

.formulario form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    background-color: hsla(0, 0%, 100%, 0.21);
    border-radius: 10px;
}

.formulario form .dados {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100px;
    width: 300px;
}

.form-data {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    gap: 6px;
}

.form-data input{
    height: 20px;
    width: 170px;
    font-size: 12px;
    padding: 2px;
    color: hsl(0, 0%, 100%);
    background-color: hsla(0, 0%, 100%, 0.301);
    border: none;
    border-radius: 2px;
    outline: none;
}

.form-data label {
    color: hsl(0, 0%, 100%);
    text-shadow: 2px 1px rgba(0, 0, 0, 0.785);
}

.form-data input {
    color: hsl(0, 0%, 100%);
    text-shadow: 1px 1px rgba(0, 0, 0, 0.785);
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 200px;
}

.send-form {
    background-color: hsla(328, 71%, 58%, 0.89);
    border: none;
    border-radius: 6px;
    height: 30px;
    width: 60px;
}

.send-form:hover {
    background-color: hsla(310, 72%, 55%, 0.84);
    transition: 0.1s ease-in;
}

.register {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(0, 72%, 55%, 0.858);
    border: none;
    border-radius: 6px;
    height: 30px;
    width: 100px;
    text-decoration: none;
    color: hsl(0, 0%, 0%);
    font-size: 14px;
    font-weight: normal;
}

.register:hover {
    background-color: hsla(0, 58%, 50%, 0.89);;
    transition: 0.1s ease-in;
}

a::selection, label::selection {
    background-color: none;
}

</style>