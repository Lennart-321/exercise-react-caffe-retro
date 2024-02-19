export default function Navbar({ entries }) {
    return (
        <nav class="navbar">
            {entries.map(e => (
                <a class="menu-link" href={e.link}>
                    {e.text}
                </a>
            ))}
        </nav>
    );
}
