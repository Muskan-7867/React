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
        <section className="my-20">
            <h2 className="text-gray-700 font-semibold text-xl px-5 py-3 w-full  mx-auto lg:w-[78vw]">Trending Now</h2>
           <Slider data={trendingAlbums} />
           <h2 className="text-gray-700 font-semibold text-xl px-5 py-3 w-full
             mx-auto lg:w-[78vw]">Top Albums</h2>
             < Slider data={albums} />
       </section>
    );
};
