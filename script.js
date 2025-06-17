document.getElementById("iris-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    sepal_length: document.getElementById("sepal_length").value,
    sepal_width: document.getElementById("sepal_width").value,
    petal_length: document.getElementById("petal_length").value,
    petal_width: document.getElementById("petal_width").value
  };

  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.species) {
      document.getElementById("result").innerText = `Predicted Species: ${result.species}`;
    } else {
      document.getElementById("result").innerText = `Error: ${result.error}`;
    }
  } catch (error) {
    document.getElementById("result").innerText = "Something went wrong!";
  }
});
