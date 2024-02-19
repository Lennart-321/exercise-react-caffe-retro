export default function Section({ spec }) {
    return (
        <section id={spec.id}>
            <article>
                <h1>{spec.header}</h1>
                <p class="p-1">{spec.text1}</p>
                <p class="p-2">{spec.text2}</p>
                <div class="box">
                    {spec.table.map(row => (
                        <div class="row">
                            <span>{row.col1}</span>
                            <span>{row.col2}</span>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}
