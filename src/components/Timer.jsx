import React, {useState, useEffect} from 'react';
import styles from './style.module.css';

function TimerApp() {
    const [inputSeconds, setInputSeconds] = useState(5);
    const [seconds, setSeconds] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        const newTime = parseInt(inputSeconds, 10);
        if (!isNaN(newTime) && newTime > 0) {
            setSeconds(newTime);
            setIsRunning(true);
        } else if (seconds > 0) {
            setIsRunning(true);
        }
    };
    const handlePause = () => {
        setIsRunning(!isRunning);
    };
    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
        setInputSeconds(0);

    };

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        if (seconds === 0) {
            setIsRunning(false);
            setTimeout(() => alert("Timer!"), 100);
        }
    }, [seconds]);

    useEffect(() => {
        let timerInterval;
        if (isRunning && seconds > 0) {
            timerInterval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning]);

    return (
        <div className={styles.maincontainer}>
            <h3 className={styles.time + " " + styles.my_h3}>Таймер</h3>
            <h3 className={styles.time}>{formatTime(seconds)}</h3>
            <div>
                <button className={String(!isRunning && styles.bt1) + " " + String(isRunning && (styles.disabled + " "+ styles.bt2))} onClick={handleStart} disabled={isRunning}>Старт</button>
                <button className={styles.bt1} onClick={handlePause} disabled={seconds === 0 || !isRunning}> {isRunning ? "Пауза" : "Возобновить"} </button>
                <button className={styles.bt1} onClick={handleReset}>Сбросить</button>
            </div>
            <div className={styles.inputcontainer}>
                <input type="number" value={inputSeconds}
                       onChange={(e) => setInputSeconds(e.target.value)}/>
            </div>

        </div>
    );
}

export default TimerApp;