const Footer = () => {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-between bg-black p-4 text-white">
      <div className="flex w-11/12 flex-row justify-between gap-4 lg:w-10/12 xl:w-9/12 2xl:w-7/12">
        <div className="flex flex-col gap-2 p-4">
          <span>Sources</span>
          <div className="flex flex-col">
            <a href="https://weworkremotely.com/">We Work Remotely</a>
            <a href="https://remotive.com/">Remotive</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <span>Follow Me</span>
          <div className="flex flex-col">
            <a href="https://github.com/rahulgajbhiye201">Github</a>
            <a href="https://www.linkedin.com/in/rahulgajbhiye201">LinkedIn</a>
            <a href="https://twitter.com/rahulgajbhiye01">X</a>
          </div>
        </div>
      </div>
      <div>Made with 🤍 Rahul Gajbhiye </div>
    </div>
  );
};

export default Footer;
