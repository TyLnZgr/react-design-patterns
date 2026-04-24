const PatternExplanation = () => {
  return (
    <section className="pattern-explanation">
      <h2>Provider Pattern Nedir?</h2>
      <p>
        Provider Pattern, React Context API kullanarak global state yönetimini
        sağlar. Bu pattern sayesinde component'ler arası veri paylaşımı
        kolaylaşır ve prop drilling önlenir.
      </p>
      <ul>
        <li>
          <strong>Context:</strong> Paylaşılan veriyi tutar
        </li>
        <li>
          <strong>Provider:</strong> Context'i component ağacına sağlar
        </li>
        <li>
          <strong>Consumer:</strong> Context'ten veriyi tüketir (useContext hook
          ile)
        </li>
      </ul>
    </section>
  );
};

export default PatternExplanation;
