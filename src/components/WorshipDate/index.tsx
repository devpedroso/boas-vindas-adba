import { ClockCircleOutlined } from "@ant-design/icons";

const WorshipDate = () => {
  const whorshipItem = (day, hour, title) => {
    return (
      <div className="flex flex-col gap-0 leading-6">
        {day && (
          <div className="text-[32px] title-secondary text-[var(--complement)] py-2  font-bold">
            {day}
          </div>
        )}

        <div className="title-secondary text-white  flex items-center">
          <div className="flex items-center gap-1 w-[72px]">
            <ClockCircleOutlined
              style={{ color: "var(--complement)", fontSize: 18 }}
            />
            <p className="text-[var(--complement)] text-sm">{hour}</p>
          </div>

          <div className="text-xl title-secondary text-white">{title}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 ">
        {whorshipItem("TERÇA", "19:00", "Culto de Ensino")}
        {whorshipItem("QUARTA", "19:30", "Quarta Power Adolescentes")}
        {whorshipItem("SEXTA", "23:00", "Vigília")}
      </div>
      <div className="flex flex-col gap-2">
        {whorshipItem("DOMINGO", "9:00", "Escola Bíblica Dominical")}
        {whorshipItem("", "11:45", "Ensaio Geração Life")}
        {whorshipItem("", "18:00", "Culto da Família")}
      </div>
    </div>
  );
};

export default WorshipDate;
