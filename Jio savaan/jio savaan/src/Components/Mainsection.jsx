import { useEffect, useMemo, useState } from "react";
import axios from 'axios';

import Slider from "./Slider";

export const Mainsection = () => {
    const [albums, setAlbums] = useState([]);
    const [trending, setTrending] = useState([]);

    const getHomePageData = async () => {
        try {
            const res = await axios.get("https://saavn.dev/modules?language=hindi");
            const { data } = res.data;
            setAlbums(data.albums);
            setTrending(data.trending);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getHomePageData();
    }, []);

    const trendingAlbums = useMemo(() => (Array.isArray(trending.albums) ? trending.albums : [])
     ,[trending.albums]
    );

    return (
       <Slider data={trendingAlbums} />
    );
};
