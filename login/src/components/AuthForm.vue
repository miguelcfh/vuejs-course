<template>
    <div class="formulario">
        <form action="" method="post">
            <div class="dados">
                <div class="form-data">
                    <label for="email">E-mail</label>
                    <label for="senha">Senha</label>
                </div>
                <div class="form-data">
                    <input type="email" name="email_usuario" id="email">
                    <input type="password" name="senha_usuario" id="senha">
                </div>
            </div>
            <button class="send-form" type="submit">Logar</button>
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
* {
    margin: 0px;
    padding: 0px;
}

.formulario {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 400px;
    background-color: blueviolet;
    border: 2px solid black;
    border-radius: 6px;
}

.formulario form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
}

.send-form {
    background-color: hsl(125, 72%, 55%);
    border: none;
    border-radius: 6px;
    height: 30px;
    width: 60px;
}

.send-form:hover {
    background-color: hsl(125, 61%, 52%);
    transition: 0.1s ease-in;
}
</style>