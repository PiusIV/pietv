function ErrorMessage({ message }) {
  return (
    <div className="grid p-10">
      <p className="font-serif text-white uppercase text-3xl">{message}</p>
    </div>
  );
}

export default ErrorMessage;
