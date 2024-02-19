import Navbar from "./Navbar";
import Section from "./Section";

export function App() {
    let sectionSpecs = [
        {
            id: "hot",
            header: "Hot",
            text1: "Hot freshly ground black coffee of a cup of exquisite tea?",
            text2: "We give you that perfect cup every time.",
            table: [
                { col1: "Mocha Latte", col2: "€ 7.50" },
                { col1: "Caffe Formaggio", col2: "€ 5.00" },
                { col1: "Espresso", col2: "€ 3.50" },
                { col1: "Chai Verde Latte", col2: "€ 5.50" },
            ],
        },
        {
            id: "juicy",
            header: "Juicy",
            text1: "Ripe fruit - freshly squeezed.",
            text2: "It's as simple as that. Chunky or smooth - it's your choice.",
            table: [
                { col1: "Branched Apricots", col2: "€ 4.20" },
                { col1: "Deep Rasberries", col2: "€ 3.50" },
                { col1: "Smooth Oranges", col2: "€ 6.50" },
            ],
        },
        {
            id: "cosy",
            header: "Cosy",
            text1: "Hang around. Enjoy the settings.",
            text2: "Use our fast WiFi. Borrow a newspaper or a novel.",
            table: [
                { col1: "Mon-Sun", col2: "8am - 11pm" },
                { col1: "Caffe Retro", col2: "Canto VI" },
                { col1: "0123-45 67 89", col2: "caffe@lorem.pge" },
            ],
        },
    ];

    const navbarEntries = sectionSpecs.map(s => {
        return { link: `#${s.id}`, text: `${s.header}` };
    });

    return (
        <>
            <Navbar entries={navbarEntries} />
            {sectionSpecs.map(sec => (
                <Section spec={sec} />
            ))}
        </>
    );
}
