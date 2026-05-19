import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";

type TextRevealProps = {
  as?: ElementType;
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  lineDelay?: number;
  once?: boolean;
  wordDelay?: number;
};

export function TextReveal({
  as = "span",
  text,
  className,
  style,
  delay = 0,
  lineDelay = 130,
  once = false,
  wordDelay = 42,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.22,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return createElement(
    as,
    {
      ref,
      className: `text-reveal ${visible ? "is-visible" : ""} ${className ?? ""}`,
      style,
    },
    lines.map((line, lineIndex) => (
      <span key={`${line}-${lineIndex}`} className="text-reveal-line">
        {line.split(" ").map((word, wordIndex) => (
          <span
            key={`${word}-${lineIndex}-${wordIndex}`}
            className="text-reveal-word"
            style={
              {
                "--text-reveal-delay": `${delay + lineIndex * lineDelay + wordIndex * wordDelay}ms`,
              } as CSSProperties
            }
          >
            {word}
          </span>
        ))}
      </span>
    )),
  );
}
