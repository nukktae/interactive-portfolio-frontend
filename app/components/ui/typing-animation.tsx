"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TypingAnimationProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: string;
  words?: string[];
  duration?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
  as?: React.ElementType;
  startOnView?: boolean;
  showCursor?: boolean;
  blinkCursor?: boolean;
  cursorStyle?: "line" | "block" | "underscore";
}

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLElement | null>(null);

  const wordsToAnimate = useMemo(
    () => words ?? (children ? [children] : []),
    [words, children]
  );
  const hasMultipleWords = wordsToAnimate.length > 1;

  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;

  useEffect(() => {
    if (startOnView && elementRef.current) {
      const el = elementRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setHasStarted(true);
        },
        { threshold: 0.3, rootMargin: "0px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted || wordsToAnimate.length === 0) return;

    const currentWord = wordsToAnimate[currentWordIndex] ?? "";
    const graphemes = Array.from(currentWord);

    const timeoutDelay =
      delay > 0 && displayedText === ""
        ? delay
        : phase === "typing"
          ? typingSpeed
          : phase === "deleting"
            ? deletingSpeed
            : pauseDelay;

    const timeout = setTimeout(() => {
      switch (phase) {
        case "typing":
          if (currentCharIndex < graphemes.length) {
            setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""));
            setCurrentCharIndex(currentCharIndex + 1);
          } else {
            if (hasMultipleWords || loop) {
              const isLastWord =
                currentWordIndex === wordsToAnimate.length - 1;
              if (!isLastWord || loop) setPhase("pause");
            }
          }
          break;
        case "pause":
          setPhase("deleting");
          break;
        case "deleting":
          if (currentCharIndex > 0) {
            setDisplayedText(graphemes.slice(0, currentCharIndex - 1).join(""));
            setCurrentCharIndex(currentCharIndex - 1);
          } else {
            setCurrentWordIndex(
              (currentWordIndex + 1) % wordsToAnimate.length
            );
            setPhase("typing");
          }
          break;
      }
    }, timeoutDelay);

    return () => clearTimeout(timeout);
  }, [
    hasStarted,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    hasMultipleWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
  ]);

  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] ?? ""
  );
  const isComplete =
    !loop &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== "deleting";

  const shouldShowCursor =
    showCursor &&
    !isComplete &&
    (hasMultipleWords ||
      loop ||
      currentCharIndex < currentWordGraphemes.length);

  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "▌";
      case "underscore":
        return "_";
      case "line":
      default:
        return "|";
    }
  };

  return (
    <Component
      ref={elementRef as React.RefObject<HTMLElement>}
      className={cn("inline", className)}
      {...props}
    >
      {displayedText}
      {shouldShowCursor && (
        <span
          className="inline-block ml-0.5"
          style={
            blinkCursor
              ? { animation: "blink-cursor 0.8s step-end infinite" }
              : undefined
          }
        >
          {getCursorChar()}
        </span>
      )}
    </Component>
  );
}
