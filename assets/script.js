(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.style.backgroundColor = "pink";
    // pega todos os inputs do form
    const inputsForm = form.querySelectorAll("input");
    const inputsFormValidation = [];
    inputsForm.forEach((inputForm) => {
      // quando o input atualizar
      inputForm.oninput = () => {
        // veja se são válidos
        const inputsFormValidation = Array.from(inputsForm).map((input) => ({
          name: input.name,
          isValid: input.checkValidity(),
        }));
        // se forem todos válidos
        if (
          inputsFormValidation.filter(
            (formValidation) => formValidation.isValid
          ).length === inputsForm.length
          //     inputsFormValidation.some(
          //     (formValidation) => !formValidation.isValid
          //   ) === false
        ) {
          // ativa o submit
          form.querySelector("button").disabled = false;
        } else {
          // se não, desativa o submit
          form.querySelector("button").disabled = true;
        }
      };
    });
    form.onsubmit = () => {
      const formData = new FormData(form);
      const userName = formData.get("username");
      const password = formData.get("password");
      alert(`${userName}: ${password}`);
    };
  });
})();
