"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import styles from "@/styles/panda-window.module.css";

type Position = { x: number; y: number };

function WindowIcon({ action }: { action: "close" | "minimize" | "restore" | "reset" }) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {action === "close" && <path d="m6 6 12 12M6 18 18 6" />}
      {action === "minimize" && <path d="M5 12h14" />}
      {action === "restore" && <path d="M5 12h14M12 5v14" />}
      {action === "reset" && <><path d="M3 10a9 9 0 1 1 2.5 8.5" /><path d="M3 4v6h6" /></>}
    </svg>
  );
}

export function PandaWindow() {
  const [closed, setClosed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const handle = useRef<HTMLButtonElement>(null);
  const reopen = useRef<HTMLButtonElement>(null);
  const hasInteracted = useRef(false);
  const drag = useRef<{ id: number; start: Position; origin: Position } | null>(null);

  function constrain(next: Position): Position {
    if (!stage.current || !windowRef.current) return { x: 0, y: 0 };
    const x = Math.max(0, (stage.current.clientWidth - windowRef.current.offsetWidth) / 2);
    const y = Math.max(0, (stage.current.clientHeight - windowRef.current.offsetHeight) / 2);
    return { x: Math.max(-x, Math.min(x, next.x)), y: Math.max(-y, Math.min(y, next.y)) };
  }

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      // Reset after responsive layout changes so the controls remain reachable.
      setPosition({ x: 0, y: 0 });
      drag.current = null;
      setDragging(false);
    });
    if (stage.current) observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasInteracted.current) return;
    if (closed) reopen.current?.focus();
    else handle.current?.focus();
  }, [closed]);

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { id: event.pointerId, start: { x: event.clientX, y: event.clientY }, origin: position };
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    const active = drag.current;
    if (!active || active.id !== event.pointerId) return;
    setPosition(constrain({
      x: active.origin.x + event.clientX - active.start.x,
      y: active.origin.y + event.clientY - active.start.y,
    }));
  }

  function endDrag() {
    drag.current = null;
    setDragging(false);
  }

  function toggleSize() {
    setMinimized(!minimized);
    setPosition({ x: 0, y: 0 });
  }

  return (
    <div className={styles.desktop}>
      <div className={styles.stage} ref={stage}>
        {closed ? (
          <button ref={reopen} className={styles.reopen} onClick={() => {
            setPosition({ x: 0, y: 0 });
            setMinimized(false);
            setClosed(false);
          }}>
            <Image src="/PandaDrawing.png" alt="" width={64} height={64} />
            Bring panda back <span aria-hidden="true">↗</span>
          </button>
        ) : (
          <div ref={windowRef} className={`${styles.window} ${minimized ? styles.small : ""} ${dragging ? styles.dragging : ""}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
            <div className={styles.bar}>
              <div className={styles.controls}>
                <button className={styles.close} aria-label="Close panda window" title="Close panda window" onClick={() => {
                  hasInteracted.current = true;
                  setClosed(true);
                }}><WindowIcon action="close" /></button>
                <button className={styles.minimize} aria-label={minimized ? "Restore panda window" : "Minimize panda window"}
                  title={minimized ? "Restore" : "Minimize"} onClick={toggleSize}><WindowIcon action={minimized ? "restore" : "minimize"} /></button>
                <button className={styles.reset} aria-label="Reset panda window" title="Reset position and size" onClick={() => {
                  setMinimized(false);
                  setPosition({ x: 0, y: 0 });
                }}><WindowIcon action="reset" /></button>
              </div>
              <button ref={handle} className={styles.handle} aria-label="Move panda window" aria-describedby="panda-help"
                onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag}
                onPointerCancel={endDrag} onLostPointerCapture={endDrag}
                onKeyDown={(event) => {
                  const moves: Record<string, Position> = {
                    ArrowLeft: { x: -16, y: 0 }, ArrowRight: { x: 16, y: 0 },
                    ArrowUp: { x: 0, y: -16 }, ArrowDown: { x: 0, y: 16 },
                  };
                  if (moves[event.key]) {
                    event.preventDefault();
                    setPosition(constrain({ x: position.x + moves[event.key].x, y: position.y + moves[event.key].y }));
                  } else if (event.key === "Home" || event.key === "Escape") {
                    event.preventDefault();
                    setPosition({ x: 0, y: 0 });
                  }
                }}>
                panda.exe <span aria-hidden="true">⠿</span>
              </button>
            </div>
            {!minimized && <>
              <div className={styles.body}>
                <span className={styles.path}>~/a-small-corner-of-the-internet</span>
                <Image src="/PandaDrawing.png" alt="PandaByte, Huntington's hand-drawn panda mascot" fill priority
                  draggable={false} sizes="(min-width: 900px) 380px, (min-width: 480px) 400px, 85vw" className={styles.panda} />
              </div>
              <div className={styles.foot}><span><i /> happy to be here</span><span>est. pandabyte</span></div>
            </>}
          </div>
        )}
      </div>
      <p className={styles.help} id="panda-help">Drag the title bar. Try the buttons. Make yourself at home.<span>Keyboard: focus the title bar, use arrow keys to move; Home to reset.</span></p>
    </div>
  );
}
