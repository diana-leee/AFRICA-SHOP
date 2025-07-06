
const Stats = () => {
  const statistics = [
    {
      number: "1,000+",
      label: "Artisans Partenaires",
      description: "à travers l'Afrique"
    },
    {
      number: "10,000+",
      label: "Produits Authentiques",
      description: "créés avec passion"
    },
    {
      number: "50+",
      label: "Pays Représentés",
      description: "diversité culturelle"
    },
    {
      number: "50,000+",
      label: "Clients Satisfaits",
      description: "dans le monde entier"
    }
  ];

  return (
    <section className="py-16 african-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AfricaShop en Chiffres
          </h2>
          <p className="text-white/90 text-lg">
            Notre impact sur l'artisanat africain
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 gold-shimmer bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-white/80 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
