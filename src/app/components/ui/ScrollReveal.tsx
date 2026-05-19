import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  cascade?: boolean;
  once?: boolean;
  stagger?: number;
  variant?: "up" | "left" | "right" | "scale";
};

export function ScrollReveal({
  children,
  className,
  cascade = false,
  delay = 0,
  distance = 56,
  once = false,
  stagger = 92,
  variant = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const axis = {
    up: { x: 0, y: distance, scale: 1 },
    left: { x: -distance, y: 20, scale: 1 },
    right: { x: distance, y: 20, scale: 1 },
    scale: { x: 0, y: distance * 0.45, scale: 0.96 },
  }[variant];

  const style = {
    "--reveal-x": `${axis.x}px`,
    "--reveal-y": `${axis.y}px`,
    "--reveal-scale": axis.scale,
    "--reveal-stagger": `${stagger}ms`,
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(${axis.x}px, ${axis.y}px, 0) scale(${axis.scale})`,
    transitionDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${cascade ? "scroll-reveal--cascade" : ""} ${
        visible ? "is-visible" : ""
      } ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
