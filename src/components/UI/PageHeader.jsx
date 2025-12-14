const PageHeader = ({ title, subtitle }) => (
    <header className="mb-16">
        <h1 className="text-4xl font-serif text-white">{title}</h1>
        <p className="text-white/60 italic mt-2">{subtitle}</p>
    </header>
);

export default PageHeader;