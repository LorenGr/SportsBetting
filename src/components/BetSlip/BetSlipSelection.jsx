'use client'
import './BetSlipSelection.css'
import Button from '../Button/Button'
import DeleteIcon from '../Icon/DeleteIcon'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export default function BetSlipSelection({ selection, onRemove }) {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const containerRef = useRef(null)
  const [contentVisible, setContentVisible] = useState(false)
  const animateRef = useRef(null)

  const gridColumns = 10
  const gridRows = 5
  const totalSquares = gridColumns * gridRows

  const squares = useMemo(() => Array.from({ length: totalSquares }), [totalSquares])

  const animateSquares = useCallback(
    (squaresEls, fromIndex) => {
      animateRef.current.animate(squaresEls, {
        scale: [{ to: [0, 1.25] }, { to: 0 }],
        boxShadow: [{ to: '0 0 1rem 0 currentColor' }, { to: '0 0 0rem 0 currentColor' }],
        duration: 300,
        delay: animateRef.current.stagger(50, {
          grid: [gridColumns, gridRows],
          from: fromIndex,
        }),
      })
    },
    [gridColumns, gridRows],
  )

  const animateContents = useCallback(() => {
    setContentVisible(true)
    requestAnimationFrame(() => {
      const containerEl = contentRef.current
      if (!containerEl) return
      const contentItems = Array.from(containerEl.children)
      contentItems.forEach((el) => {
        el.style.opacity = '0'
        el.style.transform = 'translateX(-9px)'
      })
      animateRef.current.animate(contentItems, {
        opacity: [{ from: 0 }, { to: 1 }],
        translateX: [{ from: -8 }, { to: 0 }],
        duration: 400,
        delay: animateRef.current.stagger(120),
        easing: 'easeOutQuad',
      })
    })
  }, [])

  useEffect(() => {
    setContentVisible(false)

    const container = overlayRef.current
    if (!container) {
      setContentVisible(true)
      return
    }

    const squaresEls = container.querySelectorAll('.selection-square')
    const fromIndex = Math.floor(Math.random() * totalSquares)

    squaresEls.forEach((el) => {
      el.style.transform = 'scale(0)'
      el.style.boxShadow = '0 0 0rem 0 currentColor'
      el.style.opacity = '1'
    })

    let animation
    let cancelled = false

    const run = async () => {
      try {
        if (!animateRef.current) {
          animateRef.current = await import('animejs')
        }

        if (cancelled) return
        animateContents()
        animateSquares(squaresEls, fromIndex)
      } catch (_) {
        setContentVisible(true)
      }
    }

    run()

    return () => {
      cancelled = true
      try {
        animation && animation.cancel && animation.cancel()
      } catch (_) {}
    }
  }, [selection?.id, totalSquares, animateContents, animateSquares])

  return (
    <div className="selection-item-container" ref={containerRef}>
      <div className="selection-item">
        <div className="selection-anim-overlay" aria-hidden ref={overlayRef}>
          <div
            className="selection-grid"
            style={{
              gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
              gridTemplateRows: `repeat(${gridRows}, 1fr)`,
            }}
          >
            {squares.map((_, idx) => (
              <div key={idx} className="selection-square" />
            ))}
          </div>
        </div>

        <div
          ref={contentRef}
          className="selection-content"
          style={{ visibility: contentVisible ? 'visible' : 'hidden', display: 'contents' }}
        >
          <div className="selection-title">{selection.label}</div>
          <Button variant="none" onClick={() => onRemove(selection.id)}>
            <DeleteIcon />
          </Button>
          <div className="selection-sub">{selection.market}</div>
          <div className="selection-outcome">- {selection.outcome}</div>
          <div className="selection-price">{selection.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
