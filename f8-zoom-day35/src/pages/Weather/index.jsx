import { useState } from "react";

import styles from "./Weather.module.scss";

const weatherData = {
    hanoi: {
        city: "Hà Nội",
        temp: 28,
        weather: "Nắng",
        humidity: 65,
    },

    hcm: {
        city: "TP.HCM",
        temp: 32,
        weather: "Có mây",
        humidity: 78,
    },

    danang: {
        city: "Đà Nẵng",
        temp: 30,
        weather: "Mưa nhẹ",
        humidity: 82,
    },
};

function WeatherApp() {
    const [selectedCity, setSelectedCity] = useState("hanoi");
    const [weather, setWeather] = useState(weatherData[selectedCity]);

    const getWeatherIcon = (weather) => {
        if (weather === "Nắng") {
            return "☀️";
        }

        if (weather === "Có mây") {
            return "🌤️";
        }

        if (weather === "Mưa nhẹ") {
            return "🌧️";
        }
    };

    const handleCityChange = (e) => {
        const cityKey = e.target.value;

        setSelectedCity(cityKey);
        setWeather(weatherData[cityKey]);
    };

    const handleRefresh = () => {
        const randomTemp = Math.floor(Math.random() * 11) - 5;
        const randomHumidity = Math.floor(Math.random() * 11) - 5;

        setWeather({
            ...weather,
            temp: weather.temp + randomTemp,
            humidity: weather.humidity + randomHumidity,
        });
    };

    return (
        <div className={styles.container}>
            <h1>Weather App</h1>

            <select
                className={styles.citySelect}
                value={selectedCity}
                onChange={handleCityChange}
            >
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP.HCM</option>
                <option value="danang">Đà Nẵng</option>
            </select>

            <div className={styles.weatherCard}>
                <div className={styles.weatherIcon}>
                    {getWeatherIcon(weather.weather)}
                </div>

                <h2>{weather.city}</h2>

                <div className={styles.temperature}>{weather.temp}°C</div>

                <p>
                    Thời tiết: <strong>{weather.weather}</strong>
                </p>

                <p>
                    Độ ẩm: <strong>{weather.humidity}%</strong>
                </p>

                <button onClick={handleRefresh}>Làm mới</button>
            </div>
        </div>
    );
}

export default WeatherApp;
