import LogoImages from "../../assets/img/google.png";
import Button from "../atoms/button";

function LoginGoogle() {
  return (
    <>
      <div className="flex items-center my-6">
        <div className="grow border-b border-[#333333ad]" />
        <span className="mx-2 text-[#333333ad] text-sm">atau</span>
        <div className="grow border-b border-[#333333ad]" />
      </div>

      <Button variant="secondary">
        <img
          src={LogoImages}
          alt="Google"
          className="w-5 h-5 inline-block mr-2"
        />
        Masuk dengan Google
      </Button>
    </>
  );
}

export default LoginGoogle;
