import { LoginTemplate } from "@/components/templates/LoginTemplate/LoginTemplate";
import { SignInDto } from "@/contracts/types/SignInDto";

export default function LoginScreen() {
  const handleLogin = async (data: SignInDto) => {
    console.log("Login data " + JSON.stringify(data));
  };

  return <LoginTemplate onLogin={handleLogin} />;
}