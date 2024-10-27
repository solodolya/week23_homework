import './TariffCard.scss';

export default function TariffCard({name, price, speed, info, color}) {
    return (
        <div className={color}>
            <div className="card-name">{name || "Не указано"}</div>
            <div className="card-price">{price || "Не указано"}</div>
            <div className="card-speed">{speed || "Не указано"}</div>
            <div className="card-info">{info || "Не указано"}</div>
        </div>
    );
}