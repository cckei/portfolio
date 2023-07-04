import { TypeAnimation } from 'react-type-animation';

export default function Typer() {
    
    const Taglines = [
        "I design and I code.",
        1500,
        "I do website.",
        1500,
        "I do digital stuff, like UI/UX, ",
        1000,
        "content management system, ", 
        1000,
        "or AR filter etc."
    ]

    return (
        <TypeAnimation
            sequence={Taglines}
            wrapper="div"
            className="text"
            cursor={true}
            repeat={Infinity}
        />
    )
}