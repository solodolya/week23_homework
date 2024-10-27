import data from "../../data/data.json";
import TariffCard from "../TariffCard/TariffCard.jsx";
import "./Tariff.scss";

export default function Tariff() {
    return (
        <div className="card-container">
            {data.map((item, index) => (
                <TariffCard key={index} {...item} />
            ))}
        </div>
    );
}