export function InviteSeal() {
  return (
    <div className="invite-seal" aria-hidden="true">
      <div className="invite-seal__ring">
        <svg className="invite-seal__text-svg" viewBox="0 0 200 200">
          <defs>
            <path
              id="invite-circle"
              d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
            />
          </defs>
          <circle cx="100" cy="100" r="86" fill="none" stroke="#8f8378" strokeWidth="2.4" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#b5aaa0" strokeWidth="1.2" />
          <text
            fill="#5c534c"
            fontSize="11.5"
            letterSpacing="3.5"
            fontWeight="700"
            style={{ fontFamily: 'Jost, Arial, sans-serif', fontWeight: 700 }}
          >
            <textPath
              href="#invite-circle"
              xlinkHref="#invite-circle"
              startOffset="12%"
            >
              YOU ARE INVITED · YOU ARE INVITED ·
            </textPath>
          </text>
        </svg>
        <img className="invite-seal__art" src="/seal-flower-clear.png" alt="" />
      </div>
    </div>
  )
}
