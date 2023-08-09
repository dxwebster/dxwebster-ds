import { colors } from '@dxwebster-ds/tokens'
import { getContrast } from 'polished'

function ColorsGrid() {
  const constrast = (color: string) =>
    getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'

  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '1.2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: constrast(color),
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
export { ColorsGrid }
