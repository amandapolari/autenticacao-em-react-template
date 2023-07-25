import React from 'react';
import { FormPost, Input, TextArea } from './styled';
import useForms from '../../hooks/useForms';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export default function CriarPost() {
    // atraves do useForm fazer os inputs controlados e enviar posts
    const { form, onChange, limparCampos } = useForms({ title: '', post: '' });

    // console.log(form);

    const enviarPost = (e) => {
        e.preventDefault();
        // console.log('entrou');
        const body = {
            title: form.title,
            body: form.post,
        };
        const headers = {
            headers: { Authorization: localStorage.getItem('token') },
        };
        // body é antes de headers
        axios
            .post(`${BASE_URL}/posts`, body, headers)
            .then((resp) => {
                console.log(resp.data);
                limparCampos();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <FormPost onSubmit={enviarPost}>
            <label htmlFor="title">Título:</label>
            <Input
                id="title"
                name="title"
                type="title"
                value={form.title}
                onChange={onChange}
                placeholder="digite um título para o seu post"
            />
            <label htmlFor="post">Texto:</label>
            <TextArea
                id="post"
                name="post"
                type="post"
                value={form.post}
                onChange={onChange}
                placeholder="crie um post!"
            />
            <button>Enviar</button>
        </FormPost>
    );
}
