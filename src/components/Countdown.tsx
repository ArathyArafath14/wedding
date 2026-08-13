import { useEffect, useState } from 'react'
import './Countdown.css'

type Parts = { days: number; hours: number; minutes: number; seconds: number }

function getParts(target: Date): Parts {
  const diff = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date)
  const [parts, setParts] = useState<Parts>(() => getParts(target))

  useEffect(() => {
    const id = window.setInterval(() => setParts(getParts(target)), 1000)
    return () => window.clearInterval(id)
  }, [date])

  const items = [
    { label: 'Days', value: parts.days },
    { label: 'Hours', value: parts.hours },
    { label: 'Minutes', value: parts.minutes },
    { label: 'Seconds', value: parts.seconds },
  ]

  return (
    <div className="countdown" aria-label="Countdown to wedding day">
      {items.map((item) => (
        <div key={item.label} className="countdown__item">
          <strong>{String(item.value).padStart(2, '0')}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
