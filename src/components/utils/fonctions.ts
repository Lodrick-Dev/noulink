//valeu date , label : créé/Actualisé
export const formatRelativeDate = (value: string, label: string) => {
  const date = new Date(value);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (inputDate.getTime() === today.getTime()) {
    return `${label} aujourd'hui`;
  } else if (inputDate.getTime() === yesterday.getTime()) {
    return `${label} hier`;
  } else {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${label} le ${day}/${month}/${year}`;
  }
};

//last actualisation
export const getLastUpdateMessage = (value: string) => {
  const date = new Date(value);
  const now = new Date();

  // Réinitialiser à minuit
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const diffInMs = today.getTime() - inputDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return "Dernière actualisation aujourd'hui";
  } else if (diffInDays === 1) {
    return "Dernière actualisation hier";
  } else {
    return `Dernière actualisation il y a ${diffInDays} jours`;
  }
};

//premiere lettre en majuscule
export const capitalizeFirstLetter = (str: string | undefined): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
