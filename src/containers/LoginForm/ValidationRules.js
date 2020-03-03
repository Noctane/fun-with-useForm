export default function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "L'adresse email est requise";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "L'adresse email est invalide";
  }

  if (!values.password) {
    errors.password = 'Le mot de passe est requis';
  }

  return errors;
}
