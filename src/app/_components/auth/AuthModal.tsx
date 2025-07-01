"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import AuthFormContainer from "./AuthFormContainer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthModal = () => {
  const params = useSearchParams();
  const route = useRouter();
  const closeDialog = () => {
    route.back();
  };

  return (
    <>
      <Dialog open={params.get("auth") === "login"} onOpenChange={closeDialog}>
        <DialogContent className="max-w-[calc(100%-1rem)] sm:max-w-fit p-0">
          <AuthFormContainer>
            <LoginForm />
          </AuthFormContainer>
        </DialogContent>
      </Dialog>

      <Dialog open={params.get("auth") === "signup"} onOpenChange={closeDialog}>
        <DialogContent className="max-w-[calc(100%-1rem)] sm:max-w-fit p-0">
          <AuthFormContainer>
            <SignupForm />
          </AuthFormContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModal;
