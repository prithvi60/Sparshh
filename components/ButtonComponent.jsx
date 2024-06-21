const ButtonComponent = ({text}) => {
  return (
    // <button
    //   type="submit"
    //   className={`block rounded-lg px-4 py-2 bg-info hover:bg-success text-center text-base duration-700 delay-75 font-lato capitalize mx-auto sm:mx-0 w-full sm:w-[350px] group`}
    // >
    <div className={`h-6 w-full overflow-hidden`}>
      <h4
        className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
      >
        {text}
      </h4>
      <h4
        className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
      >
       {text}
      </h4>
    </div>
    // </button>
  );
};

export default ButtonComponent;