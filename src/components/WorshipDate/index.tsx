import AnimatedSection from "../AnimatedSection";

const WorshipDate = () => {
  const whorshipItem = (day, hour, title) => {
    return (
      <AnimatedSection animate="animate__zoomIn animate__delay-0s">
        <div className="flex flex-col items-center leading-6">
          {day && (
            <div className="text-[24px] title-secondary text-white py-2 font-bold">
              {day}
            </div>
          )}

          <div className="title-secondary text-white flex items-center">
            <p className="text-[var(--complement)] text-sm w-[42px]">{hour}</p>
            <div className="text-base title-secondary text-white">{title}</div>
          </div>
        </div>
      </AnimatedSection>
    );
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <AnimatedSection animate="text-center animate__zoomIn animate__delay-0s">
        <span className="text-3xl">Programação</span>
      </AnimatedSection>

      {whorshipItem("TERÇA", "19:00", "Culto de Ensino")}

      <div className="flex flex-col gap-2">
        {whorshipItem("QUARTA", "08:00", "Consagração Preciosas (Mulheres)")}
        {whorshipItem("", "19:30", "Ensaio Preciosas (Mulheres)")}
        {whorshipItem("", "19:30", "Quarta Power Adolescentes")}
      </div>

      {whorshipItem("SEXTA", "23:00", "Vigília")}

      <div className="flex flex-col gap-2">
        {whorshipItem("DOMINGO", "9:00", "Escola Bíblica Dominical")}
        {whorshipItem("", "11:45", "Ensaio Geração Life")}
        {whorshipItem("", "18:00", "Culto da Família")}
      </div>
    </div>
  );
};

export default WorshipDate;
