import { loginPageStr } from "@/constants/stringRes";
import FormTextInput from "@/shared/FormTextInput/FormTextInput.component";
import { Button } from "@/shared/ui/button";
import { useUserStore } from "@/store/user.store";
import {
  LoginValidationSchema,
  loginFormState,
} from "@/validations/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const login = useUserStore((state) => state.login);
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

  const onLogin: SubmitHandler<loginFormState> = async (formState) => {
    await login(formState);
  };

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
