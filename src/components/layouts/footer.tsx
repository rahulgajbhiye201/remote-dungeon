const Footer = () => {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-between bg-black p-4 text-white">
      <div className="w-11/12 flex-col gap-4 lg:w-10/12 xl:w-9/12 2xl:w-7/12">
        <div className="flex flex-col gap-2">
          <span>Sources</span>
          <div className="flex flex-col">
            <a href="https://weworkremotely.com/">We Work Remotely</a>
            <a href="https://remotive.com/">Remotive</a>
          </div>
        </div>
      </div>
      <div>Made with ❤️ Rahul Gajbhiye </div>
    </div>
  );
};

export default Footer;
