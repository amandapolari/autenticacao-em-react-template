import React, { useEffect } from 'react';
import CardPost from '../../components/CardPost/CardPost';
import CriarPost from '../../components/CriarPost/CriarPost';
import useRequestData from '../../hooks/useRequestData';
import { FeedContainer } from './styled';
import { irParaLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export default function Feed() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        if (!token) {
            irParaLogin(navigate);
        }
    }, []);

    const tokenLogado = localStorage.getItem('token');

    const config = {
        headers: {
            Authorization: tokenLogado,
        },
    };

    const [posts] = useRequestData([], '/posts', config);

    return (
        <FeedContainer>
            <h1>Feed</h1>
            <section>
                <h3>Novo post</h3>
                <CriarPost />
            </section>
            {posts.map((post) => {
                return <CardPost key={post.id} post={post} />;
            })}
        </FeedContainer>
    );
}
