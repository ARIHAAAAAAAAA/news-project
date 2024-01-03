import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

export const fncGetNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        throw new Error('Failed to fetch news');
    }
};

export const fncGetNewsSource = async () => {
    const url = `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        throw new Error('Failed to fetch news');
    }
};

// export default { fncGetNewsSource, fncGetNews };
