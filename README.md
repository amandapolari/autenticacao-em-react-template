# Template prática guiada Autenticação no React:

Documentação Postman https://documenter.getpostman.com/view/24422099/2s93Xu1QR9

**Durante a prática guiada de hoje usaremos o mesmo template da aula de React e formulários.
**

Abra o exercício de ontem e rode `npm run start` na pasta raíz do template.

Caso você não tenha feito ou tenha problemas não corrigidos no template anterior, poderá usar o templte deste repositório, baixando e rodando `npm install` na pasta correspondente. Se preferir, pode fazer o exercício no CodeSandBox pelo link: https://codesandbox.io/s/template-autenticacao-em-react-d9e771

---

1. Prática 1

-   Em `Signup.js` , na função `enviarCadastro`:

    ```
        const enviarCadastro = (e) => {
            e.preventDefault();
            //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
            // não é necessário caso use o pattern para a mesma funcionalidade
            if (form.senha === form.confirmaSenha) {
                const dadosUsuario = {
                    username: form.nomeUsuario,
                    email: form.email,
                    password: form.senha,
                };
                console.log(dadosUsuario);
                axios
                    .post(`${BASE_URL}/users/signup`, dadosUsuario)
                    .then((resp) => {
                        console.log(resp.data.token);
                        localStorage.setItem('token', resp.data.token);
                        irParaFeed(navigate);
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        alert(error.response.data);
                    });
            } else {
                alert(
                    "Digite a mesma senha nos campos 'senha' e 'confirmação de senha'"
                );
            }
        };
    ```

-   Importar o useNavigate()

    ```
        const navigate = useNavigate();
    ```

2. Prática 2

-   Em `enviaLogin` de `Login.js`:

    ```
        const enviaLogin = (e) => {
            e.preventDefault();
            console.log(form);

            const body = {
                email: form.email,
                password: form.password,
            };

            axios
                .post(`${BASE_URL}/users/login`, body)
                .then((resp) => {
                    console.log(resp.data.token);
                    localStorage.setItem('token', resp.data.token);
                    irParaFeed(navigate);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    ```
