import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ animate = "", children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorre apenas uma vez
    threshold: 0.1, // A porcentagem do elemento que precisa estar visível para ativar a animação
    initialInView: false,
  });

  return (
    <div ref={ref} className={`animate__animated ${inView ? animate : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
