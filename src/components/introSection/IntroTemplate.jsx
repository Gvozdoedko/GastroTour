import React from "react";
import { useEffect, useState } from "react";
import "./IntroTemplate.scss";

export default function IntroTemplate() {
    const [info, setInfo] = useState();

    useEffect(() => {
        fetch("./db.json")
            .then((res) => res.json())
            .then((res) => setInfo(...res));
    });
    return (
        <section className="introSection">
            <div className="introSection__textContent">
                <h1>Попробуй Италию на вкус</h1>
                {info && (
                    <p>
                        {info.numOfDay} дней. {info.numOfDay - 1} ночей. Dolce
                        Vita.
                    </p>
                )}

                <button>Хочу в тур!</button>
            </div>
            <div className="introSection__infoContent">
                <div className="introSection__infoContent_first">
                    <p>Когда?</p>
                    {info && (
                        <div className="date">
                            <p className="prime">{info.dateNum}</p>
                            <p className="forPrime">{info.dateMonth}</p>
                        </div>
                    )}
                </div>
                <div className="introSection__infoContent_second">
                    <p>Группа?</p>
                    <div className="num">
                        {info && <p className="prime">{info.group}</p>}
                        <p className="forPrime">{`человек`}</p>
                    </div>
                </div>
                <div className="introSection__infoContent_third">
                    <p>Сколько?</p>
                    <div className="price">
                    {info && <p className="prime">{`$${info.price}`}</p>}
                        <p className="forPrime">{`*Стоимость указана за 2 человек.`}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
