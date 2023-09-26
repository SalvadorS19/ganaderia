import './icon.css';

export default function Icon({name, size = "md"}: {name: string, size?: string}) {

    const sizes = {
        md: "16px",
        lg: "18px"
    }

    return (
        <i className={`icon-${size} uil uil-${name}`}></i>
    );
}