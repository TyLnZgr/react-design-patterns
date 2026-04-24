import useFormState from "../hooks/useFormState";

function FormExample() {
  const { values, handleChange, reset } = useFormState({
    name: "",
    email: "",
    newsletter: false,
  });

  return (
    <article className="example-card">
      <header>
        <h2>useFormState</h2>
        <p>
          Form durumunu soyutlayarak tekrarlayan input yönetimini kolaylaştırır.
          Her formu bağımsız bir hook ile kullanabilirsiniz.
        </p>
      </header>
      <form className="form-row" onSubmit={(event) => event.preventDefault()}>
        <label>
          İsim
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Adınızı girin"
          />
        </label>
        <label>
          E-posta
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="ornek@mail.com"
          />
        </label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            name="newsletter"
            checked={values.newsletter}
            onChange={handleChange}
          />
          Haber bültenine abone ol
        </label>
      </form>
      <div className="example-actions">
        <button type="button" onClick={reset}>
          Temizle
        </button>
      </div>
      <div className="example-output">
        <strong>Geçerli Değerler</strong>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </article>
  );
}

export default FormExample;
