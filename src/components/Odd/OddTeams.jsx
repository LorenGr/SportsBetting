import { extractTeamNames } from '../../utils/teamUtils'

export default function OddTeams({ event }) {
  const [home, away] = extractTeamNames(event);

  return (
    <>
      <span className='match-header-sport'>{event.sport?.label}</span>
      <span className='match-header-divider' />
      {home}
      <span className='match-header-divider' />
      {away}
    </>
  );
}
