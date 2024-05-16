import FormTextInput from "@/shared/FormTextInput/FormTextInput.component";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginValidationSchema,
  loginFormState,
} from "@/validations/loginValidation";
import { Button } from "@/shared/ui/button";
import { loginPageStr } from "@/constants/stringRes";

const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<loginFormState>({
    resolver: zodResolver(LoginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin: SubmitHandler<loginFormState> = (formState) => {
    console.log(formState);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => {
          return (
            <FormTextInput
              label={loginPageStr.emailFieldLabel}
              error={errors[field.name]?.message}
              {...field}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return (
            <FormTextInput
              label={loginPageStr.passFieldLabel}
              error={errors[field.name]?.message}
              {...field}
            />
          );
        }}
      />
      <Button>{loginPageStr.submit}</Button>
    </form>
  );
};

export default LoginForm;
