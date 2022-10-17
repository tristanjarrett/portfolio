const YEAR = new Date().getFullYear()

export default {
  footer: (
    <div style={{ marginTop: '8rem' }}>
      <time>{YEAR}</time> © Tristan Jarrett
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </div>
  ),
  darkMode: true
}
