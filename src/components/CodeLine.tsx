export function CodeLine({ line }: { line: string }) {
  if (line === 'const candidate = {') {
    return (
      <>
        <span className="token token--pink">const</span>{' '}
        <span className="token token--blue">candidate</span>{' '}
        <span className="token token--text">= {'{'}</span>
      </>
    )
  }

  if (line.startsWith('  ') && line.endsWith(',')) {
    const [key, rest] = line.trim().split(': ')
    const value = rest.replace(',', '').replaceAll("'", '')

    return (
      <>
        {'  '}
        <span className="token token--green">{key}</span>
        <span className="token token--text">:</span>{' '}
        <span className="token token--amber">'{value}'</span>
        <span className="token token--text">,</span>
      </>
    )
  }

  if (line.startsWith('  ') && !line.endsWith(',')) {
    const [key, rest] = line.trim().split(': ')
    const value = rest.replaceAll("'", '')

    return (
      <>
        {'  '}
        <span className="token token--green">{key}</span>
        <span className="token token--text">:</span>{' '}
        <span className="token token--amber">'{value}'</span>
      </>
    )
  }

  return <span className="token token--text">{line}</span>
}
