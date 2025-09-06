export const extractTeamNames = (event) => {
  if (event.label) {
    return event.label.split('/').map((s) => (s || '').trim());
  }
  const choices = Object.values(event.bet)[0].choices;
  return [
    choices[0]?.actor?.label || '',
    choices[1]?.actor?.label || ''
  ];
};
