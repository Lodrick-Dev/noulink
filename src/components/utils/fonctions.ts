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

//last actualisation (gernière activité ou dernière actualisation)
export const getLastUpdateMessage = (value: string | undefined) => {
  if (value) {
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
      return "Activité aujourd'hui";
    } else if (diffInDays === 1) {
      return "Activité hier";
    } else {
      return `Activité il y a ${diffInDays} jours`;
    }
  }
};

//premiere lettre en majuscule
export const capitalizeFirstLetter = (str: string | undefined): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

//controlle image mime extension
export const isValidImageFile = (file: File): boolean => {
  if (!file) return false;

  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  const allowedExtensions = [".jpeg", ".jpg", ".png"];

  const isMimeOk = allowedMimeTypes.includes(file.type.toLowerCase());

  const originalName = file.name.toLowerCase();
  const hasValidExtension = allowedExtensions.some((ext) =>
    originalName.endsWith(ext)
  );

  return isMimeOk && hasValidExtension;
};

//controlle taille image
export const isFileSizeValid = (file: File, maxSizeInMB = 5): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

//supprime espace utilise début et fin , et met miniscule
export const normalizeString = (str: string): string => {
  return str.trim().toLowerCase();
};

export const getExpirationMessage = (
  value: string | undefined,
  months = 12
) => {
  if (!value) return;

  const date = new Date(value);

  // ajouter X mois à la date donnée
  const expirationDate = new Date(date);
  expirationDate.setMonth(expirationDate.getMonth() + months);

  // format français (jour/mois/année)
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDate = expirationDate.toLocaleDateString("fr-FR", options);

  return `Valable jusqu’au ${formattedDate}`;
};
