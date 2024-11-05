import React, { useEffect, useState } from 'react';
import "styles/globals.css"

interface StaticMultilingualTextProps {
    texts: { [lang: string]: string };
    interval?: number; // Temps en millisecondes entre chaque changement de texte
}

const StaticMultilingualText: React.FC<StaticMultilingualTextProps> = ({ texts, interval = 3000 }) => {
    const languages = Object.keys(texts);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
        }, interval);

        return () => clearInterval(timer); // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    }, [languages.length, interval]);

    return (
        <div>
            <p className="bounce mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">{texts[languages[currentIndex]]}</p>
        </div>
    );
};

export default StaticMultilingualText;
