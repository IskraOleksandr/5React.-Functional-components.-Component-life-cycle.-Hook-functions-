import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
const App = () => { const [originalText, setOriginalText] = useState(''); const [transliteratedText, setTransliteratedText] = useState('');

    const transliterate = (text) => {
        const transliterationMap = {
            а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh',
            з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
            п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
            ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu',
            я: 'ya',
        };

        return text.split('').map(char => transliterationMap[char.toLowerCase()] || char).join('');
    };

    useEffect(() => {
        const result = transliterate(originalText);
        setTransliteratedText(result);
    }, [originalText]);

    return (
        <div className={styles.maincontainer + " " + styles.maincontainerV2}>
            <h3 className={styles.time + " "+styles.my_h3v2}>Транслитерация текста</h3>

            <label htmlFor="originalText">Оригинальный текст:</label>
            <textarea id="originalText" placeholder="Введите текст..."
                value={originalText} onChange={(e) => setOriginalText(e.target.value)}
            ></textarea>

            <label htmlFor="transliteratedText">Транслитерированный текст:</label>
            <textarea id="transliteratedText" readOnly value={transliteratedText}
            ></textarea>
        </div>
    );
};

export default App;