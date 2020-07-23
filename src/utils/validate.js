const email = (value) => {
  let errors = {};
  if (!value) {
    return (errors.email = "Введите E-Mail");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return (errors.email = "Неверный E-Mail");
  }
};
const password = (value) => {
  let errors = {};
  if (!value) {
   return errors.password = "Введите пароль";
  } else if (

    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
  ) {
   return errors.password = "Слишком лёгкий пароль";
  }
};
const password_2 = (value) => {
  let errors = {};
  if (value !== value.password) {
 return   errors.password_2 = "Пароли не совпадают";
  }
};
const firstName = (value) => {
  let errors = {};
  if ( !value) {
  return  errors.fullname = "Укажите свое имя и фамилию";
  }
};

export default {
  email,
  password,
  password_2,
  firstName,
};
