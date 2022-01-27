import react from "react";


export default function Hero() {
    return (
        <section className="hero">
            <img src={`./images/Group.png`} alt="Foto principal" className="hero--img"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--parraf">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </section>
    )
}