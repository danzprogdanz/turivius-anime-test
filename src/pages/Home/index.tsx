import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header/index.tsx";
import TrendingSection from "./TrendingSection/index.tsx";
import { useAnimesTrending } from "../../hooks/api/useTrending.ts";

const Home: React.FC = () => {

    const { data: trendings } = useAnimesTrending();
    const [animeId, setAnimeId] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (animeId) {
            navigate(`animes/${animeId}`);
        }
    }, [animeId, navigate]);

    return (
        <>
            <Header title="Home"/>
            <TrendingSection trendings={trendings} onFetchAnime={setAnimeId} onSeeMore={() => navigate(`animes`)}/>
        </>
    );
};

export default Home;