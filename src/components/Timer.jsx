import React, {useState, useEffect} from 'react';

function TimerApp() {
    const [inputSeconds, setInputSeconds] = useState(5);
    const [seconds, setSeconds] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const handleInputChange = (e) => {
        setInputSeconds(parseInt(e.target.value));
    };
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
    const stopTimer = () => {
        setIsRunning(false);
        setInputSeconds('');
        setSeconds(Number(seconds) || 5);
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
        <div class="maincontainer">
            <h3 class="time my_h3">Таймер</h3>
            <h3 class="time">{formatTime(seconds)}</h3>
            <div>
                <button class="bt1" onClick={handleStart} disabled={isRunning}>Старт</button>
                <button class="bt1" onClick={handlePause} disabled={seconds === 0}> {isRunning ? "Пауза" : "Возобновить"} </button>
                <button class="bt1" onClick={stopTimer} disabled={isRunning}>Сбросить</button>
            </div>
            <div class="inputcontainer">
                <input type="number" value={inputSeconds}
                       onChange={(e) => setInputSeconds(e.target.value)}/>
            </div>

        </div>
    );
}

export default TimerApp;