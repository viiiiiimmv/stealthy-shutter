const categories = [
  { key: "birds", label: "Birds / Animals" },
  { key: "flowers", label: "Flowers" },
  { key: "sunsets", label: "Sunsets" },
  { key: "randoms", label: "Randoms" },
  { key: "mountains", label: "Mountains" },
  { key: "moon", label: "Moon" },
];

const CategoryNav = ({ active, onChange }) => (
  <nav className="flex gap-6 mb-16 flex-wrap">
    {categories.map((c) => (
      <button
        key={c.key}
        onClick={() => onChange(c.key)}
        className={`text-sm tracking-wide transition ${
          active === c.key
            ? "text-white border-b border-white"
            : "text-white/50 hover:text-white"
        }`}
      >
        {c.label}
      </button>
    ))}
  </nav>
);

export default CategoryNav;
