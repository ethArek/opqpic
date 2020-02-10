export function setActiveTheme(activeTheme: string): void {
  window.localStorage.setItem('activeTheme', activeTheme);
}

export function getActiveTheme(): string {
  const activeTheme = window.localStorage.getItem('activeTheme');

  if (activeTheme) {
    return activeTheme;
  }

  return 'light';
}
